import Vue from 'vue';
import { SnackbarPlugin } from "./common/plugins";

declare module 'vue/types/vue' {
  interface Vue {
    $snackBar: SnackbarPlugin;
  }
  interface VueConstructor {
    $snackBar: SnackbarPlugin;
  }
}