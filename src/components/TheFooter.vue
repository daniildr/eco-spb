<template>
    <section class="copyright">
        <div class="container">
            <social/>
            <br/>
            <br/>
            <copyright/>
        </div>
    </section>
</template>

<script>
    import Copyright from "@/components/footer/Copyright";
    import Social from "@/components/footer/Social";

    export default {
        name: "TheFooter",
        components: {
            Social,
            Copyright
        }
    }
</script>

<style scoped>
    @media (max-width: 1199px){
        .mobile-st{
            text-align: center;
        }
    }
</style>