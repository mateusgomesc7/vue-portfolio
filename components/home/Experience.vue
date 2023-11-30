<template>
    <div ref="card" class="webgl-container">
        <canvas class="webgl"></canvas>
        <div v-if="$vuetify.breakpoint.smAndDown">
            <v-btn
                v-show="!overlay"
                id="stop-3d-model"
                fab
                small
                style="position: absolute; bottom: 0; left: 0;"
                color="primary"
                class="ml-4 mb-2"
                @click="overlay = true"
            >
                <v-icon>
                    mdi-stop-circle-outline
                </v-icon>
            </v-btn>
            <v-btn
                v-show="overlay"
                id="play-3d-model"
                fab
                small
                color="accent"
                @click="overlay = false"
            >
                <v-icon color="primary">
                    mdi-play-circle-outline
                </v-icon>
            </v-btn>
        </div>
        <v-overlay
            ref="overlay"
            :value="overlay || !isLoaded"
            absolute
            z-index="2"
            :opacity="opacityOverlay"
            class="d-flex justify-center align-center"
        >
            <v-progress-circular
                v-if="!isLoaded"
                indeterminate
                size="64"
            ></v-progress-circular>
        </v-overlay>
    </div>
</template>

<script>
import { Mesh, BoxGeometry, MeshStandardMaterial, Raycaster, Vector2, TextureLoader, SRGBColorSpace,
    MeshBasicMaterial, LoadingManager, VideoTexture } from 'three'
import { ThreeJsMixin } from '@/mixins/ThreeJsMixin.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'

