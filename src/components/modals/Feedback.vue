<template>
    <section>
        <p>{{localvar}}</p>
        <modal name="my-first-modal"
               :width="800"
               :height="600"
               :adaptive="true"
               :clickToClose="false"
               :draggable="false"
               :property="[ userMessage, userMessage ]"
               :content="userMessage"
               :userMessage = "userMessage"
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

                    <p>| {{ $route.meta.metaTags[0].content }} |</p>
                    <p>| {{ $attrs.userMessage }} |</p>
                    <p>{{localvar}}</p> <!-- походу решение -->


                </div>
                <hr/>
                <div class="col-md-12">
                    <p class="smallText center-text">*Нажимая на кнопку, Вы даете согласие на обработку персональных данных и соглашаетесь c политикой конфиденциальности.</p>
                    <button class="btn btn-default submit-btn form_submit" v-on:click="hide()">Отправить</button>
                    <br/>
                    <button class="btn btn-default submit-btn form_submit" v-on:click="hide()">Закрыть окно</button>
                </div>
            </div>
            <!-- <div class="contact_form col-md-12">
            <div class="container">
                <div class="form_error text-center">
                    <div class="name_error hide error">Please Enter your name</div>
                    <div class="email_error hide error">Please Enter your Email</div>
                    <div class="email_val_error hide error">Please Enter a Valid Email Address</div>
                    <div class="message_error hide error">Please Enter Your Message</div>
                </div>
                <div class="Success"></div>

                <form role="form" action="contact.php">
                    <div class="col-md-10">
                        <div class="col-md-4">
                            <input type="text" class="form-control" id="name" placeholder="Ваше Имя">
                            <input type="email" class="form-control" id="email" placeholder="E-mail">
                            <input type="text" class="form-control" id="subject" placeholder="Тема сообщения">
                        </div>
                        <div class="col-md-6">
                            <textarea class="form-control" id="message" rows="25" cols="10" placeholder="Текст сообщения"></textarea>
                            <green-button/>
                        </div>
                    </div>
                </form>
            </div>
            </div>-->
        </modal>
    </section>
</template>

<script>
    import $ from 'jquery';
    import {globalStore} from '../../main.js'

    export default {
        name: "Feedback",
        data() {
            return{
                localvar: globalStore.globalvar
            }
            },
        props: {
            userMessage: String,
        },
        methods: {
            hide() {
                this.$modal.hide('my-first-modal');
            }
        },
        mounted: function() {
            $('#qwe').text("<b>Some</b> new text." );
        }
    }
</script>

<style scoped>
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