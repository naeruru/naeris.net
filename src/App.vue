<template>
  <v-app id="inspire">
    <router-view name="Header"></router-view>
    <v-main>
      <v-container class="d-flex align-center justify-center">
        <v-row class="d-flex align-center justify-center">
          <v-col
            cols="12"
            sm="8"
            md="8"
            xl="4"
          >
            <router-view></router-view>
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
</style>