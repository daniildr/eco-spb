<template>
    <section>
        <div class="col-md-12 inner_about_desc single_adv">
            <!-- SINGLE DESC -->
            <!-- ICON -->
            <div class="col-md-3 center-text">
                <img :src="imgSrc" alt="Logo">
            </div>
            <!-- HEADING DESCRIPTION -->
            <div class="col-md-9">
                <h3>{{ titleTxt }}</h3>
                <p>{{ descrip }}</p>
            </div>
            <!-- END SINGLE DESC -->
        </div>
    </section>
</template>

<script>
    export default {
        name: "SingleAdvantages",
        props:{
            imgSrc: String,
            titleTxt: String,
            descrip: String
        }
    }
</script>

<style scoped>

    .single_adv{
        margin-top: 15px;
        margin-bottom: 15px;
    }
</style>