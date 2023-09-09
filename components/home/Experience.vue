<template>
    <div ref="card" class="webgl-container">
        <canvas class="webgl"></canvas>
        <div v-if="$vuetify.breakpoint.smAndDown">
            <v-btn
                v-show="!overlay"
                fab
                style="position: absolute; bottom: 0; left: 0;"
                color="primary"
                class="ml-2 mb-2"
                @click="overlay = true"
            >
                <v-icon large>
                    mdi-stop-circle-outline
                </v-icon>
            </v-btn>
            <v-overlay
                :value="overlay"
                absolute
                z-index="2"
                opacity="0"
                class="d-flex justify-start align-end"
            >
                <v-btn
                    fab
                    color="accent"
                    class="ml-2 mb-2"
                    @click="overlay = false"
                >
                    <v-icon large color="primary">
                        mdi-play-circle-outline
                    </v-icon>
                </v-btn>
            </v-overlay>
        </div>
    </div>
</template>

<script>
import { Mesh, BoxGeometry, MeshStandardMaterial, Raycaster, Vector2, TextureLoader, SRGBColorSpace, MeshBasicMaterial } from 'three'
import { ThreeJsMixin } from '@/mixins/ThreeJsMixin.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'

export default {
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
            bakedMaterial: null,
            fanLightMaterial: null,
            symbolLightMaterial: null,
            overlay: true,
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
            const mesh = this.scene.children[4]

            if (this.$vuetify.theme.dark)
            {
                this.box.material.color.set(0x616161)
                mesh.traverse((child) =>
                {
                    child.material = this.bakedDarkMaterial
                })
                this.updateLights(mesh)
            }
            else
            {
                this.box.material.color.set(0xffffff)
                mesh.traverse((child) =>
                {
                    child.material = this.bakedMaterial
                })
                this.updateLights(mesh)
            }
        },
        mouseClick() {
            if(this.currentIntersect)
            {
                // Generate a random grayscale value between 0 and 255
                const randomGray = Math.floor(Math.random() * 201);

                // Create a hexadecimal color string in grayscale
                const colorString = `#${randomGray.toString(16).repeat(3)}`;
                this.currentIntersect.object.material.color.set(colorString)
            }
        },
        mouseMove(event) {
            this.mouse.x = event.offsetX / this.sizes.width * 2 - 1
            this.mouse.y = - (event.offsetY / this.sizes.height) * 2 + 1
        },
        createWorld() {
            this.box = new Mesh(
                new BoxGeometry(0.18, 0.18, 0.18),
                new MeshStandardMaterial({ color: 0x616161 })
            )
            this.box.position.set(0, -0.1, 1.7)
            this.box.rotation.x = Math.PI/4
            this.scene.add(this.box)
            this.raycaster = new Raycaster()

            /**
             * Loaders
             */
            // Texture loader
            const textureLoader = new TextureLoader()

            // Draco loader
            const dracoLoader = new DRACOLoader()
            dracoLoader.setDecoderPath('draco/')

            // GLTF loader
            const gltfLoader = new GLTFLoader()
            gltfLoader.setDRACOLoader(dracoLoader)

            /**
             * Textures
             */
            const bakedTexture = textureLoader.load('baked.jpg')
            bakedTexture.flipY = false
            bakedTexture.colorSpace = SRGBColorSpace

            const bakedDarkTexture = textureLoader.load('baked_dark.jpg')
            bakedDarkTexture.flipY = false
            bakedDarkTexture.colorSpace = SRGBColorSpace

            /**
             * Materials
             */
            // Baked Material
            this.bakedMaterial = new MeshBasicMaterial({ map: bakedTexture })
            this.bakedDarkMaterial = new MeshBasicMaterial({ map: bakedDarkTexture })

            // Fan light Material
            this.fanLightMaterial = new MeshBasicMaterial({ color: 0xffffff })

            // Symbol light Material
            this.symbolLightMaterial = new MeshBasicMaterial({ color: 0xffffe5 })

            /**
             * Model 
             */
            gltfLoader.load(
                'computer.glb',
                (gltf) =>
                {
                    gltf.scene.traverse((child) =>
                    {
                        child.material = this.bakedDarkMaterial
                    })

                    this.updateLights(gltf.scene)

                    gltf.scene.position.y = -1
                    gltf.scene.position.x = 0.55
                    this.scene.add(gltf.scene)
                }
            )
            console.log(this.scene)
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
            // this.box.position.y = Math.sin(this.time * 0.001) * 0.1
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
</style>
