<template>
    <div>
        <TheHeader/>
        <About/>
        <CarPark/>
        <Price/>
        <Feedback/>
    </div>
</template>

<script>
    import About from "@/components/About";
    import CarPark from "@/components/CarPark";
    import Price from "@/components/PriceTable";
    import Feedback from "@/components/modals/Feedback";
    import TheHeader from "@/components/TheHeader";

    export default {
        name: "Home",
        components: {
            TheHeader,
            Feedback,
            Price,
            CarPark,
            About
        }
    }
</script>

<style scoped>

</style>