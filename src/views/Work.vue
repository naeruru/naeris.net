<template>
  <v-card
    min-height="70vh"
    flat
    color="transparent"
  >
    <v-card-text>
      <p>I have done a lot of various programming related things in my personal time! Please check out a few of it below~</p>
    </v-card-text>
    <div v-for="project, i in projects" >
      <v-card-title v-if="project.type === 'title'" class="text-h4 my-4 text-secondary">{{  project.title }}</v-card-title>
      <v-card-text v-else-if="project.type === 'extra'" class="mb-12"><p v-html="project.title"></p></v-card-text>
      <v-card-text v-else class="text-subtitle-1 my-4">
        <v-divider class="mb-6"></v-divider>
        <v-row>
          <v-col v-if="project.image" :cols="12" :md="12" :lg="5">
            <v-img
              :src="project.image"
            ></v-img>
          </v-col>
          <v-col :cols="12" :md="12" :lg="(project.image) ? 7 : 12">
            <v-card color="transparent" flat>
              <v-card-title class="text-h5">{{ project.title }}</v-card-title>
              <v-card-text v-html="project.description" class="text-subtitle-1">
              </v-card-text>
              <v-card-actions class="justify-end">
                <v-btn v-for="link in project.links" :icon="link.icon" class="mx-1" color="primary" @click="open_url(link.url)" flat></v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>


      </v-card-text>
    </div>
  </v-card>
</template>

<script lang="ts">
  export default {
  data: () => ({
        projects: [
            {
              type: `title`,
              title: `Open source work`
            },
            {
              title: `Chatbox Tools`,
              description: `A speech-to-text tool that can display text onto a customizable window to display on applications like OBS. It also supports relaying text 
                            and commands to other applications like VRChat.`,
              image: `https://user-images.githubusercontent.com/9059594/226288753-1232f6e4-08db-4dd7-a28f-f5506b9f7668.gif`,
              links: [
                {
                  url: `https://captions.naeris.net/`,
                  icon: `mdi-web`
                },
                {
                  url: `https://github.com/naexris/chatbox-tools`,
                  icon: `mdi-code-braces`
                }
              ],
            },
            {
              title: `Starboard`,
              image: `https://user-images.githubusercontent.com/9059594/190692147-599a69cf-62ac-446b-aa9c-ceb6e07d4721.png`,
              description: `A Discord bot for highlighting messages that reach a react threshold. <i>Eh? That's it?</i> . . . (ĭ﹏ĭ ;) kinda! Its standout features are that
                            it is super simple to set up (it requires no databases), and is designed for high volume servers. Its pretty popular. I also created a REST API for it 
                            for displaying all sorts of data. Please 
                            <a href="https://github.com/naexris/starboard-stats#examples" target="_blank">check out my examples<a> of it!`,
              links: [
                {
                  url: `https://github.com/naexris/starboard`,
                  icon: `mdi-code-braces`
                }
              ]
            },
            {
              type: `extra`,
              title: `. . .and much much more on my <a href="https://github.com/naexris" target="_blank">github</a> like parallel algorithm visualizations!`
            },
            {
              type: `title`,
              title: `Things I want to open source`
            },
            {
              title: `Functional VR watch`,
              description: `A watch that has a couple practical features! It shows the battery percentage of controllers/trackers, and even shows the song your playing on spotify. 
                            I wrote some features into the custom display shader like showing normalizated integer values derived from [0,1] float values. Super useful for percentages.
                            Due to the screen space of a VR watch, a lot of design work went into figuring out how to display it all. I will release it for free when I finish~`,
              image: ``,
            },
            {
              type: `title`,
              title: `Things I no longer maintain`
            },
            {
              title: `WebRTC Streaming service`,
              description: `once upon a time there was a cool streaming website named after rabbits. Then one day. . . it vanished. I made a followup to it with a little help so that I could watch stuff with my friends
                            by streaming browser tabs via WebRTC protocol. It included a <a href="https://github.com/watchpls-me/chrome-extension" target="_blank">chrome extension</a> 
                            and <a href="https://github.com/watchpls-me/website" target="_blank">website</a>. Eventually Discord caught up, so I abandoned work on it . . . but I learned a lot of fun stuff about
                            WebRTC protocols and functional websocket powered chat channels.`,
              image: ``,
            },
            {
              title: `YouTube Stream Clipping Extension`,
              description: `At one point, YouTube didn't have the ability to do stream clips. their "low latency" broadcast mode also didn't let users rewind a broadcast. So . . . I made a super simple 
                            clipping extension. All you had to do was click a button while watching the stream and it would download a video of the last <i>x</i> seconds. The repository is private, but you
                            can <a href="https://github.com/naexris/clip-pls" target="_blank">click this</a> to pretend you saw it (^・ω・^)`,
              image: ``,
            },
        ],
    }),
    methods: {
        open_url(url: string) {
            window.open(url, '_blank')
        }
    },
  }
</script>


