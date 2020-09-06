<template>
    <section class="inner_about_area page" id="PRICE">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-md-offset-1">
                    <div class="col-md-10 inner_about_title">
                        <h2>Цены на вывоз мусора:</h2>
                    </div>
                </div>
            </div>
        </div>
        <div class="table-responsive container">
            <table class="table table-bordered">
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
                    <td><h4>Санкт-Петербург</h4><p>(В пределах КАД)</p></td>
                    <td>
                        <button type="submit" class="btn btn-default subs-btn">
                            От {{ needLoader ? parseInt(config.Car.price1) + parseInt(config.LoaderPrice.price1) : config.Car.price1 }} рублей
                        </button>
                    </td>
                    <td>
                        <button type="submit" class="btn btn-default subs-btn">
                            От {{ needLoader ? parseInt(config.Car.price2) + parseInt(config.LoaderPrice.price2) : config.Car.price2 }} рублей
                        </button>
                    </td>
                    <td>
                        <button type="submit" class="btn btn-default subs-btn">
                            От {{ needLoader ? parseInt(config.Car.price3) + parseInt(config.LoaderPrice.price3) : config.Car.price3 }} рублей
                        </button>
                    </td>
                    <td>
                        <button type="submit" class="btn btn-default subs-btn">
                            От {{ needLoader ? parseInt(config.Car.price4) + parseInt(config.LoaderPrice.price4) : config.Car.price4 }} рублей
                        </button>
                    </td>
                </tr>
                <tr>
                    <td><h4>Санкт-Петербург</h4><p>(В пределах 30км от КАД)</p></td>
                    <td>
                        <button type="submit" class="btn btn-default subs-btn">
                            От {{ needLoader ? parseInt(config.Box1.price1) + parseInt(config.LoaderPrice.price1) : config.Box1.price1 }} рублей
                        </button>
                    </td>
                    <td>
                        <button type="submit" class="btn btn-default subs-btn">
                            От {{ needLoader ? parseInt(config.Box1.price2) + parseInt(config.LoaderPrice.price2) : config.Box1.price2 }} рублей
                        </button>
                    </td>
                    <td>
                        <button type="submit" class="btn btn-default subs-btn">
                            От {{ needLoader ? parseInt(config.Box1.price3) + parseInt(config.LoaderPrice.price3) : config.Box1.price3 }} рублей
                        </button>
                    </td>
                    <td>
                        <button type="submit" class="btn btn-default subs-btn">
                            От {{ needLoader ? parseInt(config.Box1.price4) + parseInt(config.LoaderPrice.price4) : config.Box1.price4 }} рублей
                        </button>
                    </td>
                </tr>
                <tr>
                    <td><h4>Ленинградская Область</h4><p>(В пределах 60км от КАД)</p></td>
                    <td>
                        <button type="submit" class="btn btn-default subs-btn">
                            От {{ needLoader ? parseInt(config.Box2.price1) + parseInt(config.LoaderPrice.price1) : config.Box2.price1 }} рублей
                        </button>
                    </td>
                    <td>
                        <button type="submit" class="btn btn-default subs-btn">
                            От {{ needLoader ? parseInt(config.Box2.price2) + parseInt(config.LoaderPrice.price2) : config.Box2.price2 }} рублей
                        </button>
                    </td>
                    <td>
                        <button type="submit" class="btn btn-default subs-btn">
                            От {{ needLoader ? parseInt(config.Box2.price3) + parseInt(config.LoaderPrice.price3) : config.Box2.price3 }} рублей
                        </button>
                    </td>
                    <td>
                        <button type="submit" class="btn btn-default subs-btn">
                            От {{ needLoader ? parseInt(config.Box2.price4) + parseInt(config.LoaderPrice.price4) : config.Box2.price4 }} рублей
                        </button>
                    </td></tr>
                <tr>
                    <td><h4>Ленинградская Область</h4><p>(В пределах 90км от КАД)</p></td>
                    <td>
                        <button type="submit" class="btn btn-default subs-btn">
                            От {{ needLoader ? parseInt(config.Box3.price1) + parseInt(config.LoaderPrice.price1) : config.Box3.price1 }} рублей
                        </button>
                    </td>
                    <td>
                        <button type="submit" class="btn btn-default subs-btn">
                            От {{ needLoader ? parseInt(config.Box3.price2) + parseInt(config.LoaderPrice.price2) : config.Box3.price2 }} рублей
                        </button>
                    </td>
                    <td>
                        <button type="submit" class="btn btn-default subs-btn">
                            От {{ needLoader ? parseInt(config.Box3.price3) + parseInt(config.LoaderPrice.price3) : config.Box3.price3 }} рублей
                        </button>
                    </td>
                    <td>
                        <button type="submit" class="btn btn-default subs-btn">
                            От {{ needLoader ? parseInt(config.Box3.price4) + parseInt(config.LoaderPrice.price4) : config.Box3.price4 }} рублей
                        </button>
                    </td></tr>
                </tbody>
            </table>
            <hr/>
            <input id="need-loader" class="custom-radio2 hidden" type="checkbox" v-bind:value="true" v-on:input="needLoader == true ? needLoader = false : needLoader = true">
            <label for="need-loader"> Ручная погрузка контейнера (2 чел.) от 2500 руб.</label>
        </div>
    </section>
</template>

<script>
    import json from '@/assets/price.json'

    export default {
        name: "Price",
        data() {
            return {
                needLoader: false,
                config : json
            }
        }
    }
</script>

<style scoped>
    thead {
        border-bottom: 3px solid #1d890a;
    }
    table{
        align-items: center;
    }
    .table-bordered > tbody > tr > td {
        border: 0px;
    }
    input[type="checkbox"] {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        padding: 0;
    }
    label {
        display: inline-block;
        margin-bottom: .5rem;
        user-select: none;
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
        color: #1C9619;
        font-size: 100%;
        border-radius: 2px;
        font-family: "Roboto Medium";
        border: 1px solid #ccc;
    }
    .custom-radio2:checked + label::before {
        content: "\2714";
    }
</style>