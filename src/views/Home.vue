<template>
    <div>
        <TheHeader/>
        <About/>
        <CarPark/>
        <Price/>
    </div>
</template>

<script>
    import About from "@/components/About";
    import CarPark from "@/components/CarPark";
    import Price from "@/components/PriceTable";
    import TheHeader from "@/components/TheHeader";

    export default {
        name: "Home",
        components: {
            TheHeader,
            Price,
            CarPark,
            About
        }
    }
</script>

<style scoped>

</style>