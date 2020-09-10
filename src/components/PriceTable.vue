<template>
    <section class="page" id="PRICE">
        <section class="inner_about_area">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-md-offset-1">
                        <div class="col-md-10 inner_about_title">
                            <h2>Цены на вывоз мусора:</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="inner_about_area">
            <div class="table-responsive container">
                <table class="table">
                    <thead>
                    <tr>
                        <td></td>
                        <td><h4>Газель (до 1.5 тонн)</h4></td>
                        <td><h4>Контейнер 8 м<sup>3</sup></h4></td>
                        <td><h4>Контейнер 20 м<sup>3</sup></h4></td>
                        <td><h4>Контейнер 27 м<sup>3</sup></h4></td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><p>Санкт-Петербург<br>(В пределах КАД)</p></td>
                        <td>
                            <p>
                                От {{ needLoader ? parseInt(config.Car.price1) + parseInt(config.LoaderPrice.price1) : config.Car.price1 }} рублей
                            </p>
                        </td>
                        <td>
                            <p >
                                От {{ needLoader ? parseInt(config.Car.price2) + parseInt(config.LoaderPrice.price2) : config.Car.price2 }} рублей
                            </p>
                        </td>
                        <td>
                            <p >
                                От {{ needLoader ? parseInt(config.Car.price3) + parseInt(config.LoaderPrice.price3) : config.Car.price3 }} рублей
                            </p>
                        </td>
                        <td>
                            <p >
                                От {{ needLoader ? parseInt(config.Car.price4) + parseInt(config.LoaderPrice.price4) : config.Car.price4 }} рублей
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td><p>Санкт-Петербург<br>(В пределах 30км от КАД)</p></td>
                        <td>
                            <p >
                                От {{ needLoader ? parseInt(config.Box1.price1) + parseInt(config.LoaderPrice.price1) : config.Box1.price1 }} рублей
                            </p>
                        </td>
                        <td>
                            <p >
                                От {{ needLoader ? parseInt(config.Box1.price2) + parseInt(config.LoaderPrice.price2) : config.Box1.price2 }} рублей
                            </p>
                        </td>
                        <td>
                            <p >
                                От {{ needLoader ? parseInt(config.Box1.price3) + parseInt(config.LoaderPrice.price3) : config.Box1.price3 }} рублей
                            </p>
                        </td>
                        <td>
                            <p >
                                От {{ needLoader ? parseInt(config.Box1.price4) + parseInt(config.LoaderPrice.price4) : config.Box1.price4 }} рублей
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td><p>Ленинградская Область<br>(В пределах 60км от КАД)</p></td>
                        <td>
                            <p >
                                От {{ needLoader ? parseInt(config.Box2.price1) + parseInt(config.LoaderPrice.price1) : config.Box2.price1 }} рублей
                            </p>
                        </td>
                        <td>
                            <p >
                                От {{ needLoader ? parseInt(config.Box2.price2) + parseInt(config.LoaderPrice.price2) : config.Box2.price2 }} рублей
                            </p>
                        </td>
                        <td>
                            <p >
                                От {{ needLoader ? parseInt(config.Box2.price3) + parseInt(config.LoaderPrice.price3) : config.Box2.price3 }} рублей
                            </p>
                        </td>
                        <td>
                            <p >
                                От {{ needLoader ? parseInt(config.Box2.price4) + parseInt(config.LoaderPrice.price4) : config.Box2.price4 }} рублей
                            </p>
                        </td></tr>
                    <tr>
                        <td><p>Ленинградская Область<br>(В пределах 90км от КАД)</p></td>
                        <td>
                            <p >
                                От {{ needLoader ? parseInt(config.Box3.price1) + parseInt(config.LoaderPrice.price1) : config.Box3.price1 }} рублей
                            </p>
                        </td>
                        <td>
                            <p >
                                От {{ needLoader ? parseInt(config.Box3.price2) + parseInt(config.LoaderPrice.price2) : config.Box3.price2 }} рублей
                            </p>
                        </td>
                        <td>
                            <p >
                                От {{ needLoader ? parseInt(config.Box3.price3) + parseInt(config.LoaderPrice.price3) : config.Box3.price3 }} рублей
                            </p>
                        </td>
                        <td>
                            <p >
                                От {{ needLoader ? parseInt(config.Box3.price4) + parseInt(config.LoaderPrice.price4) : config.Box3.price4 }} рублей
                            </p>
                        </td></tr>
                    </tbody>
                </table>
            </div>
        </section>
        <section>
            <div class="container">
                <input id="need-loader" class="custom-radio2 hidden" type="checkbox" v-bind:value="true" v-on:input="needLoader == true ? needLoader = false : needLoader = true">
                <label for="need-loader"> Ручная погрузка контейнера (2 чел.) от 2500 руб.</label>
            </div>
        </section>
        <PriceBg/>
    </section>
</template>

<script>
    import json from '@/assets/price.json'
    import PriceBg from "@/components/priceBg";

    export default {
        name: "Price",
        components: {PriceBg},
        data() {
            return {
                needLoader: false,
                config : json
            }
        }
    }
</script>

<style scoped>
    .table{
        color: #135693;
        vertical-align: middle;
    }
    .table > tbody > tr > td, .table > thead > tr > td{
        vertical-align: middle;
        height: 57px;
    }
    .custom-radio2 + label::before {
        content: "";
        background: #fff;
        width: 22px;
        height: 22px;
        margin-right: 7px;
        margin-bottom: -5px;
        display: inline-block;
        padding: 1px 2px 2px 2px;
        line-height: 19px;
        color: #135693;
        font-size: 100%;
        border-radius: 2px;
        border: 1px solid #ccc;
    }
    .custom-radio2:checked + label::before {
        content: "\2714";
    }
    label {
        color: #135693;
        font-size: 20px;
    }
    thead {
        color: #FFFFFF;
        /*background-image: url("../images/bg_color_price.png");*/
    }
    tbody {

    }
    p {
        vertical-align: center;
        font-size: 20px;
        line-height: 1em;
    }
    tr:nth-child(2n) {
        color: #FFFFFF;
        /* background-image: url("../images/bg_color_price.png"); */
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
    }

    @media (max-width: 1199px){
        tr:nth-child(2n){
            background-image: url("../images/bg_color_price.png");
        }
        thead{
            background-image: url("../images/bg_color_price.png");
        }
    }
</style>