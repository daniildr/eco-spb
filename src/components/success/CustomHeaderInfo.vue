<template>
    <div class="col-md-12" style="margin-bottom: 20px;">
        <div class="col-md-pull-6 pull-left">
            <a href="#"><img src="../../images/header-logo.png" alt="Logo"></a>
        </div>
        <div class="col-md-pull-6 pull-right">
            <CustomWorkInfo/>
        </div>
    </div>
</template>

<script>

    import CustomWorkInfo from "@/components/success/CustomWorkInfo";
    export default {
        name: "CustomHeaderInfo",
        components: {CustomWorkInfo}
    }
</script>

<style scoped>

</style>