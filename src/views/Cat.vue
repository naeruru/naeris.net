<template>
  <v-card flat color="transparent">
    <v-card-text class="text-subtitle-1 py-2 my-4">
      <p>Here is cat ^. ̫ .^)</p>
    </v-card-text>
    <v-img class="mx-auto" :width="500" src="@/assets/cat.jpg">
      <template v-slot:placeholder>
        <div class="d-flex align-center justify-center fill-height">
          <v-progress-circular color="grey-lighten-4" indeterminate></v-progress-circular>
        </div>
      </template>
    </v-img>
  </v-card>
</template>

<script lang="ts" setup>

</script>


