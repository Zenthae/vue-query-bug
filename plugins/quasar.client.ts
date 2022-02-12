import {
  QBtn,
  QDrawer,
  QFooter,
  QHeader,
  QIcon,
  QItem,
  QItemLabel,
  QItemSection,
  QLayout,
  QList,
  QPage,
  QPageContainer,
  QScrollArea,
  QToolbar,
  QToolbarTitle,
  Quasar,
  QuasarPluginOptions,
  Ripple,
} from 'quasar';

export default defineNuxtPlugin((nuxtApp) => {
  const quasarOptions = {
    components: {
      QBtn,
      QFooter,
      QHeader,
      QLayout,
      QPage,
      QPageContainer,
      QToolbar,
      QToolbarTitle,
      QList,
      QItem,
      QItemSection,
      QItemLabel,
      QDrawer,
      QScrollArea,
      QIcon,
    },
    directives: {
      Ripple,
    },
  } as QuasarPluginOptions;

  nuxtApp.vueApp.use(Quasar, quasarOptions);
});
