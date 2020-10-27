<template>
    <div class="row">
        <div class="col-md-12">
            <div class="col-md-2 left-text mobile-st"></div>
            <div class="col-md-8 center-text center-block mobile-st">
                <div class="section_title" style="background: none;">
                    <div class="col-md-12" style="margin-bottom: 35px;">
                        <h2>Свяжитесь с нами</h2>
                    </div>
                    <div class="col-md-12 center-block center-blok center-text">
                        <div class="col-md-10 col-lg-offset-1">
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
            <div class="col-md-2 right-text mobile-st"></div>
        </div>
    </div>
</template>

<script>
    import VuePhoneNumberInput from 'vue-phone-number-input';
    import 'vue-phone-number-input/dist/vue-phone-number-input.css';
    import VueInputUi from 'vue-input-ui';
    import 'vue-input-ui/dist/vue-input-ui.css';
    import json from "@/assets/price.json";

    export default {
        name: "FooterContactUs",
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
    a {
        color: #FFFFFF;
        font-size: 150%;
        font-family: "Roboto", sans-serif;
    }
    a:hover {
        color: #84c225;
    ;
    }
    @media (max-width: 1199px){
        .mobile-st{
            text-align: center;
            margin-bottom: 15px;
            margin-top: 15px;
        }
    }
    .smallText{
        font-size: 0.7em;
    }
</style>