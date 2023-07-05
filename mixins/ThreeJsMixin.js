import { Scene, PerspectiveCamera, WebGLRenderer, AmbientLight, DirectionalLight } from 'three'

export const ThreeJsMixin = {
    data() {
        return {
            scene: null,
            camera: null,
            renderer: null,
            ambientLight: null,
            directionalLight: null,
            sizes: {
                width: 0,
                height: 0,
            },
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
            this.createLights()
        },
        createCamera() {        
            this.camera = new PerspectiveCamera(
                75,
                this.sizes.width / this.sizes.height,
                0.1,
                1000
            )
            this.camera.position.set(0,0,1.8)
            this.scene.add(this.camera)
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