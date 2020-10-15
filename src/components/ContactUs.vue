<template>
    <section class="inner_about_area page" style="margin-bottom: 30px;" id="CONTACT">
        <div class="section_overlay">
            <div class="container">
                <div class="col-md-10 col-md-offset-1">
                    <div class="inner_about_title">
                        <h2>Свяжитесь с нами</h2>
                        <div class="col-md-8 col-md-offset-2" >
                            <p style="font-weight: 500; margin-top: 10px;">
                                Спасибо за Ваш интерес!<br>
                                Пожалуйста, заполните форму ниже.<br>
                                <strong>Мы ответим вам в ближайшее время.</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="col-md-12 col-md-offset-0">
                    <div class="col-md-4 center-block center-text">
                        <img class="contactFormLogo" src="../images/logos/color-mini.png">
                    </div>
                    <div class="col-md-8 contactFormLogo">
                        <form>
                            <br/>
                            <div class="form-group">
                                <VuePhoneNumberInput
                                        v-model="phoneNumber"
                                        :id="phoneNumber"
                                        :default-country-code="RU"
                                        :only-countries="['RU','AZ','AM','BY','GE','KZ','KG','LV','LT','UA']"
                                        :translations="{countrySelectorLabel: 'Код страны',phoneNumberLabel: 'Ваш номер телефона',example: 'Пример:'}"
                                        :valid-color="'#62bc00'"
                                        :color="'#094071'"
                                        :countries-height="20"
                                        :clearable="true"
                                />
                            </div>
                            <div class="form-group">
                                <input v-model="clientName" type="text" class="form-control" placeholder="Ваше имя" id="userName">
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

    export default {
        name: "ContactUs",
        components: {
            VuePhoneNumberInput
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
        }
    }
</script>

<style scoped>
    section {
        padding-bottom: 20px;
    }
    .form-control{
        height: 40px;
        font-weight: 400;
    }
    .smallText{
        font-size: 0.7em;
    }
    .contactFormLogo{
        margin: 10px;
        width: auto;
        height: 192px;
    }
    .contactFormDiv{
        margin: 10px;
    }
</style>