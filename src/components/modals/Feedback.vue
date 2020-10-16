<template>
    <section style="z-index: 9999;">
        <modal name="feedbackModal"
               :width="modalWidth"
               height="auto"
               :resizable="true"
               :adaptive="true"
               :draggable="false"
               :scrollable="true"
               @before-open = "beforeOpen"
        >
            <div class="col-md-12 right-text hidden-sm hidden-xs">
                <p style="margin-top: 20px; margin-right: 15px;"><a v-on:click="hide()"><i class="fa fa-close"></i> Закрыть окно</a></p>
                <hr style="margin-top: 0px; margin-bottom: 0px;"/>
            </div>
            <div class="col-md-12 center-text inner_about_title">
                <h2 style="color: #094071;">Оставить заявку</h2>
                <div class="col-md-10 col-md-offset-1" style="color: #094071;">
                    <p>Пожалуйста оставьте свой номер телефона, мы вам обязательно перезвоним перезвоним!</p>
                </div>
                    <form action="contact.php" method="post">
                        <br/>
                        <div class="col-md-12 ">
                            <div class="col-md-12">
                                <div class="col-md-12">
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
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <VueInputUi v-model="clientName"
                                                    name="name"
                                                    :color="'#094071'"
                                                    :required="true"
                                                    :clearable="true"
                                                    label="Ваше имя"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <textarea style="resize: none; height: auto;"
                                                  name="message"
                                                  v-model="userComment"
                                                  class="form-control"
                                                  id="exampleFormControlTextarea1"
                                                  placeholder="Ваш Комментарий"
                                                  rows="6"/>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <p class="smallText center-text">*Нажимая на кнопку, Вы даете согласие на обработку персональных данных и соглашаетесь c политикой конфиденциальности.</p>
                                <button type="submit" class="btn btn-default submit-btn form_submit">Отправить</button>
                                <button type="button" v-on:click="hide()" class="btn btn-default submit-btn form_submit">Закрыть окно</button>
                            </div>
                        </div>
                    </form>
                </div>

        </modal>
    </section>
</template>

<script>
    import json from "@/assets/price.json";
    import VuePhoneNumberInput from 'vue-phone-number-input';
    import 'vue-phone-number-input/dist/vue-phone-number-input.css';
    import VueInputUi from 'vue-input-ui';
    import 'vue-input-ui/dist/vue-input-ui.css';

    export default {
        name: "Feedback",
        components: {
            VuePhoneNumberInput,
            VueInputUi
        },
        props: {
            modalWidth: {
                type: Number,
                default: 600
            }
        },
        methods: {
            createMessage() {
                if (this.$store.state.calculator.phoneNumber !== "")
                    this.phoneNumber = this.$store.state.calculator.phoneNumber;

                if (this.$store.state.calculator.clientName !== "")
                    this.clientName = this.$store.state.calculator.clientName;

                let separator =  "\r\n";
                let result = "";

                if (this.$store.state.calculator.userMessage !== "")
                    result = result + "Ваш комментарий: " + this.$store.state.calculator.userMessage + ";" + separator;

                if (this.$store.state.calculator.garbageType !== "")
                    result = result + "Тип мусора: " + this.$store.state.calculator.garbageType + ";" + separator;

                if (this.$store.state.calculator.region !== "")
                    result = result + "Район: " + this.$store.state.calculator.region + ";" + separator;

                if (this.$store.state.calculator.totalPrice !== 0) {
                    result = result + "Стоимость: " + this.$store.state.calculator.totalPrice + " руб." + ";" + separator;

                    if (this.$store.state.calculator.carType !== "")
                        result = result + "Тип техники: " + this.$store.state.calculator.carType + ";" + separator;

                    if (this.$store.state.calculator.numberOfItems !== 0 )
                        if (this.$store.state.calculator.flagOfChangeNumberOfItems)
                            result = result + "Кол-во техники: " + this.$store.state.calculator.numberOfItems + " шт." + ";" + separator;
                }

                this.userComment = result;
            },
            beforeOpen () {
                this.createMessage();
            },
            hide() {
                this.$modal.hide("feedbackModal");
            }
        },
        data() {
            return {
                config: json,
                phoneNumber: "",
                clientName: "",
                userComment: "",
                clientName1: "",
            }
        }
    }
</script>

<style scoped>
    .form-control{
        height: 38px;
    }
    .contact_form{
        margin: 20px;
    }
    a:hover{
        color: #1d890a;
        text-decoration: none;
    }
    p{
        margin-top: 15px;
    }
    button{
        margin-bottom: 15px;
    }
    .smallText{
        font-size: 0.7em;
    }
</style>