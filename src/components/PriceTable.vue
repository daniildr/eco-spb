<template>
    <section>
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
                                <p class="pHover" v-on:click="selectItem('baw.price1')" id="baw.price1">
                                    от {{ needLoader ? parseInt(config.cars.baw.price1) + parseInt(config.cars.baw.loaderPrice) : config.cars.baw.price1 }} рублей
                                </p>
                            </td>
                            <td>
                                <p class="pHover" v-on:click="selectItem('docker20.price1')" id="docker20.price1">
                                    от {{ needLoader ? parseInt(config.cars.docker20.price1) + parseInt(config.cars.docker20.loaderPrice) : config.cars.docker20.price1 }} рублей
                                </p>
                            </td>
                            <td>
                                <p class="pHover" v-on:click="selectItem('docker27.price1')" id="docker27.price1">
                                    от {{ needLoader ? parseInt(config.cars.docker27.price1) + parseInt(config.cars.docker27.loaderPrice) : config.cars.docker27.price1 }} рублей
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td><p>Санкт-Петербург<br>(В пределах 30км от КАД)</p></td>
                            <td>
                                <p class="pHover" v-on:click="selectItem('gazel.price2')" id="gazel.price2">
                                    от {{ needLoader ? parseInt(config.cars.gazel.price2) + parseInt(config.cars.gazel.loaderPrice) : config.cars.gazel.price2 }} рублей
                                </p>
                            </td>
                            <td>
                                <p class="pHover" v-on:click="selectItem('baw.price2')" id="baw.price2">
                                    от {{ needLoader ? parseInt(config.cars.baw.price2) + parseInt(config.cars.baw.loaderPrice) : config.cars.baw.price2 }} рублей
                                </p>
                            </td>
                            <td>
                                <p class="pHover" v-on:click="selectItem('docker20.price2')" id="docker20.price2">
                                    от {{ needLoader ? parseInt(config.cars.docker20.price2) + parseInt(config.cars.docker20.loaderPrice) : config.cars.docker20.price2 }} рублей
                                </p>
                            </td>
                            <td>
                                <p class="pHover" v-on:click="selectItem('docker27.price2')" id="docker27.price2">
                                    от {{ needLoader ? parseInt(config.cars.docker27.price2) + parseInt(config.cars.docker20.loaderPrice) : config.cars.docker20.price2 }} рублей
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td><p>Ленинградская Область<br>(В пределах 60км от КАД)</p></td>
                            <td>
                                <p class="pHover" v-on:click="selectItem('gazel.price3')" id="gazel.price3">
                                    от {{ needLoader ? parseInt(config.cars.gazel.price3) + parseInt(config.cars.gazel.loaderPrice) : config.cars.gazel.price3 }} рублей
                                </p>
                            </td>
                            <td>
                                <p class="pHover" v-on:click="selectItem('baw.price3')" id="baw.price3">
                                    от {{ needLoader ? parseInt(config.cars.baw.price3) + parseInt(config.cars.baw.loaderPrice) : config.cars.baw.price3 }} рублей
                                </p>
                            </td>
                            <td>
                                <p class="pHover" v-on:click="selectItem('docker20.price3')" id="docker20.price3">
                                    от {{ needLoader ? parseInt(config.cars.docker20.price3) + parseInt(config.cars.docker20.loaderPrice) : config.cars.docker20.price3 }} рублей
                                </p>
                            </td>
                            <td>
                                <p class="pHover" v-on:click="selectItem('docker27.price3')" id="docker27.price3">
                                    от {{ needLoader ? parseInt(config.cars.docker27.price3) + parseInt(config.cars.docker27.loaderPrice) : config.cars.docker27.price3 }} рублей
                                </p>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </section>
        <section class="page" id="CONTACT">
            <div class="container">
                <input id="need-loader2" class="custom-radio2 hidden" type="checkbox" v-bind:value="true" v-on:input="needLoader == true ? needLoader = false : needLoader = true">
                <label for="need-loader2"> Ручная погрузка контейнера (2 чел.) от {{config.cars.gazel.loaderPrice}} руб.</label>
            </div>
            <PriceBg/>
            <div class="inner_about_title">
                <div class="container">
                    <div class="row col-md-12">
                        <div class="col-md-9 left-text left-blok">
                            <p class="linka">Сделать заказ можно по телефону: <a v-bind:href="'callto:' + contacts.SpbFirstNumber">{{ contacts.SpbFirstNumber }}</a></p>
                            <p class="linka" style="font-size: 18px; font-weight: normal; margin-top: 0px;">Наши менеджеры рассчитают график и стоимость, ответят на все возникшие вопросы.</p>
                        </div>
                        <div class="col-md-3">
                            <br/>
                            <button
                                    v-on:click="show()"
                                    type="button"
                                    style="width: 260px; height: 50px;"
                                    class="btn btn-default submit-btn"
                            >
                                Оставить заявку
                            </button>
                        </div>
                    </div>
                </div>
                <hr/>
            </div>
            <ContactUs/>
        </section>

    </section>
