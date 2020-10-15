<template>
    <div class="container">
        <div class="row bottom-pad">
            <div class="col-md-6 carpark_row">
                <div class="carpark">
                    <img src="../../images/kontainer-20-m3.png">
                </div>
            </div>
            <div class="col-md-6 carpark_row">
                <div class="carpark">
                    <div class="carpark_title">
                        <h2>Контейнер (20 Кубометров)</h2>
                        <p><strong>Универсальный контейнер. Подходит для любого типа отходов.</strong><br/>
                            <strong>Ширина:</strong> 2,5 м;<br/>
                            <strong>Длина:</strong> 3,9 м;<br/>
                            <strong>Вместимость:</strong> до 20м<sup>3</sup>;<br/>
                            <strong>Грузоподъемность:</strong> 10 т;<br/>
                        </p>
                        <button v-on:click="show()" type="button" style="height: 40px; width: 100%;"
                                class="btn btn-default submit-btn form_submit hidden-md hidden-lg">Оставить заявку</button>
                        <button v-on:click="show()" type="button" style="height: 40px; width: 60%;"
                                class="btn btn-default submit-btn form_submit hidden-xs hidden-sm">Оставить заявку</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import json from "@/assets/price.json";
    export default {
        name: "Docker20",
        components: {},
        methods: {
            show() {
                this.$store.commit('setCarType', this.config.cars.docker20.name);
                this.$store.commit('setNumberOfItems', 1);
                this.$store.commit('setTotalPrice', this.config.cars.docker20.price1);
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