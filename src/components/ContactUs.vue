<template>
    <section class="inner_about_area page" style="margin-bottom: 30px;" id="CONTACT">
        <CallBackForm :selected-item="this.SelectedType"/>
        <div class="section_overlay">
            <div class="container">
                <div class="col-md-10 col-md-offset-1">
                    <div class="inner_about_title">
                        <h2>Свяжитесь с нами</h2>
                        <div class="col-md-8 col-md-offset-2">
                            <p>
                                Спасибо за Ваш интерес! Пожалуйста, заполните форму ниже, чтобы отправить нам вопрос или комментарий. <br>
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
                                <input type="tel" class="form-control" placeholder="Ваш номер телефона" id="phoneNumber">
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Ваше имя" id="userName">
                            </div>
                        </form>
                        <div class="center-block center-text">
                            <p class="smallText center-text">*Нажимая на кнопку, Вы даете согласие на обработку персональных данных и соглашаетесь c политикой конфиденциальности.</p>
                            <button class="btn btn-default submit-btn form_submit" style="width: 60%" v-on:click="createMessage()">Заказать звонок</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import CallBackForm from "@/components/CallBackForm";

    export default {
        name: "ContactUs",
        components: {
            CallBackForm
        },
        props: {
            SelectedType: String
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
    .contactFormDiv{
        margin: 10px;
    }
</style>