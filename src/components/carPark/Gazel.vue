<template>
    <div class="container">
        <div class="row bottom-pad">
            <div class="col-md-6 carpark_row">
                <div class="carpark">
                    <img src="../../images/Gazel.png">
                </div>
            </div>
            <div class="col-md-6 carpark_row">
                <div class="carpark">
                    <div class="carpark_title">
                        <h2>Газель (9 Кубометров)</h2>
                        <p>Газель для самых низких арок в городе.<br/>
                            Высота автомобиля: 2,50 м;<br/>
                            Длина кузова: 3 м;<br/>
                            Вместимость: 9 м<sup>3</sup>;<br/>
                            Грузоподъемность: до 1,5 т;<br/>
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
        name: "Gazel",
        methods: {
            show() {
                this.$store.commit('setCarType', this.config.cars.gazel.name);
                this.$store.commit('setNumberOfItems', 1);
                this.$store.commit('setTotalPrice', this.config.cars.gazel.price1);
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
        .carpark img {
            background-color: #FFFFFF;
        }
    }
</style>