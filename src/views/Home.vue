<template>
    <div>
        <About/>
        <Advantages/>
        <CarPark/>
        <Price/>
        <CallBackForm/>
        <ContactUs/>
    </div>
</template>

<script>
    import About from "@/components/About";
    import Advantages from "@/components/Advantages";
    import CarPark from "@/components/CarPark";
    import ContactUs from "@/components/ContactUs";
    import CallBackForm from "@/components/CallBackForm";
    import Price from "@/components/PriceTable";

    export default {
        name: "Home",
        components: {
            Price,
            CallBackForm,
            ContactUs,
            CarPark,
            Advantages,
            About
        }
    }
</script>

<style scoped>

</style>