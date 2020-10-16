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
                        <img class="contactFormLogo" src="../../images/logos/color-mini.png">
                    </div>
                    <div class="col-md-8 contactFormLogo">
                        <form action="contact.php" method="post">
                            <br/>
                            <div class="form-group">
                                <VuePhoneNumberInput
                                        v-model="phoneNumber"
                                        name="phone"
                                        :default-country-code="RU"
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

    export default {
        name: "CustomContactUs",
        components: {
            VuePhoneNumberInput,
            VueInputUi
        },
        props: {
            phoneNumber: String,
            clientName: String,
            userComment: String
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