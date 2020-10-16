<template>
    <section class="inner_about_area" style="margin-bottom: 30px;">
        <div class="section_overlay">
            <div class="container">
                <div class="col-md-12">
                    <div class="inner_about_title">
                        <h2>Свяжитесь с нами</h2>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="col-md-12 col-md-offset-0">
                    <div class="col-md-4 center-block center-text">
                        <br/>
                        <a style="font-size: 19px; font-weight: 500" v-bind:href="'callto:' + config.RuNumber">
                            <i class="fa fa-phone"></i><strong>&nbsp;{{ config.RuNumber }}</strong>
                        </a>
                        <br/>
                        <a style="font-size: 19px; font-weight: 500" v-bind:href="'mailto:' + config.RuNumber">
                            <i class="fa fa-at"></i><strong>&nbsp;info@eco.spb.ru</strong>
                        </a>
                        <hr/>
                        <p>ООО "Эко СПБ"</p>
                        <p>198066, Санкт-Петербург</p>
                        <p>ул. Ленина 1, офис.296 БЦ "БЦ-Name"</p>
                        <p>ОГРН 1234567890</p>
                        <p>ИНН 123456789</p>
                        <p></p>
                    </div>
                    <div class="col-md-8" style="height: auto;">
                        <div class="inner_about_title" style="margin-bottom: 0px; padding-bottom: 0px;">
                            <p style="font-weight: 500; margin-top: 10px;">
                                Спасибо за Ваш интерес!<br>
                                Пожалуйста, заполните форму ниже.<br>
                                <strong>Мы ответим Вам в ближайшее время.</strong>
                            </p>
                        </div>
                        <form>
                            <br/>
                            <div class="form-group">
                                <VuePhoneNumberInput
                                        v-model="phoneNumber"
                                        :id="phoneNumber"
                                        :default-country-code="'RU'"
                                        :only-countries="['RU','AZ','AM','BY','GE','KZ','KG','LV','LT','UA']"
                                        :translations="{countrySelectorLabel: 'Код страны',phoneNumberLabel: 'Ваш номер телефона',example: 'Пример:'}"
                                        :valid-color="'#62bc00'"
                                        :color="'#094071'"
                                        :countries-height="20"
                                        :clearable="true"
                                />
                            </div>
                            <div class="form-group">
                                <VueInputUi v-model="clientName"
                                            name="name"
                                            :color="'#094071'"
                                            :clearable="true"
                                            label="Ваше имя"
                                />
                            </div>
                        </form>
                        <div class="center-block center-text">
                            <p class="smallText center-text">*Нажимая на кнопку, Вы даете согласие на обработку персональных данных и соглашаетесь c политикой конфиденциальности.</p>
                            <button class="btn btn-default submit-btn form_submit" style="width: 60%" v-on:click="show()">Заказать звонок</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import VuePhoneNumberInput from 'vue-phone-number-input';
    import 'vue-phone-number-input/dist/vue-phone-number-input.css';
    import VueInputUi from 'vue-input-ui';
    import 'vue-input-ui/dist/vue-input-ui.css';
    import json from "@/assets/price.json";

    export default {
        name: "ContactUs",
        components: {
            VuePhoneNumberInput,
            VueInputUi
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