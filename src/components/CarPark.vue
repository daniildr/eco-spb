<template>
    <section class="inner_about_area page" id="CARPARK">
        <CarParkTitle/>
        <Gazel/>
        <CarParkBg/>
        <Docker8/>
        <CarParkBg/>
        <Docker20/>
        <CarParkBg/>
        <Docker27/>
        <car-park-bg bottom-position="bottom: 98px;"/>
        <hr/>
    </section>
</template>

<script>
    import CarParkTitle from "@/components/carPark/CarParkTitle";
    import CarParkBg from "@/components/carPark/CarParkBg";
    import Gazel from "@/components/carPark/Gazel";
    import Docker8 from "@/components/carPark/Docker8";
    import Docker20 from "@/components/carPark/Docker20";
    import Docker27 from "@/components/carPark/Docker27";

    export default {
        name: "CarPark",
        components: {
            Docker27,
            Docker20,
            Docker8,
            Gazel,
            CarParkBg,
            CarParkTitle
        }
    }
</script>

<style scoped>

</style>