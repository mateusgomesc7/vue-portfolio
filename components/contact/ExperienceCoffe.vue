<template>
    <div ref="card" class="webgl-container">
        <canvas class="webgl"></canvas>
    </div>
</template>

<script>
import { MeshStandardMaterial, Raycaster, Vector2, LoadingManager,
TextureLoader, SRGBColorSpace, MeshBasicMaterial  } from 'three'
import { ThreeJsMixin } from '@/mixins/ThreeJsMixin.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'

export default {
    name: 'ExperienceCoffee',
    mixins: [ThreeJsMixin],
    data () {
        return {
            raycaster: null,
            mouse: new Vector2(-1,-1),
            currentIntersect: null, 
            time: Date.now(),
            animationFrameId: null,
            overlay: true,
            isLoaded: false,
            opacityOverlay: 0.3,

            bakedDarkMaterial: null,
            bakedLightMaterial: null,
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
            // const textureLoader = new TextureLoader(loadingManager)
            // Draco loader
            const dracoLoader = new DRACOLoader(loadingManager)
            dracoLoader.setDecoderPath('draco/')
            // GLTF loader
            const gltfLoader = new GLTFLoader(loadingManager)
            gltfLoader.setDRACOLoader(dracoLoader)

            gltfLoader.load(
                'coffe.glb',
                (gltf) =>
                {
                    // gltf.scene.traverse((child) =>
                    // {
                    //     child.material = this.bakedLightMaterial
                    // })

                    this.scene.add(gltf.scene)
                }
            )

            /**
             * Model 
             */
            //  gltfLoader.load(
            //     'coffe.glb',
            //     (gltf) =>
            //     {
            //         // gltf.scene.traverse((child) =>
            //         // {
            //         //     child.material = this.bakedLightMaterial
            //         // })

            //         // this.scene.add(gltf.scene)
            //     }
            // )
        },
        tick() {
            // Time
            const currentTime = Date.now()
            const deltaTime = currentTime - this.time
            this.time = currentTime

            // Update controls
            this.controls.update()

            // Update objects

            // raycaster
            // this.raycaster.setFromCamera(this.mouse, this.camera)
            // const objectToTest = this.torusKnot
            // const intersects = this.raycaster.intersectObject(objectToTest)
            
            // if(intersects.length)
            // {
            //     this.currentIntersect = intersects[0]
            // }
            // else
            // {
            //     this.currentIntersect = null
            // }

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