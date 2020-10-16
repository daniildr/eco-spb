<template>
    <div>
        <TheHeader/>
        <About/>
        <CarPark/>
        <Price/>
        <ContactUs/>
        <Feedback/>
    </div>
</template>

<script>
    import About from "@/components/About";
    import CarPark from "@/components/CarPark";
    import ContactUs from "@/components/ContactUs";
    import Price from "@/components/PriceTable";
    import Feedback from "@/components/modals/Feedback";
    import TheHeader from "@/components/TheHeader";

    export default {
        name: "Home",
        components: {
            TheHeader,
            Feedback,
            Price,

            ContactUs,
            CarPark,
            About
        }
    }
</script>

<style scoped>

</style>