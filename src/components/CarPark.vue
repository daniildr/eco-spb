<template>
    <section class="inner_about_area page" id="CARPARK">
        <CarParkTitle/>
        <CarParkLeftItem/>
        <CarParkLeftItemBg/>
        <CarParkLeftItem/>
        <CarParkLeftItemBg/>
        <hr/>
    </section>
</template>

<script>
    import CarParkTitle from "@/components/carPark/CarParkTitle";
    import CarParkLeftItem from "@/components/carPark/CarParkLeftItem";
    import CarParkLeftItemBg from "@/components/carPark/CarParkLeftItemBg";

    export default {
        name: "CarPark",
        components: {CarParkLeftItemBg, CarParkLeftItem, CarParkTitle}
    }
</script>

<style scoped>

</style>