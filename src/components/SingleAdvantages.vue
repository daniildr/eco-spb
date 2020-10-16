<template>
    <section>
        <div class=" inner_about_desc single_adv">
            <div class="col-md-12 center-text">
                <img :src="imgSrc" alt="Logo">
            </div>
            <div class="col-md-12 center-text">
                <h3>{{ titleTxt }}</h3>
                <p v-if="descrip != null">{{ descrip }}</p>
            </div>
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