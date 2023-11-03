<template>
  <v-app-bar v-if="!xs" class="px-3 d-none d-sm-block" flat color="background" border density="compact">
    <!-- <v-btn v-for="social in socials" disabled class="d-none d-sm-block mx-1"></v-btn> -->

    <v-spacer></v-spacer>

    <v-tabs v-model="page" centered :grow="smAndDown" color="primary">
      <v-tab v-for="link in links" :key="link.title" @click="$router.push({ name: link.route })">
        <v-icon class="mr-2">{{ link.icon }}</v-icon>
        {{ link.title }}
      </v-tab>
    </v-tabs>
    <v-spacer></v-spacer>

    <!-- <v-btn v-for="social in socials" :icon="social.icon" class="d-none d-sm-block mx-1" @click="open_url(social.url)"></v-btn> -->
  </v-app-bar>
  <v-footer class="d-sm-none d-md-none pa-0" color="background" border dense app>
    <v-tabs v-model="page" centered grow color="primary">
      <v-tab v-for="link in links" :key="link.title" @click="$router.push({ name: link.route })">
        <v-icon class="mr-2">{{ link.icon }}</v-icon>
        {{ link.title }}
      </v-tab>
    </v-tabs>
  </v-footer>
</template>

<script lang="ts">
import { useDisplay } from 'vuetify'

export default {
  data: () => ({
    page: 0,
    links: [
      {
        title: 'Home',
        route: 'home',
        icon: 'mdi-home'
      },
      {
        title: 'Projects',
        route: 'work',
        icon: 'mdi-code-json'
      },
      {
        title: 'Cat',
        route: 'cat',
        icon: 'mdi-cat'
      }
    ],
    socials: [
      {
        icon: 'mdi-twitter',
        url: 'https://twitter.com/naeruruu'
      },
      {
        icon: 'mdi-github',
        url: 'https://github.com/naeruru'
      }
    ]
  }),
  methods: {
    update_page() {
      this.page = this.links.map(e => e.route).indexOf(this.$route.name as string)
    },
    open_url(url: string) {
      window.open(url, '_blank')
    }
  },
  watch: {
    $route(to, from) {
      this.update_page()
    }
  },
  mounted() {
    this.update_page()
  },
  setup() {
    const { xs, smAndDown } = useDisplay()

    return {
      xs,
      smAndDown,
    }
  },
}
</script>

<style>
html {
  overflow-y: hidden;
}
</style>