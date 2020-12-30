import _Vue from 'vue';
import SnackBar from './SnackBar.vue';
import events from "./events";


const SnackBarPlugin = {
  install(Vue: typeof _Vue) {
    // if (this.installed) return;
    // this.installed = true;

    Vue.component('snackbar', SnackBar);
    Vue.prototype.$snackBar = (params) => {

      let payload = JSON.parse(JSON.stringify(params));
      if (typeof payload === 'string') {
        payload = { message: params };
      }
      if (typeof payload === 'object') {
        events.$emit('show', payload);
      }
    };

    Vue.prototype.$snackBar.info = (msg: string) => events.$emit('info', msg);
    Vue.prototype.$snackBar.error = (msg: string) => events.$emit('error', msg);

  },
};
export default SnackBarPlugin;