<template>
    <div>
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

    export default {
        name: "Home",
        components: {
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