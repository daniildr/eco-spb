<template>
  <div id="app">
    <Preloader/>
    <router-view></router-view>
    <TheFooter/>
  </div>
</template>

<script>
import TheFooter from "@/components/TheFooter";
import Preloader from "@/components/Preloader";

export default {
  name: 'App',
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        document.title = to.meta.title || 'Эко-СПБ - Вывоз мусора в СПБ И ЛО';
        document.meta
      }
    },
  },
  components: {
    Preloader,
    TheFooter
  }
}
</script>

<style>

</style>
