<template>
  <div id="app">
    <TheHeader/>
    <router-view></router-view>
    <TheFooter/>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";
import TheFooter from "@/components/TheFooter";

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
    TheFooter,
    TheHeader
  }
}
</script>

<style>

</style>
