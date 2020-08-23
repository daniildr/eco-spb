<template>
    <section class="copyright">
        <div class="container">
            <social/>
            <br/>
            <div class="row">
                <div class="col-md-10">
                    <call-back/>
                </div>
            </div>
            <br/>
            <copyright/>
        </div>
    </section>
</template>

<script>
    import Copyright from "@/components/footer/Copyright";
    import Social from "@/components/footer/Social";
    import CallBack from "@/components/CallBack";

    export default {
        name: "TheFooter",
        components: {
            CallBack,
            Social,
            Copyright
        }
    }
</script>

<style scoped>

</style>