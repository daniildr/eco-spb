<template>
    <section class="inner_about_area page" style="margin-bottom: 30px;" id="CONTACT">
        <div class="section_overlay">
            <div class="container">
                <div class="col-md-10 col-md-offset-1">
                    <div class="inner_about_title">
                        <h2>Свяжитесь с нами</h2>
                        <div class="col-md-8 col-md-offset-2" >
                            <p style="font-weight: 500; margin-top: 10px;">
                                Если у Вас остались вопросы, заполните форму ниже.<br>
                                <strong>Мы перезвоним Вам в ближайшее время.</strong>
                            </p>
                        </div>
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
                        <form action="contact.php" method="post">
                            <br/>
                            <div class="form-group">
                                <VuePhoneNumberInput
                                        v-model="phoneNumber"
                                        name="phone"
                                        :default-country-code="'RU'"
                                        :only-countries="['RU','AZ','AM','BY','GE','KZ','KG','LV','LT','UA']"
                                        :translations="{countrySelectorLabel: 'Код страны',phoneNumberLabel: 'Ваш номер телефона',example: 'Пример:'}"
                                        :required="true"
                                        :valid-color="'#62bc00'"
                                        :error-color="'#8B0000'"
                                        :color="'#094071'"
                                        :countries-height="20"
                                        :clearable="true"
                                />
                            </div>
                            <div class="form-group">
                                <VueInputUi v-model="clientName"
                                            name="name"
                                            :color="'#094071'"
                                            :required="true"
                                            :clearable="true"
                                            label="Ваше имя"
                                />
                            </div>
                            <div class="form-group">
                                <textarea style="display: none;"
                                          name="message"
                                          v-model="userComment"
                                          rows="6">Срочно перезвоните мне!</textarea>
                            </div>
                            <div class="center-block center-text">
                                <p class="smallText center-text">*Нажимая на кнопку, Вы даете согласие на обработку персональных данных и соглашаетесь c политикой конфиденциальности.</p>
                                <button type="submit" class="btn btn-default submit-btn form_submit" style="width: 60%" >Заказать звонок</button>
                            </div>
                        </form>
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
        name: "CustomContactUs",
        components: {
            VuePhoneNumberInput,
            VueInputUi
        },
        props: {
            phoneNumber: String,
            clientName: String,
            userComment: {
                type: String,
                default: "Срочно перезвоните мне!"
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
    section {
        padding-bottom: 20px;
    }
    .smallText{
        font-size: 0.7em;
    }
    .contactFormLogo{
        margin: 10px;
        width: auto;
        height: 192px;
    }
</style>