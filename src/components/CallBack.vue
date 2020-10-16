<template>
    <div class="container">
        <div class="row  lightSpeedIn">
            <div class="col-md-6 col-md-offset-3">
                <!-- SUBSCRIPTION SUCCESSFUL OR ERROR MESSAGES -->
                <div class="subscription-success"></div>
                <div class="subscription-error"></div>
                <!-- Check this topic on how to add email subscription list, http://kb.mailchimp.com/lists/signup-forms/host-your-own-signup-forms -->
                <form id="mc-form" action="" method="POST" class="subscribe_form">
                    <input type="hidden" name="u" value="6908378c60c82103f3d7e8f1c">
                    <input type="hidden" name="id" value="8c5074025d">
                    <div class="form-group">
                        <!-- EMAIL INPUT BOX -->
                        <input style="color: #FFFFFF" name="MERGE0"
                               class="required email form-control" id="mce-EMAIL"
                               placeholder="У Вас остались вопросы? Укажите Ваш номер телефона и мы перезвоним Вам." value="">
                    </div>
                    <!-- SUBSCRIBE BUTTON -->
                    <button type="submit" class="btn btn-default subs-btn">Заказать Звонок</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CallBack"
    }
</script>

<style scoped>

</style>