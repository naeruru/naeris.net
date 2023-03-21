<template>
  <v-card
    min-height="70vh"
    flat
    color="transparent"
  >
    <v-card-title class="text-h4 my-4">Open source work</v-card-title>
    <v-card-text v-for="project, i in projects" class="text-subtitle-1 my-4">
      <v-divider class="mb-4"></v-divider>
      <v-row>
        <v-col :cols="3">
          {{ project.image }}
        </v-col>
        <v-col :cols="9">
          <v-card color="transparent" flat>
            <v-card-title class="text-h5">{{ project.title }}</v-card-title>
            <v-divider></v-divider>
            <v-card-text v-html="project.description" class="text-subtitle-1">
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn v-for="link in project.links" :icon="link.icon" class="mx-1" color="secondary" @click="open_url(link.url)" flat></v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>


    </v-card-text>
  </v-card>
</template>

<script lang="ts">
  export default {
  data: () => ({
        page: 0,
        projects: [
            {
              title: `Chatbox Tools`,
              description: `Chatbox tools is a captioning tool that can display spoken or typed text onto a customizable window so 
                            that you can effortlessly display the results in applications like OBS. It also supports relaying text 
                            and commands to other applications (like VRChat).`,
              image: `image`,
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
              image: `image`,
              description: `Starboard is a discord bot for pinning messages to a channel that reach a certain react threshold. Its standout features are that
                            it is dead simple to set up (it requires zero databases), and is designed for high volume servers. I also created a backend system 
                            for displaying all sorts of interesting data that can be stored to a database if you choose to. Please 
                            <a href="https://github.com/naexris/starboard-stats#examples" target="_blank">check out my examples<a> of that!`
            }
        ],
    }),
    methods: {
        open_url(url: string) {
            window.open(url, '_blank')
        }
    },
  }
</script>


