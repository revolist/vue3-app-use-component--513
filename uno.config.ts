import { defineConfig } from 'unocss'
import { presetUseful } from 'unocss-preset-useful'
import presetLegacyCompat from '@unocss/preset-legacy-compat'

export default defineConfig({
    presets: [
    // presetWind(),
        presetUseful(),
        presetLegacyCompat({
            // options
            commaStyleColorFunction: true,
        }),
    ],

    theme: { },
})
