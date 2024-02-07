<template>
  <v-card flat color="transparent">
    <v-card-title class="text-h3 py-6">
      naeruru
      <v-icon class="text-h4">mdi-star-four-points</v-icon>
    </v-card-title>
    <v-card-text class="text-subtitle-1 py-2">
      <p class="mb-2">
        Hihi, I'm
        <a class="text-secondary">
          <ruby>
            nae<rt>ネー</rt>
          </ruby>
        </a>!
        You might know me as
        <a class="text-secondary">
          <ruby>
            nae<rt>ネー</rt>
            ruru<rt>ルル</rt>
          </ruby>
        </a>.
      </p>
      <p class="mb-2">
        I'm a software dev and designer who specializes in front-end development and design. 
        Most of the time I'm just working on things I'm randomly passionate about!
      </p>
      <p class="mb-2">
        If you're interested in some stuff I've worked on, check out
        <a @click="$router.push({ name: 'work' })" class="text-primary pointer">my projects</a>
        page. Conversely, you can check out my
        <a @click="$router.push({ name: 'cat' })" class="text-primary pointer">my cat</a>
        too.
      </p>

      <p class="mb-4">

      </p>
      <details>
        <summary class="text-primary pointer">other stuff</summary>
        <ul>
          <li v-for="item in list_info">
            <p v-html="item.text"></p>
          </li>
        </ul>
      </details>

      <v-divider class="mx-10 my-6"></v-divider>

      <v-row class="justify-center mb-4">
        <v-col v-for="button in buttons" :cols=12 :xs="12" :sm="10">
          <v-btn variant="outlined" block @click="open_url(button.url)"
            @click.middle="open_url(button.url)">
            <template v-slot:prepend>
              <v-icon color="secondary">{{ button.icon }}</v-icon>
            </template>
            {{ button.title }}
            <p v-if="button.desc" class="text-caption text-medium-emphasis text-primary"> ー {{ button.desc }}</p>
          </v-btn>
        </v-col>
      </v-row>

    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import open_url from '@/helpers/open_url';

export default {
  data: () => ({
    page: 0,
    list_info: [
      {
        text: `I love to draw and design stuff!`,
      },
      {
        text: `I speak Japanese (N3) and English. Please talk to me in either!`,
      },
      {
        text: `I'm really into VR. I do all sorts of things like mocap, animations, custom shaders, and face tracking rigging.`,
      },
      {
        text: `I cosplay. My favorite so far was <a class="text-cyan-lighten-1">Shirakami Fubuki (FubukiTEK)</a>.`,
      }
    ],
    buttons: [
      {
        title: 'Twitter',
        desc: '',
        icon: 'mdi-twitter',
        'url': 'https://twitter.com/naeruruu'
      },
      {
        title: 'GitHub',
        desc: '',
        icon: 'mdi-github',
        'url': 'https://github.com/naeruru'
      },
      {
        title: 'Booth.pm',
        desc: 'shop',
        icon: 'custom:booth_pm',
        'url': 'https://naeruru.booth.pm'
      },
      {
        title: 'Ko-fi',
        desc: 'shop & commissions',
        icon: 'mdi-coffee-outline',
        'url': 'https://ko-fi.com/naeruru'
      },
      {
        title: 'Bluesky',
        desc: '',
        icon: 'custom:bluesky',
        'url': 'https://bsky.app/profile/naeruru.com'
      },
    ]
  }),
  setup() {
    return {
      open_url,
    }
  }
}
</script>

<style>
.pointer {
  cursor: pointer;
}
</style>
