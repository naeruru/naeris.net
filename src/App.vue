<template>
  <v-app id="inspire">
    <router-view name="Header"></router-view>
    <v-main>
      <v-container>
        <v-row id="content" class="d-flex align-center justify-center">
          <v-col cols="12" sm="8" md="8" xl="4">

            <router-view v-slot="{ Component }">
              <v-slide-y-transition leave-absolute>
                <component :is="Component" />
              </v-slide-y-transition>
            </router-view>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">

export default {
  data: () => ({
    //
  })
}

</script>

<style>
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