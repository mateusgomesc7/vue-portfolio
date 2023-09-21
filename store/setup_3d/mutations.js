export default {
    setMaterials(state, materials) {
        state.materials = {
            bakedLightMaterial: materials.bakedLightMaterial,
            bakedDarkMaterial: materials.bakedDarkMaterial,
            fanLightMaterial: materials.fanLightMaterial,
            symbolLightMaterial: materials.symbolLightMaterial,
        }
    }
}