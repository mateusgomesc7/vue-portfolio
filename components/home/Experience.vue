<template>
    <div ref="card" class="webgl-container">
        <canvas class="webgl"></canvas>
    </div>
</template>

<script>
import { Mesh, BoxGeometry, MeshStandardMaterial, Raycaster, Vector2 } from 'three'
import { ThreeJsMixin } from '@/mixins/ThreeJsMixin.js'

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
            this.box = new Mesh(
                new BoxGeometry(1, 1, 1),
                new MeshStandardMaterial({ color: 0x616161 })
            )
            this.scene.add(this.box)
            this.raycaster = new Raycaster()
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
    width: 100%;
    height: 100%;
}
</style>
