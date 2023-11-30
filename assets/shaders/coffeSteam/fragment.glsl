uniform float uTime;
uniform float uTimeFrequency;
uniform vec2 vUvFrequency;

varying vec2 vUv;

#pragma glslify: perlin2d = require('../partials/perlin2d.glsl')

void main()
{
    vec2 uv = vUv * vUvFrequency;
    uv.y += uTime * uTimeFrequency;

    float borderAlpha = min(vUv.x * 5.0, (1.0 - vUv.x) * 5.0);
    borderAlpha = borderAlpha * vUv.y;

    float perlin = perlin2d(uv);
    perlin *= borderAlpha;
    perlin *= 0.6;
    perlin = min(perlin, 1.0);

    gl_FragColor = vec4(1.0, 1.0, 1.0, perlin);
}