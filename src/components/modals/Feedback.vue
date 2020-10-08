<template>
    <section>
        <modal name="feedbackModal"
               :width="800"
               height="auto"
               :adaptive="true"
               :draggable="false"
        >
            <div class="col-md-12 right-text">
                <p style="margin-top: 10px; margin-right: 15px;"><a v-on:click="hide()"><i class="fa fa-close"></i> Закрыть окно</a></p>
                <hr style="margin-top: 0px; margin-bottom: 0px;"/>
            </div>
            <div class="col-md-12 center-text inner_about_title">
                <h2>Оставить заявку</h2>
                <div class="col-md-10 col-md-offset-1">
                    <p>Пожалуйста оставьте свой номер телефона, мы вам обязательно перезвоним перезвоним!</p>
                </div>
                <div class="col-md-12">

                    <form>
                        <br/>
                        <div class="col-md-4">
                            <div class="form-group">
                                <input type="tel" class="form-control" placeholder="Ваш номер телефона" id="phoneNumber">
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Ваше имя" id="userName">
                            </div>
                        </div>
                        <div class="col-md-8">
                            <div class="form-group">
                                <textarea style="resize: none; height: auto;" class="form-control" id="exampleFormControlTextarea1" placeholder="Ваше сообщение" rows="4"></textarea>
                            </div>
                        </div>
                    </form>

                </div>
                <hr/>
                <div class="col-md-12">
                    <p class="smallText center-text">*Нажимая на кнопку, Вы даете согласие на обработку персональных данных и соглашаетесь c политикой конфиденциальности.</p>
                    <button class="btn btn-default submit-btn form_submit" v-on:click="hide()">Отправить</button>
                    <br/>
                    <button class="btn btn-default submit-btn form_submit" v-on:click="hide()">Закрыть окно</button>
                </div>
            </div>
        </modal>
    </section>
</template>

<script>

    export default {
        name: "Feedback",
        props: {
            userMessage: String,
        },
        methods: {
            hide() {
                this.$modal.hide('feedbackModal');
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