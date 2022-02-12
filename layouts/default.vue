<template>
  <QLayout view="hHh Lpr fFf">
    <QHeader>
      <QToolbar>
        <QBtn
          flat
          dense
          round
          aria-label="Menu"
          icon="menu"
          @click="toggleDrawer"
        />
        <QToolbarTitle> hello </QToolbarTitle>
      </QToolbar>
    </QHeader>

    <QDrawer
      v-model="drawer"
      show-if-above
      bordered
      :mini="mini"
      :width="200"
      :breakpoint="500"
    >
      <NavBar />
    </QDrawer>

    <QPageContainer>
      <QPage>
        <slot />
      </QPage>
    </QPageContainer>

    <QFooter></QFooter>
  </QLayout>
</template>

<script lang="ts" setup>
import { useQuasar } from 'quasar';

const q = useQuasar();

const drawer = ref<boolean>(false);
const mini = ref<boolean>(true);

const toggleDrawer = () => {
  if (q.screen.width < 500) {
    drawer.value = !drawer.value;
  } else {
    mini.value = !mini.value;
  }
};
</script>
