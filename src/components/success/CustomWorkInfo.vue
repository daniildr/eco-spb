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
                    <button @click="goToEvents()"
                       style="width: auto; font-size: 18px; padding-left: 35px; padding-right: 35px;"
                       class="btn btn-default green-btn">На главную</button>
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
        </div>
    </section>

</template>

<script>
    import json from '@/assets/contacts.json'

    export default {
        name: "CustomWorkInfo",
        components: {

        },
        methods: {
            goToEvents (){
                location.href='/'
            }
        },
        data() {
            return {
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