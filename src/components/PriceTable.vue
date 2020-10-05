<template>
    <section class="page" id="PRICE">
        <section class="inner_about_area">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-md-offset-1">
                        <div class="col-md-10 inner_about_title">
                            <h2>Цены на вывоз мусора</h2>
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
                        <td><h4>BAW Fenix 8-12 м<sup>3</sup></h4></td>
                        <td><h4>Контейнер 20 м<sup>3</sup></h4></td>
                        <td><h4>Контейнер 27 м<sup>3</sup></h4></td>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td><p>Санкт-Петербург<br>(В пределах КАД)</p></td>
                        <td>
                            <p class="pHover" v-on:click="selectItem('gazel.price1')" id="gazel.price1">
                                от {{ needLoader ? parseInt(config.cars.gazel.price1) + parseInt(config.cars.gazel.loaderPrice) : config.cars.gazel.price1 }} рублей
                            </p>
                        </td>
                        <td>
                            <p class="pHover" v-on:click="selectItem('gazel.price2')" id="gazel.price2">
                                от {{ needLoader ? parseInt(config.cars.gazel.price2) + parseInt(config.cars.gazel.loaderPrice) : config.cars.gazel.price2 }} рублей
                            </p>
                        </td>
                        <td>
                            <p class="pHover" v-on:click="selectItem('gazel.price3')" id="gazel.price3">
                                от {{ needLoader ? parseInt(config.cars.gazel.price3) + parseInt(config.cars.gazel.loaderPrice) : config.cars.gazel.price3 }} рублей
                            </p>
                        </td>
                        <td>
                            <p class="pHover" v-on:click="selectItem('gazel.price4')" id="gazel.price4">
                                от {{ needLoader ? parseInt(config.cars.gazel.price4) + parseInt(config.LoaderPrice.price4) : config.cars.gazel.price4 }} рублей
                            </p>
                        </td>
                    </tr>
                        <tr>
                        <td><p>Санкт-Петербург<br>(В пределах 30км от КАД)</p></td>
                        <td>
                            <p class="pHover" v-on:click="selectItem('baw.price1')" id="baw.price1">
                                от {{ needLoader ? parseInt(config.cars.baw.price1) + parseInt(config.cars.baw.loaderPrice) : config.cars.baw.price1 }} рублей
                            </p>
                        </td>
                        <td>
                            <p class="pHover" v-on:click="selectItem('baw.price2')" id="baw.price2">
                                от {{ needLoader ? parseInt(config.cars.baw.price2) + parseInt(config.cars.baw.loaderPrice) : config.cars.baw.price2 }} рублей
                            </p>
                        </td>
                        <td>
                            <p class="pHover" v-on:click="selectItem('baw.price3')" id="baw.price3">
                                от {{ needLoader ? parseInt(config.cars.baw.price3) + parseInt(config.cars.baw.loaderPrice) : config.cars.baw.price3 }} рублей
                            </p>
                        </td>
                        <td>
                            <p class="pHover" v-on:click="selectItem('baw.price4')" id="baw.price4">
                                от {{ needLoader ? parseInt(config.cars.baw.price4) + parseInt(config.cars.baw.loaderPrice) : config.cars.baw.price4 }} рублей
                            </p>
                        </td>
                    </tr>
                        <tr>
                        <td><p>Ленинградская Область<br>(В пределах 60км от КАД)</p></td>
                        <td>
                            <p class="pHover" v-on:click="selectItem('docker20.price1')" id="docker20.price1">
                                от {{ needLoader ? parseInt(config.cars.docker20.price1) + parseInt(config.cars.docker20.loaderPrice) : config.cars.docker20.price1 }} рублей
                            </p>
                        </td>
                        <td>
                            <p class="pHover" v-on:click="selectItem('docker20.price2')" id="docker20.price2">
                                от {{ needLoader ? parseInt(config.cars.docker20.price2) + parseInt(config.cars.docker20.loaderPrice) : config.cars.docker20.price2 }} рублей
                            </p>
                        </td>
                        <td>
                            <p class="pHover" v-on:click="selectItem('docker20.price3')" id="docker20.price3">
                                от {{ needLoader ? parseInt(config.cars.docker20.price3) + parseInt(config.cars.docker20.loaderPrice) : config.cars.docker20.price3 }} рублей
                            </p>
                        </td>
                        <td>
                            <p class="pHover" v-on:click="selectItem('docker20.price4')" id="docker20.price4">
                                от {{ needLoader ? parseInt(config.cars.docker20.price4) + parseInt(config.cars.docker20.loaderPrice) : config.cars.docker20.price4 }} рублей
                            </p>
                        </td></tr>
                        <tr>
                        <td><p>Ленинградская Область<br>(В пределах 90км от КАД)</p></td>
                        <td>
                            <p class="pHover" v-on:click="selectItem('docker27.price1')" id="docker27.price1">
                                от {{ needLoader ? parseInt(config.cars.docker27.price1) + parseInt(config.cars.docker27.loaderPrice) : config.cars.docker27.price1 }} рублей
                            </p>
                        </td>
                        <td>
                            <p class="pHover" v-on:click="selectItem('docker27.price2')" id="docker27.price2">
                                от {{ needLoader ? parseInt(config.cars.docker27.price2) + parseInt(config.cars.docker27.loaderPrice) : config.cars.docker27.price2 }} рублей
                            </p>
                        </td>
                        <td>
                            <p class="pHover"  v-on:click="selectItem('docker27.price3')" id="docker27.price3">
                                от {{ needLoader ? parseInt(config.cars.docker27.price3) + parseInt(config.cars.docker27.loaderPrice) : config.cars.docker27.price3 }} рублей
                            </p>
                        </td>
                        <td>
                            <p class="pHover" v-on:click="selectItem('docker27.price4')" id="docker27.price4">
                                от {{ needLoader ? parseInt(config.cars.docker27.price4) + parseInt(config.cars.docker27.loaderPrice) : config.cars.docker27.price4 }} рублей
                            </p>
                        </td></tr>
                    </tbody>
                </table>
            </div>
        </section>
        <section>
            <div class="container">
                <input id="need-loader2" class="custom-radio2 hidden" type="checkbox" v-bind:value="true" v-on:input="needLoader == true ? needLoader = false : needLoader = true">
                <label for="need-loader2"> Ручная погрузка контейнера (2 чел.) от 2500 руб.</label>
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
                selectedItem: "",
                config : json
            }
        },
        methods: {
            selectItem (elementId) {
                let element = document.getElementById(elementId);

                if (this.selectedItem === ""){
                    this.selectedItem = elementId;
                    element.classList.replace("pHover", "pHover-select");
                } else {
                    if (this.selectedItem === elementId){
                        this.selectedItem = "";
                        element.classList.replace("pHover-select", "pHover");
                    } else {
                        let element2 = document.getElementById(this.selectedItem);
                        element2.classList.replace("pHover-select", "pHover");

                        this.selectedItem = elementId;
                        element.classList.replace("pHover", "pHover-select");
                    }
                }
            }
        }
    }
</script>

<style scoped>
    .pHover{
        -webkit-transition: all 0.5s;
        -moz-transition: all 0.5s;
        -o-transition: all 0.5s;
        transition: all 0.5s;
    }
    .pHover:hover {
        background-color: #e7e7e7;
        color: #135693;
        padding: 8px 0px;
        border-radius: 8px;
    }
    .pHover-select {
        background-color: #e7e7e7;
        color: #135693;
        padding: 8px 0px;
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
        border-radius: 8px;
        -webkit-transition: all 0.5s;
        -moz-transition: all 0.5s;
        -o-transition: all 0.5s;
        transition: all 0.5s;
    }

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
            background-repeat: round;
        }
    }
</style>