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
        I'm a software engineer who specializes in front-end development and design.
        I also do research in stuff like high performance computing and vision. Most 
        of the time I'm just working on things I'm randomly passionate about!
      </p>
      <p class="mb-2">
        If you're interested in some public projects I've worked on, check out
        <a @click="$router.push({ name: 'work' })" class="text-primary pointer">my projects</a>
        page. Conversely, you can check out my
        <a @click="$router.push({ name: 'cat' })" class="text-primary pointer">my cat</a>
        too.
      </p>
      <v-divider class="mx-10 my-6"></v-divider>

      <v-row class="justify-center mb-4">
        <v-col v-for="button in buttons" :cols=12 :xs="12" :sm="10">
          <v-btn variant="outlined" :prepend-icon="button.icon" block @click="open_url(button.url)"
            @click.middle="open_url(button.url)">
            {{ button.title }}
          </v-btn>
        </v-col>
      </v-row>

      <p class="mb-2">

      </p>
      <details>
        <summary class="text-primary pointer">other stuff</summary>
        <ul>
          <li v-for="item in list_info">
            <p v-html="item.text"></p>
          </li>
        </ul>
      </details>

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
        text: `I'm really into VR. I make all sorts of things like custom shaders and face tracking animators.`,
      },
      {
        text: `I cosplay. My favorite so far was <a class="text-cyan-lighten-1">Shirakami Fubuki (FubukiTEK)</a>!`,
      }
    ],
    buttons: [
      {
        title: 'Twitter',
        icon: 'mdi-twitter',
        'url': 'https://twitter.com/naeruruu'
      },
      {
        title: 'GitHub',
        icon: 'mdi-github',
        'url': 'https://github.com/naeruru'
      },
      {
        title: 'Booth',
        icon: 'mdi-link-variant',
        'url': 'https://naeruru.booth.pm'
      },
      {
        title: 'Bluesky',
        icon: 'mdi-link-variant',
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
