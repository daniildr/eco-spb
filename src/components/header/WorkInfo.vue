<template>
    <section>
        <table class="hidden-xs hidden-sm">
            <tr>
                <td style="position: relative; left: 115px;"><a v-bind:href="'callto:' + config.SpbFirstNumber"><img src="../../images/header-phone.png" alt="Logo" >&nbsp;{{ config.SpbFirstNumber }}</a></td>
            </tr>
            <br>
            <tr>
                <td><img src="../../images/work-time.png" alt="Рабочие часы"></td>
                <td>
                    <GreenButton
                            custom-text="Оставить заявку"
                            custom-style="width: 100%;padding-left: 35px;padding-right: 35px;"
                    />
                </td>
            </tr>
        </table>

        <div class="hidden-md hidden-lg pull-center">
            <div class="col-sm-12 top-mar">
                <a v-bind:href="'callto:' + config.SpbFirstNumber"><img src="../../images/header-phone.png" alt="Logo">&nbsp;{{ config.SpbFirstNumber }}</a>
            </div>
            <div class="col-sm-12 mid-mar">
                <img src="../../images/work-time.png" alt="Рабочие часы">
            </div>
            <div class="col-sm-12 bot-mar">
                <!-- <GreenButton
                        custom-text="Оставить заявку"
                        custom-style="width: 100%;"
                /> -->
            </div>
        </div>
    </section>

</template>

<script>
    import GreenButton from "@/components/Buttons/GreenButton";
    import json from '@/assets/price.json'

    export default {
        name: "WorkInfo",
        components: {
            GreenButton
        },
        data() {
            return {
                needLoader: false,
                config : json
            }
        }
    }
</script>

<style scoped>
    .pull-center{
        position: inherit;
        right: 10px;
    }
    .top-mar{
        margin-top: 15px;
    }
    .mid-mar{
        margin-top: 15px;
        margin-bottom: 15px;
    }
    .bot-mar{
        margin-bottom: 15px;
    }
    a {
        color: #FFFFFF;
        font-size: 200%;
        font-family: "Roboto", sans-serif;
        font-weight: 700;
        transition: 0.5s;
    }
    a:hover {
        color: #84c225;
        text-decoration: none;
    }
</style>