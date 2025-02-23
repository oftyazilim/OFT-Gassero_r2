import { defineStore } from 'pinia';

export const usePageTitleStore = defineStore('pageTitle', {
  state: () => ({
    title: '',
    toplam: '',
    ek1: '',
    ek2: '',
    ek3: '',
  }),
  actions: {
    setTitle(newTitle) {
      this.title = newTitle;
    },
    setToplam(deger) {
      this.toplam = deger;
    },
    setEk1(deger) {
      this.ek1 = deger;
    },
    setEk2(deger) {
      this.ek2 = deger;
    },
    setEk3(deger) {
      this.ek3 = deger;
    },

  }
});
