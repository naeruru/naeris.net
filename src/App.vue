<template>
  <v-app id="inspire">
    <router-view name="Header"></router-view>
    <v-main>
      <v-container>
        <v-row>
          <v-col
            cols="12"
            sm="2"
            lg="3"
          >
            <!-- <v-sheet
              class="bg-grey-lighten-3"
              rounded="lg"
              min-height="268"
            ></v-sheet> -->
          </v-col>

          <v-col
            cols="12"
            sm="8"
            lg="7"
          >
            <router-view></router-view>
          </v-col>

          <v-col
            cols="12"
            sm="2"
            lg="3"
          >
            <!-- <v-sheet
              class="bg-grey-lighten-3"
              rounded="lg"
              min-height="268"
            ></v-sheet> -->
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