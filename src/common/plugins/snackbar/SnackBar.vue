<template>
  <v-snackbar :color="snackbar.color" v-model="snackbar.show">
      {{ snackbar.message }}
  </v-snackbar>
</template>

<script lang="ts">
  import Vue from 'vue';
  import events from './events';
  export default Vue.extend({
    name: 'Snackbar',
    data() {
      return {
        snackbar: {
          show: false as boolean,
          message: '' as string,
          color: '' as string,
        },
      };
    },
    mounted() {
      events.$on('show', (payload) => {
        this.snackbar.message = payload.message;
        this.snackbar.color = payload.color;
        this.snackbar.show = true;
      });
      events.$on('info', (message) => {
        this.snackbar.message = message;
        this.snackbar.color = 'success';
        this.snackbar.show = true;
      })
      events.$on('error', (message) => {
        this.snackbar.message = message;
        this.snackbar.color = 'error';
        this.snackbar.show = true;
      })
    }
  })
</script>