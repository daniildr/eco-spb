<template>
    <section class="inner_about_area" style="margin-bottom: 30px;">
        <div class="section_overlay">
            <div class="container">
                <div class="col-md-12">
                    <div class="inner_about_title">
                        <h2>Контакты</h2>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="col-md-12" >
                    <div class="col-md-4">
                        <div class="inner_about_title">
                            <p style="margin-top: 10px; margin-bottom: 10px;">
                                <a style="font-size: 19px; font-weight: 500" v-bind:href="'callto:' + config.SpbFirstNumber">
                                    <i class="fa fa-phone-square" style="font-size: 110%; margin-right: 12px;"></i><strong>{{ config.SpbFirstNumber }}</strong>
                                </a>
                            </p>
                            <p v-if="config.SpbFirstNumber !== config.SpbSecondNumber" style="margin-top: 10px; margin-bottom: 10px;">
                                <a style="font-size: 19px; font-weight: 500" v-bind:href="'callto:' + config.SpbSecondNumber">
                                    <i class="fa fa-phone-square" style="font-size: 110%; margin-right: 12px;"></i><strong>{{ config.SpbSecondNumber }}</strong>
                                </a>
                            </p>
                            <p v-else style="margin-top: 10px; margin-bottom: 10px;">
                                <br/>
                            </p>
                            <p style="margin-top: 10px; margin-bottom: 10px;">
                                <a style="font-size: 19px; font-weight: 500" v-bind:href="'mailto:' + config.contactEmail">
                                    <i class="fa fa-envelope" style="font-size: 110%; margin-right: 12px;"></i><strong>{{ config.contactEmail }}</strong>
                                </a>
                            </p>
                            <hr/>
                            <h4>Наш Адрес:</h4>
                            <p>{{config.CompanyName}}</p>
                            <p>{{config.CityAndIndex}}</p>
                            <p>{{config.Address}}</p>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div id="yaMap">

                        </div>
                    </div>
                </div>

            </div>




        </div>
    </section>
</template>

<script>
    import json from "@/assets/contacts.json";

    export default {
        name: "ContactUs",
        components: {
        },
        props: {
            phoneNumber: String,
            clientName: String,
        },
        methods: {
            show() {
                this.$store.commit('setPhoneNumber', this.phoneNumber);
                this.$store.commit('setClientName', this.clientName);
                this.$store.commit('cleanForLastForm');
                this.$modal.show("feedbackModal");
            }
        },
        mounted() {
            let script = document.createElement('script')
            script.setAttribute('type', 'text/javascript')
            script.setAttribute('charset', 'utf-8')
            script.setAttribute('src', 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Abea1bb5bb529c77749f7ba29ba06dd076d22963b638dcc1449f39f29590faadb&amp;width=100%25&amp;height=365&amp;lang=ru_RU&amp;scroll=true')
            document.getElementById('yaMap').appendChild(script)
        },
        data() {
            return {
                config: json,
            }
        }
    }
</script>

<style scoped>
    hr {
        margin-top: 30px;
        margin-bottom: 30px;
    }

    section {
        padding-bottom: 20px;
    }
    .smallText{
        font-size: 0.7em;
    }
</style>