export default {
    name: 'Experience',
    mixins: [ThreeJsMixin],
    data () {
        return {
            box: null,
            raycaster: null,
            mouse: new Vector2(-1,-1),
            currentIntersect: null, 
            time: Date.now(),
            animationFrameId: null,
            bakedDarkMaterial: null,
            bakedLightMaterial: null,
            fanLightMaterial: null,
            symbolLightMaterial: null,
            videoCodeMaterial: null,
            videoPortfolioMaterial: null,
            overlay: true,
            isLoaded: false,
            opacityOverlay: 0.3
        }
    },
    watch: {
        '$vuetify.theme.dark': {
            handler: function (val, oldVal) {
                if (val !== oldVal) {
                    this.changeTheme()
                }
            },
            deep: true
        },
        '$vuetify.breakpoint.smAndDown': {
            handler: function (val, oldVal) {
                if (val !== oldVal) {
                    if (val)
                        this.overlay = true
                    else
                        this.overlay = false
                }
            },
            deep: true
        }
    },
    mounted() {
        this.createWorld()
        this.$refs.card.addEventListener('click', this.mouseClick)
        this.$refs.card.addEventListener('mousemove', this.mouseMove)
        this.tick()
    },
    beforeDestroy() {
        this.$refs.card.removeEventListener('click', this.mouseClick)
        this.$refs.card.removeEventListener('mousemove', this.mouseMove)
        cancelAnimationFrame(this.animationFrameId)
    },
    methods: {
        changeTheme() {
            const setupMesh = this.scene.children[4]

            if (this.$vuetify.theme.dark)
            {
                this.box.material.color.set(this.$vuetify.theme.themes.light.primary)
                setupMesh.traverse((child) =>
                {
                    child.material = this.bakedDarkMaterial
                })
                this.updateLights(setupMesh)
                this.updateScreens(setupMesh)
            }
            else
            {
                this.box.material.color.set(0x616161)
                setupMesh.traverse((child) =>
                {
                    child.material = this.bakedLightMaterial
                })
                this.updateLights(setupMesh)
                this.updateScreens(setupMesh)
            }
        },
        mouseClick() {
            if(this.currentIntersect)
            {
                this.$vuetify.theme.dark = !this.$vuetify.theme.dark
            }
        },
        mouseMove(event) {
            this.mouse.x = event.offsetX / this.sizes.width * 2 - 1
            this.mouse.y = - (event.offsetY / this.sizes.height) * 2 + 1
        },
        createWorld() {
            this.createBox()
            this.raycaster = new Raycaster()

            /**
             * Loaders
             */
            const loadingManager = new LoadingManager(
                // Loaded
                () =>
                {
                    this.isLoaded = true
                    this.opacityOverlay = 0
                    this.overlay = this.$vuetify.breakpoint.smAndDown
                },
                // Progress
                () => {}
            )
            // Texture loader
            const textureLoader = new TextureLoader(loadingManager)
            // Draco loader
            const dracoLoader = new DRACOLoader(loadingManager)
            dracoLoader.setDecoderPath('draco/')
            // GLTF loader
            const gltfLoader = new GLTFLoader(loadingManager)
            gltfLoader.setDRACOLoader(dracoLoader)

            /**
             * Textures
             */
            const bakedLightTexture = textureLoader.load('baked_light.jpg')
            bakedLightTexture.flipY = false
            bakedLightTexture.colorSpace = SRGBColorSpace

            const bakedDarkTexture = textureLoader.load('baked_dark.jpg')
            bakedDarkTexture.flipY = false
            bakedDarkTexture.colorSpace = SRGBColorSpace

            const videoCodeTexture = this.getVideoTexture('/assets/code.mp4')
            const videoPortfolioTexture = this.getVideoTexture('/assets/portfolio.mp4')

            /**
             * Materials
             */
            // Baked Material
            this.bakedLightMaterial = new MeshBasicMaterial({ map: bakedLightTexture })
            this.bakedDarkMaterial = new MeshBasicMaterial({ map: bakedDarkTexture })
            // Fan light Material
            this.fanLightMaterial = new MeshBasicMaterial({ color: 0xffffff })
            // Symbol light Material
            this.symbolLightMaterial = new MeshBasicMaterial({ color: 0xffffe5 })
            // Video code Material
            this.videoCodeMaterial = new MeshBasicMaterial({ map: videoCodeTexture })
            // Video portfolio Material
            this.videoPortfolioMaterial = new MeshBasicMaterial({ map: videoPortfolioTexture })


            /**
             * Model 
             */
            gltfLoader.load(
                'computer.glb',
                (gltf) =>
                {
                    gltf.scene.traverse((child) =>
                    {
                        if (this.$vuetify.theme.dark)
                            child.material = this.bakedDarkMaterial
                        else
                            child.material = this.bakedLightMaterial
                    })

                    this.updateLights(gltf.scene)
                    this.updateScreens(gltf.scene)

                    gltf.scene.position.y = -1
                    gltf.scene.position.x = 0.55

                    this.scene.add(gltf.scene)
                }
            )
        },
        createBox() {
            this.box = new Mesh(
                new BoxGeometry(0.18, 0.18, 0.18),
                new MeshStandardMaterial({ color: 0x616161 })
            )
            this.box.position.set(0, -0.1, 1.7)
            this.box.rotation.x = Math.PI/4
            if (this.$vuetify.theme.dark)
                this.box.material.color.set(this.$vuetify.theme.themes.light.primary)
            else
                this.box.material.color.set(0x616161)
            this.scene.add(this.box)
        },
        getVideoTexture(video) {
            const model = {}

            // Element
            model.element = document.createElement('video')
            model.element.muted = true
            model.element.loop = true
            model.element.controls = true
            model.element.playsInline = true
            model.element.autoplay = true
            model.element.src = video
            model.element.play()

            // Texture
            const texture = new VideoTexture(model.element)
            texture.colorSpace = SRGBColorSpace

            return texture
        },
        updateLights(mesh){
            const alexaLightMesh = mesh.children.find(child => child.name === 'alexaLight')
            const fanLightAMesh = mesh.children.find(child => child.name === 'fanLightA')
            const fanLightBMesh = mesh.children.find(child => child.name === 'fanLightB')
            const symbolLightBMesh = mesh.children.find(child => child.name === 'symbolLight')

            alexaLightMesh.material = this.fanLightMaterial
            fanLightAMesh.material = this.fanLightMaterial
            fanLightBMesh.material = this.fanLightMaterial
            symbolLightBMesh.material = this.symbolLightMaterial
        },
        updateScreens(mesh){
            const screenBMesh = mesh.children.find(child => child.name === 'screenB')
            const screenAMesh = mesh.children.find(child => child.name === 'screenA')

            screenBMesh.material = this.videoPortfolioMaterial
            screenAMesh.material = this.videoCodeMaterial
        },
        tick() {
            // Time
            const currentTime = Date.now()
            const deltaTime = currentTime - this.time
            this.time = currentTime

            // Update controls
            this.controls.update()

            // Update objects
            this.box.rotation.y += 0.0004 * deltaTime
            this.box.rotation.x += 0.0004 * deltaTime
            this.box.updateMatrixWorld()

            // raycaster
            this.raycaster.setFromCamera(this.mouse, this.camera)
            const objectToTest = this.box
            const intersects = this.raycaster.intersectObject(objectToTest)
            
            if(intersects.length)
            {
                this.currentIntersect = intersects[0]
            }
            else
            {
                this.currentIntersect = null
            }

            // Render
            this.renderer.render(this.scene, this.camera)

            // Call tick again on the next frame
            this.animationFrameId = window.requestAnimationFrame(this.tick)
        }
    }
}
</script>

<style scoped>
canvas {
    width: 100%;
    height: 100%;
}
.webgl-container {
    position: relative;
    width: 100%;
    height: 100%;
}
#play-3d-model {
    position: absolute;
    bottom: 50%;
    left: 45%;
    z-index: 5;
}
#stop-3d-model {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 5;
}
</style>
