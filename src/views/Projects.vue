<template>
  <v-card flat color="transparent">
    <v-card-text>
      <p>
        I do a lot of various projects in my personal time! Please check out a few of it below~
      </p>
    </v-card-text>

    <!-- <v-list class="text-wrap" desnity="comfortable" bg-color="transparent">
      <div v-for="project, i in projects">
        <div v-if="project.type === 'title'" class="my-4"></div>
        <v-list-subheader v-if="project.type === 'title'" class="text-secondary text-subtitle-1">{{ project.title }}</v-list-subheader>

        <v-list-item
          v-if="project.type === 'project'"
          @click="selected = project"
          :key="i"
          :value="project"
          color="primary"
        >

          <v-list-item-title v-text="project.title"></v-list-item-title>
          <p class="text-subtitle-2 text-medium-emphasis" v-text="project.subtitle"></p>
        </v-list-item>
      </div>
    </v-list> -->

    <!-- <div v-for="section in sections">
      <div class="my-4"></div>
      <v-list-subheader class="px-2 text-secondary text-subtitle-1">{{ section.title }}</v-list-subheader>
      <v-expansion-panels>
        <v-expansion-panel v-for="(item, i) in section.items" bg-color="transparent" elevation="0">
          <v-expansion-panel-title expand-icon="mdi-menu-down">
            <div>
              <v-row >
                <v-col :cols=12 class="px-0 py-0">
                  <p class="text-high-emphasis">{{ item.title }}</p>
                </v-col>
                <p class="text-subtitle-1 text-medium-emphasis mr-4" v-text="item.subtitle"></p>
              </v-row>
            </div>
          </v-expansion-panel-title>
          <v-expansion-panel-text>asdf</v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </div> -->

    <!-- <v-divider class="mb-6"></v-divider> -->

    <!-- <div v-if="selected.type">
      <v-card-title v-if="selected.type === 'title'" class="text-h4 my-4 text-secondary">{{ selected.title
      }}</v-card-title>
      <v-card-text v-else-if="selected.type === 'extra'" class="mb-12">
        <p v-html="selected.title"></p>
      </v-card-text>
      <v-card-text v-else class="text-subtitle-1 my-4">
        <v-row>
          <v-col class="pt-6" v-if="selected.image" :cols="12" :md="12" :lg="6">
            <v-img :lazy-src="selected.lazy_image" :src="selected.image"></v-img>
          </v-col>
          <v-col :cols="12" :md="12" :lg="(selected.image) ? 6 : 12">
            <v-card color="transparent" flat>
              <v-card-title class="text-h5">
                {{ selected.title }}
              </v-card-title>
              <v-card-text v-html="selected.description" class="text-subtitle-1">
              </v-card-text>
              <v-card-actions class="justify-end">
                <v-btn v-for="link in selected.links" :icon="link.icon" class="mx-1" color="primary" flat
                  @click="open_url(link.url)" @click.middle="open_url(link.url)"></v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>


      </v-card-text>
    </div> -->

    <div v-for="section, i in sections">
      <v-card-title class="text-h4 my-4 text-secondary pl-0 pb-1 text-wrap">
        <v-icon size="x-small" class="pb-1" color="white">mdi-creation</v-icon>
        {{ section.title }}
      </v-card-title>
      <v-card-text v-for="item, i in section.items" :id="item.id" class="px-0 my-2">
        <!-- <v-divider class="mb-6"></v-divider> -->
        <v-row class="d-flex">
          <v-col v-if="item.image" :cols="12" :md="12" :lg="12">
            <v-img :lazy-src="item.lazy_image" :src="item.image" max-height="500" max-width="800" class="mx-auto"></v-img>
          </v-col>
          <v-col :cols="12" :md="12" :lg="12">
              <v-card-title class="text-h5 pt-0">
                {{ item.title }}
              </v-card-title>
              <v-card-text v-html="item.description" class="text-subtitle-1">
              </v-card-text>
              <v-card-actions class="justify-end">
                <v-btn v-for="link in item.links" :icon="link.icon" class="mx-1" color="primary" flat
                  @click="open_url(link.url)" @click.middle="open_url(link.url)">
                  <v-icon>{{ link.icon }}</v-icon>
                  <v-tooltip activator="parent" location="top" offset="4">{{ link.title }}</v-tooltip>
                </v-btn>
              </v-card-actions>
          </v-col>
        </v-row>
        <v-divider class="mb-6"></v-divider>
      </v-card-text>
    </div>

  </v-card>
</template>

