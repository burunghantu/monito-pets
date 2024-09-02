export const useSelectStore = defineStore('select', {
  state: () => ({
    status: null,
    code: null
  }),
  actions: {
    updateStatus(payload) {
      this.status = payload.status;
      this.code = payload.code;
    }
  }
});