</template>

<script>
    import json from '@/assets/price.json'
    import contJson from '@/assets/contacts.json'
    import PriceBg from "@/components/priceBg";
    import ContactUs from "@/components/ContactUs";

    export default {
        name: "Price",
        components: {ContactUs, PriceBg},
        data() {
            return {
                needLoader: false,
                selectedItem: "",
                config : json,
                contacts: contJson,
            }
        },
        methods: {
            show(){
                this.changeState();
                this.$modal.show("feedbackModal");
            },
            changeState(){
                switch (this.selectedItem) {
                    case "gazel.price1":{
                        this.$store.commit('setCarType', this.config.cars.gazel.name);
                        this.$store.commit('setNumberOfItems', 1);
                        this.$store.commit('setTotalPrice', this.needLoader
                            ? parseInt(this.config.cars.gazel.price1) + parseInt(this.config.cars.gazel.loaderPrice)
                            : parseInt(this.config.cars.gazel.price1));
                        this.$store.commit('setRegion', "");
                        this.$store.commit('setGarbageType', "");
                    }break;
                    case "gazel.price2":{

                        this.$store.commit('setCarType', this.config.cars.gazel.name);
                        this.$store.commit('setNumberOfItems', 1);
                        this.$store.commit('setTotalPrice', this.needLoader
                            ? parseInt(this.config.cars.gazel.price2) + parseInt(this.config.cars.gazel.loaderPrice)
                            : parseInt(this.config.cars.gazel.price2));
                        this.$store.commit('setRegion', "");
                        this.$store.commit('setGarbageType', "");
                    }break;
                    case "gazel.price3":{
                        this.$store.commit('setCarType', this.config.cars.gazel.name);
                        this.$store.commit('setNumberOfItems', 1);
                        this.$store.commit('setTotalPrice', this.needLoader
                            ? parseInt(this.config.cars.gazel.price3) + parseInt(this.config.cars.gazel.loaderPrice)
                            : parseInt(this.config.cars.gazel.price3));
                        this.$store.commit('setRegion', "");
                        this.$store.commit('setGarbageType', "");
                    }break;
                    case "gazel.price4":{
                        this.$store.commit('setCarType', this.config.cars.gazel.name);
                        this.$store.commit('setNumberOfItems', 1);
                        this.$store.commit('setTotalPrice', this.needLoader
                            ? parseInt(this.config.cars.gazel.price4) + parseInt(this.config.cars.gazel.loaderPrice)
                            : parseInt(this.config.cars.gazel.price4));
                        this.$store.commit('setRegion', "");
                        this.$store.commit('setGarbageType', "");
                    }break;

                    case "baw.price1":{
                        this.$store.commit('setCarType', this.config.cars.baw.name);
                        this.$store.commit('setNumberOfItems', 1);
                        this.$store.commit('setTotalPrice', this.needLoader
                            ? parseInt(this.config.cars.baw.price1) + parseInt(this.config.cars.baw.loaderPrice)
                            : parseInt(this.config.cars.baw.price1));
                        this.$store.commit('setRegion', "");
                        this.$store.commit('setGarbageType', "");
                    }break;
                    case "baw.price2":{
                        this.$store.commit('setCarType', this.config.cars.baw.name);
                        this.$store.commit('setNumberOfItems', 1);
                        this.$store.commit('setTotalPrice', this.needLoader
                            ? parseInt(this.config.cars.baw.price2) + parseInt(this.config.cars.baw.loaderPrice)
                            : parseInt(this.config.cars.baw.price2));
                        this.$store.commit('setRegion', "");
                        this.$store.commit('setGarbageType', "");
                    }break;
                    case "baw.price3":{
                        this.$store.commit('setCarType', this.config.cars.baw.name);
                        this.$store.commit('setNumberOfItems', 1);
                        this.$store.commit('setTotalPrice', this.needLoader
                            ? parseInt(this.config.cars.baw.price3) + parseInt(this.config.cars.baw.loaderPrice)
                            : parseInt(this.config.cars.baw.price3));
                        this.$store.commit('setRegion', "");
                        this.$store.commit('setGarbageType', "");
                    }break;
                    case "baw.price4":{
                        this.$store.commit('setCarType', this.config.cars.baw.name);
                        this.$store.commit('setNumberOfItems', 1);
                        this.$store.commit('setTotalPrice', this.needLoader
                            ? parseInt(this.config.cars.baw.price4) + parseInt(this.config.cars.baw.loaderPrice)
                            : parseInt(this.config.cars.baw.price4));
                        this.$store.commit('setRegion', "");
                        this.$store.commit('setGarbageType', "");
                    }break;

                    case "docker20.price1":{
                        this.$store.commit('setCarType', this.config.cars.docker20.name);
                        this.$store.commit('setNumberOfItems', 1);
                        this.$store.commit('setTotalPrice', this.needLoader
                            ? parseInt(this.config.cars.docker20.price1) + parseInt(this.config.cars.docker20.loaderPrice)
                            : parseInt(this.config.cars.docker20.price1));
                        this.$store.commit('setRegion', "");
                        this.$store.commit('setGarbageType', "");
                    }break;
                    case "docker20.price2":{
                        this.$store.commit('setCarType', this.config.cars.docker20.name);
                        this.$store.commit('setNumberOfItems', 1);
                        this.$store.commit('setTotalPrice', this.needLoader
                            ? parseInt(this.config.cars.docker20.price2) + parseInt(this.config.cars.docker20.loaderPrice)
                            : parseInt(this.config.cars.docker20.price2));
                        this.$store.commit('setRegion', "");
                        this.$store.commit('setGarbageType', "");
                    }break;
                    case "docker20.price3":{
                        this.$store.commit('setCarType', this.config.cars.docker20.name);
                        this.$store.commit('setNumberOfItems', 1);
                        this.$store.commit('setTotalPrice', this.needLoader
                            ? parseInt(this.config.cars.docker20.price3) + parseInt(this.config.cars.docker20.loaderPrice)
                            : parseInt(this.config.cars.docker20.price3));
                        this.$store.commit('setRegion', "");
                        this.$store.commit('setGarbageType', "");
                    }break;
                    case "docker20.price4":{
                        this.$store.commit('setCarType', this.config.cars.docker20.name);
                        this.$store.commit('setNumberOfItems', 1);
                        this.$store.commit('setTotalPrice', this.needLoader
                            ? parseInt(this.config.cars.docker20.price4) + parseInt(this.config.cars.docker20.loaderPrice)
                            : parseInt(this.config.cars.docker20.price4));
                        this.$store.commit('setRegion', "");
                        this.$store.commit('setGarbageType', "");
                    }break;

                    case "docker27.price1":{
                        this.$store.commit('setCarType', this.config.cars.docker27.name);
                        this.$store.commit('setNumberOfItems', 1);
                        this.$store.commit('setTotalPrice', this.needLoader
                            ? parseInt(this.config.cars.docker27.price1) + parseInt(this.config.cars.docker27.loaderPrice)
                            : parseInt(this.config.cars.docker27.price1));
                        this.$store.commit('setRegion', "");
                        this.$store.commit('setGarbageType', "");
                    }break;
                    case "docker27.price2":{
                        this.$store.commit('setCarType', this.config.cars.docker27.name);
                        this.$store.commit('setNumberOfItems', 1);
                        this.$store.commit('setTotalPrice', this.needLoader
                            ? parseInt(this.config.cars.docker27.price2) + parseInt(this.config.cars.docker27.loaderPrice)
                            : parseInt(this.config.cars.docker27.price2));
                        this.$store.commit('setRegion', "");
                        this.$store.commit('setGarbageType', "");
                    }break;
                    case "docker27.price3":{
                        this.$store.commit('setCarType', this.config.cars.docker27.name);
                        this.$store.commit('setNumberOfItems', 1);
                        this.$store.commit('setTotalPrice', this.needLoader
                            ? parseInt(this.config.cars.docker27.price3) + parseInt(this.config.cars.docker27.loaderPrice)
                            : parseInt(this.config.cars.docker27.price3));
                        this.$store.commit('setRegion', "");
                        this.$store.commit('setGarbageType', "");
                    }break;
                    case "docker27.price4":{
                        this.$store.commit('setCarType', this.config.cars.docker27.name);
                        this.$store.commit('setNumberOfItems', 1);
                        this.$store.commit('setTotalPrice', this.needLoader
                            ? parseInt(this.config.cars.docker27.price4) + parseInt(this.config.cars.docker27.loaderPrice)
                            : parseInt(this.config.cars.docker27.price4));
                        this.$store.commit('setRegion', "");
                        this.$store.commit('setGarbageType', "");
                    }break;
                }
            },
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
    input[type=range] {
        -webkit-appearance: none;
        margin: 18px 0;
        width: 100%;
    }
    input[type=range]:focus {
        outline: none;
    }
    input[type=range]::-webkit-slider-runnable-track {
        width: 100%;
        height: 8.4px;
        cursor: pointer;
        box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
        background: #3071a9;
        border-radius: 1.3px;
        border: 0.2px solid #010101;
    }
    input[type=range]::-webkit-slider-thumb {
        box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
        border: 1px solid #000000;
        height: 36px;
        width: 16px;
        border-radius: 3px;
        background: #ffffff;
        cursor: pointer;
        -webkit-appearance: none;
        margin-top: -14px;
    }
    input[type=range]:focus::-webkit-slider-runnable-track {
        background: #367ebd;
    }
    input[type=range]::-moz-range-track {
        width: 100%;
        height: 8.4px;
        cursor: pointer;
        box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
        background: #3071a9;
        border-radius: 1.3px;
        border: 0.2px solid #010101;
    }
    input[type=range]::-moz-range-thumb {
        box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
        border: 1px solid #000000;
        height: 36px;
        width: 16px;
        border-radius: 3px;
        background: #ffffff;
        cursor: pointer;
    }
    input[type=range]::-ms-track {
        width: 100%;
        height: 8.4px;
        cursor: pointer;
        background: transparent;
        border-color: transparent;
        border-width: 16px 0;
        color: transparent;
    }
    input[type=range]::-ms-fill-lower {
        background: #2a6495;
        border: 0.2px solid #010101;
        border-radius: 2.6px;
        box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    }
    input[type=range]::-ms-fill-upper {
        background: #3071a9;
        border: 0.2px solid #010101;
        border-radius: 2.6px;
        box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    }
    input[type=range]::-ms-thumb {
        box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
        border: 1px solid #000000;
        height: 36px;
        width: 16px;
        border-radius: 3px;
        background: #ffffff;
        cursor: pointer;
    }
    input[type=range]:focus::-ms-fill-lower {
        background: #3071a9;
    }
    input[type=range]:focus::-ms-fill-upper {
        background: #367ebd;
    }
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
        border-radius: 14px;
    }
    .pHover-select {
        background-color: #FFFFFF;
        color: #84c225;
        padding: 8px 0px;
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
        border-radius: 14px;
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
        border-radius: 4px;
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

    .linka {
        font-size: 24px;
        font-family: "Roboto", sans-serif;
        color: rgb(46, 106, 152);
        font-weight: bold;
        line-height: 0.917;
        text-align: left;
    }
</style>