<template>
    <section class="inner_about_area page" id="CARPARK">
        <CarParkTitle/>
        <CarParkLeftItem/>
        <hr/>
    </section>
</template>

<script>
    import CarParkTitle from "@/components/carPark/CarParkTitle";
    import CarParkLeftItem from "@/components/carPark/CarParkLeftItem";

    export default {
        name: "CarPark",
        components: {
            CarParkLeftItem,
            CarParkTitle
        }
    }
</script>

<style scoped>

</style>