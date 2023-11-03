<template>
  <v-app id="inspire">
    <router-view name="Header"></router-view>
    <v-main>
      <v-row id="content" class="ma-0 d-flex align-center justify-center settings">
        <v-col cols="12" sm="8" md="8" lg="6" xl="4">
          <router-view v-slot="{ Component }">
            <v-slide-y-transition leave-absolute>
              <component :is="Component" />
            </v-slide-y-transition>
          </router-view>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script lang="ts">

export default {
  data: () => ({
    outer_size: '45px'
  })
}

</script>

<style>
.settings {
    overflow-y: auto;
    max-height: calc(100svh - v-bind(outer_size));
}
p {
  font-size: 20px;
  line-height: 1.6;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background-color: transparent;
  /* rgb(var(--v-theme-primary)); */
}

::-webkit-scrollbar-thumb {
  background: #4e4e4e;
  /* #a9a4e5 */
  border-radius: 10px;
}
</style>