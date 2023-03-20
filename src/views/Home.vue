<template>
  <v-card
    min-height="70vh"
    flat
    color="transparent"
  >
    <v-card-title class="text-h3 my-4">naeris dayo!</v-card-title>
    <v-card-text class="text-subtitle-1 py-2">
      <p class="mb-2">Hihi, I'm <a class="text-secondary">naeris</a>!</p>
      <p class="mb-2">
        I'm a software engineer who specializes in front-end developement (I make applications and frameworks to power them).
        I also do research in high performance computing and refractive errors in vision.
      </p>
      <p class="mb-2">
        If you're interested in some public projects I've worked on, check out
        <a @click="$router.push({name :'work'})" class="text-primary pointer">my work</a>
        page. Conversely, you can check out my
        <a @click="$router.push({name :'cat'})" class="text-primary pointer">my cat</a>
        too.
      </p>
      <v-divider class="mx-10 my-6"></v-divider>
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
  export default {
    data: () => ({
        page: 0,
        list_info: [
            {
                text: `I speak Japanese and English. Please talk to me in either!`,
            },
            {
                text: `I'm really into VR. I've been trying to learn Blender and shader dev (and make practical devices in VRChat!).`,
            },
            {
                text: `I love to draw! I hope to bring my OC to life in VR one day.`,
            }
        ],
    })
  }
</script>

<style>
.pointer {cursor: pointer;}
</style>
