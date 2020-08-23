<template>
    <div>
        <About/>
        <Advantages/>
        <hr/>
    </div>
</template>

<script>
    import About from "@/components/About";
    import Advantages from "@/components/Advantages";
    export default {
        name: "Home",
        components: {Advantages, About}
    }
</script>

<style scoped>

</style>