<template>
    <div class="inner_about_title">
        <div class="container">
            <div class="row col-md-12">
                <div class="col-md-9 left-text left-blok">
                    <p class="linka">Сделать заказ можно по телефону: <a v-bind:href="'callto:' + config.SpbFirstNumber">{{ config.SpbFirstNumber }}</a></p>
                    <p class="linka" style="font-size: 18px; font-weight: normal; margin-top: 0px;">Наши менеджеры рассчитают график и стоимость, ответят на все возникшие вопросы.</p>
                </div>
                <div class="col-md-3">
                    <br/>
                    <GreenButton/>
                </div>
            </div>
        </div>
        <hr/>
    </div>
</template>

<script>
    import json from "@/assets/price.json";
    import GreenButton from "@/components/Buttons/GreenButton";

    export default {
        name: "CallBackForm",
        components: {
            GreenButton
        },
        props: {
            SelectedItem: String
        },
        data() {
            return {
                config : json
            }
        }
    }
</script>

<style scoped>
    .linka {
        font-size: 24px;
        font-family: "Roboto";
        color: rgb(46, 106, 152);
        font-weight: bold;
        line-height: 0.917;
        text-align: left;
    }

</style>