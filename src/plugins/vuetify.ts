/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { h } from "vue"
import { IconSet, IconProps, createVuetify } from 'vuetify'

// icons
import booth_pm from "@/assets/icons/booth_pm.vue"
import bluesky from "@/assets/icons/bluesky.vue"
const customSvgNameToComponent: any = {
  booth_pm,
  bluesky,
}
const custom: IconSet = {
  component: (props: IconProps) =>
    h(props.tag, [h(customSvgNameToComponent[props.icon as string], { class: 'v-icon__svg' })]),
}

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'dark',
    themes: {
      light: {
        colors: {
          primary: '#1867C0',
          secondary: '#5CBBF6',
        },
      },
      dark: {
        colors: {
          primary: '#a88fff',
          secondary: '#ee82ff'
        }
      }
    },
  },
  icons: {
    defaultSet: "mdi",
    sets: {
      custom,
    },
  }
})
