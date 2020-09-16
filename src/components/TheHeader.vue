<template>
    <section>
        <section class="copyright">
            <MainMenu/>
            <div class="container" id="HOME">
                <div class="col-md-12"  style="margin-bottom: 20px;">
                    <div class="col-md-pull-6 pull-left">
                        <a href="#"><img src="../images/header-logo.png" alt="Logo"></a>
                    </div>
                    <div class="col-md-pull-6 pull-right" >
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
                        <div class="section_title">
                            <customP>Вывоз мусора в Санкт-Петербурге и Ленинградской области...</customP>
                        </div>

                        <div class="col-md-6" style="margin-top: 14px;">
                            <img src="../images/loLabel.png">
                        </div>
                        <div class="col-md-6" style="margin-bottom: 15px;">
                            <select class="Shape_2">
                                <option value="Select">Выберите место:</option>
                                <option value="Тосно">Тосно</option>
                                <option value="Любань">Любань</option>
                                <option value="Лодейное Поле">Лодейное Поле</option>
                                <option value="Гатчина">Гатчина</option>
                                <option value="Луга">Луга</option>
                            </select>
                        </div>
                        <img src="../images/spbLabele.png">




                        <hr/>
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
        <section class="inner_about_area page">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="col-md-6"></div>
                        <div class="col-md-6 inner_about_title">
                            <h2>Тип мусора:</h2>
                            <select class="Shape_3">
                                <option value="Select">Выберите тип:</option>
                                <option value="Тосно">Тосно</option>
                                <option value="Любань">Любань</option>
                                <option value="Лодейное Поле">Лодейное Поле</option>
                                <option value="Гатчина">Гатчина</option>
                                <option value="Луга">Луга</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="about page">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="col-md-6"></div>
                        <div class="col-md-6">
                            <div class="section_title">
                                <h2>Способ вывоза:</h2>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="col-md-3 center-text">
                            <img src="../images/Layer39.png">
                            <br/>
                            <div class="gazel_1_5_t">
                                <label><h4>Газель (до 1.5 тонн)</h4></label>
                            </div>
                        </div>
                        <div class="col-md-3 center-text">
                            <img src="../images/Layer38.png" style="height: 58px">
                            <br/>
                            <div class="gazel_1_5_t">
                                <label><h4>Контейнер 8 м<sup>3</sup></h4></label>
                            </div>
                        </div>
                        <div class="col-md-3 center-text">
                            <img src="../images/Layer37.png" style="height: 58px">
                            <br/>
                            <div class="gazel_1_5_t">
                                <label><h4>Контейнер 20 м<sup>3</sup></h4></label>
                            </div>
                        </div>
                        <div class="col-md-3 center-text">
                            <img src="../images/Layer36.png">
                            <br/>
                            <div class="gazel_1_5_t">
                                <label><h4>Контейнер 27 м<sup>3</sup></h4></label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="inner_about_area page">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="col-md-6 inner_about_title">
                            <input id="need-loader" class="custom-radio2 hidden" type="checkbox" v-bind:value="true" v-on:input="needLoader == true ? needLoader = false : needLoader = true">
                            <label for="need-loader"> Ручная погрузка контейнера (2 чел.) от 2500 руб.</label>
                        </div>
                        <div class="col-md-6 inner_about_title">
                            <h2>Тип мусора:</h2>
                            <input >
                        </div>
                    </div>
                    <div class="col-md-12">

                    </div>
                </div>
            </div>
        </section>

    </section>
</template>



<script>
    import WorkInfo from "@/components/header/WorkInfo";
    import MainMenu from "@/components/header/MainMenu";

    export default {
        name: "TheHeader",
        components: {MainMenu, WorkInfo},
        data() {
            return {
                garbageType: '',
            }
        }
    }
</script>

<style scoped>
    img{
        vertical-align: middle;
    }
    .copyright{
        background-image: url("../images/head-bg.png");
    }
    .gazel_1_5_t {
        margin-top: 20px;
        font-size: 18px;
        font-family: "Roboto";
        color: rgb(255, 255, 255);
        line-height: 0.917;
        text-align: center;
        z-index: 128;
    }

    .rantruck_recycling_copy {
        width: 803px;
        height: 485px;
        z-index: 109;
    }
    .section_title{
        background: none;
        padding-top: 25px;
        padding-bottom: 25px;
    }
    .section_title > customP {
        margin-top: 20px;
        margin-bottom: 20px;
        width: 100%;
        font-size: 23px;
        font-family: "Bebas Neue Cyrillic";
        color: rgb(255, 255, 255);
        line-height: 0.511;
        text-align: left;
        text-shadow: 0px 3px 2.64px rgba(1, 1, 1, 0.75);
        -moz-transform: matrix( 0.6169261354827,0,0,0.6169261354827,0,0);
        -webkit-transform: matrix( 0.6169261354827,0,0,0.6169261354827,0,0);
        -ms-transform: matrix( 0.6169261354827,0,0,0.6169261354827,0,0);
    }

    .Shape_2 {
        margin: 5px 5px 5px 5px;
        border-style: solid;
        border-width: 3px;
        border-color: rgb(6, 35, 62);
        border-radius: 4px;
        background-color: rgb(8, 41, 72);
        box-shadow: 0px 1px 0px 0px rgba(255, 255, 255, 0.08);
        width: 100%;
        height: 40px;

            font-size: 14px;
            font-family: "Roboto";
            color: rgb(255, 255, 255);
            line-height: 1.571;
            text-align: left;

    }

    .Shape_3 {
        border-style: solid;
        border-width: 1px;
        border-color: rgb(6, 35, 62);
        border-radius: 5px;
        background-color: rgb(232, 233, 234);
        box-shadow: 0px 1px 0px 0px rgba(255, 255, 255, 0.08);
        width: 384px;
        height: 44px;
        z-index: 120;
    }




</style>