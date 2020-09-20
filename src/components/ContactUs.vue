<template>
    <section class="inner_about_area page" id="CONTACT">
        <CallBackForm/>
        <div class="section_overlay">
            <div class="container">
                <div class="col-md-10 col-md-offset-1 bounceIn">
                    <!-- Start Contact Section Title-->
                    <div class="inner_about_title">
                        <h2>СВЯЖИТЕСЬ С НАМИ</h2>
                        <div class="col-md-8 col-md-offset-2 bounceIn">
                            <p>
                                Спасибо за Ваш интерес! Пожалуйста, заполните форму ниже, чтобы отправить нам вопрос или комментарий. <br>
                                <strong>Мы ответим вам в ближайшее время.</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="contact_form bounceIn">
                <div class="container">
                    <!-- START ERROR AND SUCCESS MESSAGE -->
                    <div class="form_error text-center">
                        <div class="name_error hide error">Please Enter your name</div>
                        <div class="email_error hide error">Please Enter your Email</div>
                        <div class="email_val_error hide error">Please Enter a Valid Email Address</div>
                        <div class="message_error hide error">Please Enter Your Message</div>
                    </div>
                    <div class="Sucess"></div>
                    <!-- END ERROR AND SUCCESS MESSAGE -->

                    <!-- CONTACT FORM starts here, Go to contact.php and add your email ID, thats it.-->
                    <form role="form" action="contact.php">
                        <div class="row">
                            <div class="col-md-4">
                                <input type="text" class="form-control" id="name" placeholder="Ваше Имя">
                                <input type="email" class="form-control" id="email" placeholder="E-mail">
                                <input type="text" class="form-control" id="subject" placeholder="Тема сообщения">
                            </div>
                            <div class="col-md-8">
                                <textarea class="form-control" id="message" rows="25" cols="10" placeholder="Текст сообщения"></textarea>
                                <BlueButton/>
                            </div>
                        </div>
                    </form>
                    <!-- END FORM -->
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import BlueButton from "@/components/Buttons/BlueButton";
    import CallBackForm from "@/components/CallBackForm";

    export default {
        name: "ContactUs",
        components: {
            BlueButton,
            CallBackForm
        }
    }
</script>

<style scoped>
section {
    padding-bottom: 20px;
}
</style>