<script lang="ts">
import facetracking from '@/assets/work/facetracking.webp'
import facetracking_lazy from '@/assets/work/facetracking-lazy.webp'

import cbt_lazy from '@/assets/work/chatboxtools-lazy.png';

import starboard from '@/assets/work/starboard.png';
import starboard_lazy from '@/assets/work/starboard-lazy.png';

import vr_watch from '@/assets/work/vr_watch.gif';
import vr_watch_lazy from '@/assets/work/vr_watch-lazy.png';

import watchpls from '@/assets/work/watchpls.png';
import watchpls_lazy from '@/assets/work/watchpls-lazy.png';

import open_url from '../helpers/open_url'

interface Item {
  type?: string,
  title?: string,
  id?: string,
  subtitle?: string,
  description?: string,
  image?: string,
  lazy_image?: string,
  image_size?: number,
  links?: Link[],
}

interface Link {
  title: string,
  url: string,
  icon: string,
}

export default {
  setup() {
    return {
      cbt_lazy,
      vr_watch,
      vr_watch_lazy,
      watchpls,

      open_url,
    }
  },
  data: () => ({
    selected: {} as Item,
    sections: [
      {
        title: 'VR, 3D models, Vtubing',
        items: [
          {
            title: `Face Tracking Rigging`,
            id: `facetracking`,
            type: `project`,
            subtitle: `Full face tracking rigging with custom animators for face tracking on 3D models with VR/ARKit`, 
            description: `I make face tracking rigs for 3D models that works with and without VR. I do both public releases and commissions! You can check my Ko-fi or Booth to see public releases.`,
            image: facetracking,
            lazy_image: facetracking_lazy,
            links: [
              {
                title: `Booth.pm`,
                url: `https://naeruru.booth.pm`,
                icon: `custom:booth_pm`,
              },
              {
                title: `Ko-fi`,
                url: `https://ko-fi.com/naeruru`,
                icon: `mdi-coffee-outline`,
              }
            ],
          },
          {
            title: `Vket Booths`,
            id: `vket`,
            type: `project`,
            description: `With the help of friends, I make creative <a href="https://event.vket.com/en" target="_blank">Vket</a> (Virtual Market) booths that break the mold of a traditional booth showing. 
            So far, I've worked on booths for <a href="https://vrchat.com/home/world/wrld_ec86c5f6-90b6-40d8-928a-d405809c3421" target="_blank">Vket Summer 2023</a> (under Kute Mute), 
            and <a href="https://vrchat.com/home/world/wrld_046de0c3-a82a-4ed7-9ba9-4e00444aadf8" target="_blank">Vket Winter 2023</a> (under mayoartworks). 
            They're built with the mindset of drawing you in and giving unique presentations in the virtual world. They're worth a look!`,
            // image: facetracking,
            // lazy_image: facetracking_lazy,
          },
        ] as Item[]
      },
      {
        title: 'Github',
        items: [
          {
            title: `mimiuchi`,
            id: `facetracking`,
            type: `project`,
            subtitle: `Full face tracking rigging with custom animators for face tracking on 3D models with VR/ARKit`, 
            description: `I make face tracking rigs for 3D models that works with and without VR. I do both public releases and commissions! You can check my Ko-fi or Booth to see public releases.`,
            image: `https://user-images.githubusercontent.com/9059594/276826037-666900a9-d176-4c39-a5dd-6a320a46cd8c.gif`,
            lazy_image: cbt_lazy,
            links: [
              {
                title: 'mimiuchi.com',
                url: `https://mimiuchi.com/`,
                icon: `mdi-web`
              },
              {
                title: 'Github',
                url: `https://github.com/naeruru/mimiuchi`,
                icon: `mdi-code-braces`
              }
            ],
          },
          {
            title: `Starboard`,
            id: `starboard`,
            subtitle: `a fullstack discord system that pins messages that reach a reaction threshold`,
            type: `project`,
            image: starboard,
            lazy_image: starboard_lazy,
            description: `A Discord bot for highlighting messages that reach a react threshold. <i>Eh? That's it?</i><br> . . . (ĭ﹏ĭ ;) kinda! Its standout features are that
                                it is super simple to set up (it requires no databases), and is designed for high volume servers. It's pretty popular. I also created a REST API for it 
                                for displaying all sorts of data. Please 
                                <a href="https://github.com/naeruru/starboard-stats#examples" target="_blank">check out my examples</a> of it!`,
            links: [
              {
                title: 'Github',
                url: `https://github.com/naeruru/starboard`,
                icon: `mdi-code-braces`,
              }
            ]
          },
        ] as Item[]
      },
    ],
    projects: [
      {
        type: `title`,
        title: `VR, 3D models, Vtubing`
      },
      {
        title: `Face Tracking Rigging`,
        id: `facetracking`,
        type: `project`,
        subtitle: `Full face tracking rigging with custom animators for face tracking on 3D models with VR/ARKit`, 
        description: `I make face tracking rigs for 3D models that works with and without VR. I do both public releases and commissions! You can check my Ko-fi or Booth to see public releases.`,
        image: `https://user-images.githubusercontent.com/9059594/276826037-666900a9-d176-4c39-a5dd-6a320a46cd8c.gif`,
        lazy_image: cbt_lazy,
        links: [
          {
            url: `https://ko-fi.com/naeruru`,
            icon: `mdi-web`
          }
        ],
      },
      {
        type: `title`,
        title: `Github`
      },
      {
        title: `mimiuchi`,
        id: `mimiuchi`,
        type: `project`,
        subtitle: ` a free speech-to-text and translation app that works in your browser`, 
        description: `A speech-to-text tool that can display text in a customizable window for applications like OBS. Also supports relaying text 
                            and commands to other applications like VRChat. Has a lot of random features like local translations. Check it out!`,
        image: `https://user-images.githubusercontent.com/9059594/276826037-666900a9-d176-4c39-a5dd-6a320a46cd8c.gif`,
        lazy_image: cbt_lazy,
        links: [
          {
            url: `https://mimiuchi.com/`,
            icon: `mdi-web`
          },
          {
            url: `https://github.com/naeruru/mimiuchi`,
            icon: `mdi-code-braces`
          }
        ],
      },
      {
        title: `Starboard`,
        id: `starboard`,
        subtitle: `a fullstack discord system that pins messages that reach a reaction threshold`,
        type: `project`,
        image: starboard,
        lazy_image: starboard_lazy,
        description: `A Discord bot for highlighting messages that reach a react threshold. <i>Eh? That's it?</i><br> . . . (ĭ﹏ĭ ;) kinda! Its standout features are that
                            it is super simple to set up (it requires no databases), and is designed for high volume servers. It's pretty popular. I also created a REST API for it 
                            for displaying all sorts of data. Please 
                            <a href="https://github.com/naeruru/starboard-stats#examples" target="_blank">check out my examples</a> of it!`,
        links: [
          {
            url: `https://github.com/naeruru/starboard`,
            icon: `mdi-code-braces`
          }
        ]
      },
      {
        type: `extra`,
        title: `. . .and much much more on my <a href="https://github.com/naeruru" target="_blank">github</a> like parallel algorithm visualizations!`
      },
      {
        type: `title`,
        title: `Things I want to open source`
      },
      {
        title: `Functional VR watch`,
        description: `A watch that has a couple practical features! It shows the battery percentage of controllers/trackers, and even shows the song you are playing on spotify. 
                            I wrote some features into the custom display shader like showing normalized integer values derived from [0,1] float values. Super useful for percentages.
                            Due to the screen space of a VR watch, a lot of design work went into figuring out how to display it all (like variable scrolling text). I will release it for free when I finish~`,
        image: vr_watch,
        lazy_image: ``,
      },
      {
        type: `title`,
        title: `Things I no longer maintain`
      },
      {
        title: `WebRTC Streaming service`,
        description: `once upon a time there was a cool streaming website named after rabbits. Then one day . . . it vanished. I made a followup to it with a little help so that I could watch stuff with my friends
                            by streaming browser tabs via WebRTC protocol. It included a <a href="https://github.com/watchpls-me/chrome-extension" target="_blank">chrome extension</a> 
                            and <a href="https://github.com/watchpls-me/website" target="_blank">website</a>. Eventually Discord caught up, so I abandoned work on it . . . but I learned a lot of fun stuff about
                            WebRTC protocols and functional websocket powered chat channels.`,
        image: watchpls,
        lazy_image: watchpls_lazy,
      },
      {
        title: `YouTube Stream Clipping Extension`,
        description: `At one point, YouTube didn't have the ability to do stream clips. their "low latency" broadcast mode also didn't let users rewind a broadcast. So . . . I made a super simple 
                            clipping extension. All you had to do was click a button while watching the stream and it would download a video of the last <i>x</i> seconds. The repository is private, but you
                            can <a href="https://github.com/naeruru/clip-pls" target="_blank">click this</a> to pretend you saw it (^・ω・^)`,
        image: ``,
        lazy_image: ``,
      },
    ],
  })
}
</script>


