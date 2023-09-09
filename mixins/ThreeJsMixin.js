import { Scene, PerspectiveCamera, WebGLRenderer, AmbientLight, DirectionalLight } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export const ThreeJsMixin = {
    data() {
        return {
            scene: null,
            camera: null,
            controls: null,
            renderer: null,
            ambientLight: null,
            directionalLight: null,
            sizes: {
                width: 0,
                height: 0,
            }
        }
    },
    mounted() {
        this.createScene()
        this.createRenderer()
        window.addEventListener('resize', this.handleResize);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
        setSizes() {
            const cardElement = this.$refs.card;
            this.sizes.width = cardElement.offsetWidth;
            this.sizes.height = cardElement.offsetHeight;
        },
        handleResize() {
            this.setSizes()

            // Update camera
            this.camera.aspect = this.sizes.width / this.sizes.height
            this.camera.updateProjectionMatrix()

            // Update renderer
            this.renderer.setSize(this.sizes.width, this.sizes.height)
            this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        },
        createScene() {            
            this.scene = new Scene()
            this.setSizes()
            this.createCamera()
            this.createControls()
            this.createLights()
        },
        createCamera() {        
            this.camera = new PerspectiveCamera(
                45,
                this.sizes.width / this.sizes.height,
                0.1,
                100
            )
            this.camera.position.set(4,3,5)
            this.scene.add(this.camera)
        },
        createControls() {
            const canvas = document.querySelector('canvas.webgl')

            this.controls = new OrbitControls(this.camera, canvas)
            this.controls.enableDamping = true
            this.controls.minAzimuthAngle = -Math.PI / 24
            this.controls.maxAzimuthAngle = Math.PI / 2
            this.controls.maxPolarAngle = Math.PI / 2
            this.controls.minDistance = 1
            this.controls.maxDistance = 10
            this.controls.enablePan = false
            this.controls.rotateSpeed = 0.5
        },
        createLights() {
            this.ambientLight = new AmbientLight()
            this.ambientLight.intensity = 0.5
            this.scene.add(this.ambientLight)

            this.directionalLight = new DirectionalLight()
            this.directionalLight.position.set(-1, 1, 2)
            this.scene.add(this.directionalLight)
        },
        createRenderer() {
            this.renderer = new WebGLRenderer({
                canvas: document.querySelector('canvas.webgl'),
                alpha: true
            })

            this.renderer.setSize(this.sizes.width, this.sizes.height)
            this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
            this.renderer.render(this.scene, this.camera)
        }
    }
}