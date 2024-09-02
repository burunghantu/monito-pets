import { SnackbarService } from "vue3-snackbar";
import "vue3-snackbar/styles";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('VueSnackbar', SnackbarService)
})
