import vSelect from 'vue-select';

export default defineNuxtPlugin((nuxtApp) => {
  // Templating & Styling
  // vSelect.props.components.default = () => ({
  //   Deselect: {
  //     render: () => h('span', '❌')
  //   },
  //   OpenIndicator: {
  //     render: () => h('span', '🔽')
  //   }
  // });

  nuxtApp.vueApp.component('v-select', vSelect);
});
