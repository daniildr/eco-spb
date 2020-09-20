<template>
    <div>
        <About/>
        <CarPark/>
        <Price/>
        <ContactUs/>
    </div>
</template>

<script>
    import About from "@/components/About";
    import CarPark from "@/components/CarPark";
    import ContactUs from "@/components/ContactUs";
    import Price from "@/components/PriceTable";

    export default {
        name: "Home",
        components: {
            Price,

            ContactUs,
            CarPark,
            About
        }
    }
</script>

<style scoped>

</style>