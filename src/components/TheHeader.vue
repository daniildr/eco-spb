<template>
    <section class="copyright">
        <div class="container">
            <div class="col-md-12">
                <div class="col-md-6 left-text">
                    <a href="#"><img src="../images/header-logo.png" alt="Logo"></a>
                </div>
                <div class="col-md-6 right-text">
                    <WorkInfo/>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import WorkInfo from "@/components/header/WorkInfo";

    export default {
        name: "TheHeader",
        components: {WorkInfo}
    }
</script>

<style scoped>

</style>