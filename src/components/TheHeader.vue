<template>
    <section class="copyright">
        <MainMenu/>
        <div class="container" id="HOME">
            <div class="col-md-12"  style="margin-bottom: 20px;">
                <div class="col-md-6 left-text">
                    <a href="#"><img src="../images/header-logo.png" alt="Logo"></a>
                </div>
                <div class="col-md-6 right-text">
                    <WorkInfo/>
                </div>
            </div>

            <div class="col-md-12">
                <div class="col-md-6 left-text">
                    <ul id="menu" class="top-menu">
                        <li><a href="#HOME">ГЛАВНАЯ</a></li>
                        <li><a href="#ABOUT">О НАС </a></li>
                        <li><a href="#CARPARK">АВТОПАРК</a></li>
                        <li><a href="#PRICE">ПРАЙС-ЛИСТ</a></li>
                        <li><a href="#CONTACT">КОНТАКТЫ </a></li>
                    </ul>
                    1
                    <br/>
                    2
                    <br/>
                    3
                    <br/>
                    3
                    <br/>
                    4
                    <br/>
                    5
                    <br/>
                    6
                    <br/>
                    7
                    <br/>
                    8
                    <br/>
                    9
                    <br/>
                </div>
                <div class="col-md-6 right-text">
                    <img class="rantruck_recycling_copy" src="../images/rantruck-2.png">
                </div>
            </div>

        </div>
    </section>
</template>

<script>
    import WorkInfo from "@/components/header/WorkInfo";
    import MainMenu from "@/components/header/MainMenu";

    export default {
        name: "TheHeader",
        components: {MainMenu, WorkInfo}
    }
</script>

<style scoped>
    .copyright{
        background-image: url("../images/head-bg.png");
    }
    .rantruck_recycling_copy {
        width: 803px;
        height: 485px;
        z-index: 109;
    }

</style>