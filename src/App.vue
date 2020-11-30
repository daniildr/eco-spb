<template>
  <div id="app">
    <Preloader/>
    <router-view></router-view>
    <TheFooter/>
    <Feedback/>
  </div>
</template>

<script>
import TheFooter from "@/components/TheFooter";
import Preloader from "@/components/Preloader";
import Feedback from "@/components/modals/Feedback";

export default {
  name: 'App',
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        document.title = to.meta.title || 'Эко-СПБ - Вывоз мусора в СПБ И ЛО';
      }
    },
  },
  components: {
    Feedback,
    Preloader,
    TheFooter
  }
}
</script>

<style>

</style>
