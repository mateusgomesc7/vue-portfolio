<template>
    <v-col ref="col" class="d-flex justify-center" cols="12" md="7">
        <canvas class="webgl"></canvas>
    </v-col>
</template>

<script>
import { Scene, PerspectiveCamera, Mesh, BoxGeometry, MeshBasicMaterial, WebGLRenderer } from 'three'

export default {
    data () {
        return {
            scene: undefined,
            sizes: {
                width: undefined,
                height: undefined
            },
            camera: undefined,
            box: undefined,
            renderer: undefined,
            time: Date.now()
        }
    },
    mounted() {
        this.createScene()
        this.setRenderer()
        window.addEventListener('resize', this.handleResize);
        this.tick()
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
        createScene() {
            this.scene = new Scene();

            const colElement = this.$refs.col;
            this.sizes.width = colElement.offsetWidth;
            this.sizes.height = colElement.offsetHeight;

            this.camera = new PerspectiveCamera(
                75,
                this.sizes.width / this.sizes.height,
                0.1,
                1000
            )
            this.camera.position.set(0,0,2)
            this.scene.add(this.camera)

            this.box = new Mesh(
                new BoxGeometry(1, 1, 1),
                new MeshBasicMaterial({ color: 0xff0000 })
            )
            this.scene.add(this.box)
        },
        tick() {
            // Time
            const currentTime = Date.now()
            const deltaTime = currentTime - this.time
            this.time = currentTime

            // Update objects
            this.box.rotation.y += 0.001 * deltaTime
            this.box.rotation.x += 0.002 * deltaTime

            // Render
            this.renderer.render(this.scene, this.camera)

            // Call tick again on the next frame
            window.requestAnimationFrame(this.tick)
        },
        setRenderer() {
            this.renderer = new WebGLRenderer({
                canvas: document.querySelector('canvas.webgl')
            })
            this.renderer.setSize(this.sizes.width, this.sizes.height)
            this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
            this.renderer.render(this.scene, this.camera)
        },
        handleResize() {
            const colElement = this.$refs.col;
            this.sizes.width = colElement.offsetWidth;
            this.sizes.height = colElement.offsetHeight;

            console.log(this.sizes.width, this.sizes.height)

            // Update camera
            this.camera.aspect = this.sizes.width / this.sizes.height
            this.camera.updateProjectionMatrix()

            // Update renderer
            this.renderer.setSize(this.sizes.width, this.sizes.height)
            this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        }
    }
}
</script>

<style scoped>
canvas {
    width: 100%;
    height: 100%;
}
</style>
