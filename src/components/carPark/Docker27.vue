<template>
    <div class="container">
        <div class="row bottom-pad-last hidden-sm hidden-xs">
            <div class="col-md-6 carpark_row">
                <div class="carpark">
                    <div class="carpark_title right-text" style="padding-right: 80px;">
                        <h2>Контейнер (27 Кубометров)</h2>
                        <p><strong>Ультимативный вариант. Для требовательных клиентов.</strong><br/>
                            <strong>Ширина:</strong> 2,5 м;<br/>
                            <strong>Длина:</strong> 5,9 м;<br/>
                            <strong>Вместимость:</strong> 27 м<sup>3</sup>;<br/>
                            <strong>Грузоподъемность:</strong> 10 т;<br/>
                        </p>
                        <button v-on:click="show()" type="button" style="height: 40px; width: 60%;"
                                class="btn btn-default submit-btn form_submit hidden-xs hidden-sm">Оставить заявку</button>
                    </div>
                </div>
            </div>
            <div class="col-md-6 carpark_row">
                <div class="carpark">
                    <img src="../../images/kontainer-27-m3.png">
                </div>
            </div>
        </div>

        <div class="row bottom-pad-last hidden-lg hidden-md">
            <div class="col-md-6 carpark_row">
                <div class="carpark">
                    <img src="../../images/kontainer-27-m3.png">
                </div>
            </div>
            <div class="col-md-6 carpark_row">
                <div class="carpark">
                    <div class="carpark_title">
                        <h2>Контейнер (27 Кубометров)</h2>
                        <p><strong>Ультимативный вариант. Для требовательных клиентов.</strong><br/>
                            <strong>Ширина:</strong> 2,5 м;<br/>
                            <strong>Длина:</strong> 5,9 м;<br/>
                            <strong>Вместимость:</strong> 27 м<sup>3</sup>;<br/>
                            <strong>Грузоподъемность:</strong> 10 т;<br/>
                        </p>
                        <button v-on:click="show()" type="button" style="height: 40px; width: 100%;"
                                class="btn btn-default submit-btn form_submit hidden-md hidden-lg">Оставить заявку</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import json from "@/assets/price.json";
    export default {
        name: "Docker27",
        components: {},
        methods: {
            show() {
                this.$store.commit('setCarType', this.config.cars.docker27.name);
                this.$store.commit('setNumberOfItems', 1);
                this.$store.commit('setTotalPrice', this.config.cars.docker27.price1);
                this.$modal.show("feedbackModal");
            }
        },
        data() {
            return {
                config: json,
            }
        }
    }
</script>

<style scoped>
    @media (max-width: 1199px){
        .carpark_title > p {
            padding: 10px;
            background-color: #135693;
        }
        .bottom-pad {
            margin-bottom: 0px;
        }
    }
</style>