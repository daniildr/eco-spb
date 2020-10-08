<template>
  <div id="app">
    <TheHeader/>
    <router-view></router-view>
    <Feedback/>
    <TheFooter/>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";
import TheFooter from "@/components/TheFooter";
import Feedback from "@/components/modals/Feedback";

export default {
  name: 'App',
  components: {
    Feedback,
    TheFooter,
    TheHeader
  }
}
</script>

<style>

</style>
