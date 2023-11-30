uniform float uTime;

varying vec2 vUv;

#pragma glslify: perlin2d = require('../partials/perlin2d.glsl')

void main()
{
    vec3 newPosition = position;
    vec2 displacementUv = uv;
    displacementUv *= 3.0;
    displacementUv.x += uTime * 0.0005;

    float displacementStrength = pow((1.0 - uv.y) * 5.0, 2.1);
    float perlin = perlin2d(displacementUv) * displacementStrength;

    newPosition.x += perlin * 0.1;

    vec4 modelPosition = modelMatrix * vec4(newPosition, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    gl_Position = projectedPosition;

    vUv = uv;
}