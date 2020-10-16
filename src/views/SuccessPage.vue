<template>
    <section id="HOME">
        <section class="copyright">
            <div class="container">
                <CustomHeaderInfo/>
            </div>
        </section>
        <section class="inner_about_area page">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <Success/>
                    </div>
                </div>
            </div>
        </section>
        <hr/>
        <CustomContactUs/>
    </section>
</template>

<script>
    import Success from "@/components/success/Success";
    import CustomContactUs from "@/components/success/CustomContactUs";
    import CustomHeaderInfo from "@/components/success/CustomHeaderInfo";

    export default {
        name: "SuccessPage",
        components: {CustomHeaderInfo, CustomContactUs, Success}
    }
</script>

<style scoped>

</style>