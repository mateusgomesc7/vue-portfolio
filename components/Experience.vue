<template>
    <div ref="card" class="webgl-container">
        <canvas class="webgl"></canvas>
    </div>
</template>

<script>
import {
    Scene, PerspectiveCamera, Mesh,
    BoxGeometry, MeshStandardMaterial,
    WebGLRenderer, AmbientLight, DirectionalLight,
    Raycaster, DirectionalLightHelper
} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'


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
            ambientLight: undefined,
            directionalLight: undefined,
            directionalLightHelper: undefined,
            renderer: undefined,
            controls: undefined,
            raycaster: undefined,
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

            const cardElement = this.$refs.card;
            this.sizes.width = cardElement.offsetWidth;
            this.sizes.height = cardElement.offsetHeight;

            this.camera = new PerspectiveCamera(
                75,
                this.sizes.width / this.sizes.height,
                0.1,
                1000
            )
            this.camera.position.set(0,0,1.8)
            this.scene.add(this.camera)

            this.ambientLight = new AmbientLight()
            this.ambientLight.intensity = 0.5
            this.scene.add(this.ambientLight)

            this.directionalLight = new DirectionalLight()
            this.directionalLight.position.set(-1, 1, 2)
            this.scene.add(this.directionalLight)

            // this.directionalLightHelper = new DirectionalLightHelper(this.directionalLight, 0.2)
            // this.scene.add(this.directionalLightHelper)

            this.box = new Mesh(
                new BoxGeometry(1, 1, 1),
                new MeshStandardMaterial({ color: 0x616161 })
            )
            this.scene.add(this.box)

            this.raycaster = new Raycaster()
        },
        setRenderer() {
            this.renderer = new WebGLRenderer({
                canvas: document.querySelector('canvas.webgl'),
                alpha: true
            })
            // this.controls = new OrbitControls(this.camera, this.renderer.domElement)
            // this.controls.enableDamping = false

            // Desabilitar rotação vertical
            // this.controls.minPolarAngle = Math.PI / 2; // Ângulo polar mínimo
            // this.controls.maxPolarAngle = Math.PI / 2; // Ângulo polar máximo

            this.renderer.setSize(this.sizes.width, this.sizes.height)
            this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
            this.renderer.render(this.scene, this.camera)
        },
        handleResize() {
            const cardElement = this.$refs.card;
            this.sizes.width = cardElement.offsetWidth;
            this.sizes.height = cardElement.offsetHeight;

            // Update camera
            this.camera.aspect = this.sizes.width / this.sizes.height
            this.camera.updateProjectionMatrix()

            // Update renderer
            this.renderer.setSize(this.sizes.width, this.sizes.height)
            this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        },
        tick() {
            // Time
            const currentTime = Date.now()
            const deltaTime = currentTime - this.time
            this.time = currentTime

            // Update objects
            this.box.rotation.y += 0.0004 * deltaTime
            this.box.rotation.x += 0.0001 * deltaTime
            this.box.position.y = Math.sin(this.time * 0.001) * 0.3

            // Update controls
            // this.controls.update()

            // Render
            this.renderer.render(this.scene, this.camera)

            // Call tick again on the next frame
            window.requestAnimationFrame(this.tick)
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
    width: 100%;
    height: 100%;
}
</style>
