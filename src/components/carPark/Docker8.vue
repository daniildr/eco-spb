<template>
    <div class="container">
        <div class="row bottom-pad hidden-sm hidden-xs">
            <div class="col-md-6 carpark_row">
                <div class="carpark">
                    <div class="carpark_title right-text" style="padding-right: 80px;">
                        <h2>BAW Fenix (8-12 Кубометров)</h2>
                        <p><strong>Разумный компромисс.</strong><br/>
                            <strong>Ширина кузова:</strong> 2,2 м;<br/>
                            <strong>Длина кузова:</strong> 4 м;<br/>
                            <strong>Вместимость:</strong> от 8м<sup>3</sup> до 12м<sup>3</sup>;<br/>
                            <strong>Грузоподъемность:</strong> 3,5 т;<br/>
                        </p>
                        <button v-on:click="show()" type="button" style="height: 40px; width: 60%;"
                                class="btn btn-default submit-btn form_submit">Заказать</button>
                    </div>
                </div>
            </div>
            <div class="col-md-6 carpark_row">
                <div class="carpark">
                    <img src="../../images/kontainer-8-m3.png">
                </div>
            </div>
        </div>

        <div class="row bottom-pad hidden-lg hidden-md">
            <div class="col-md-6 carpark_row">
                <div class="carpark">
                    <img src="../../images/kontainer-8-m3.png">
                </div>
            </div>
            <div class="col-md-6 carpark_row">
                <div class="carpark">
                    <div class="carpark_title">
                        <h2>BAW Fenix (8-12 Кубометров)</h2>
                        <p><strong>Разумный компромисс.</strong><br/>
                            <strong>Ширина кузова:</strong> 1,85 м;<br/>
                            <strong>Длина кузова:</strong> 4 м;<br/>
                            <strong>Вместимость:</strong> от 8м<sup>3</sup> до 12м<sup>3</sup>;<br/>
                            <strong>Грузоподъемность:</strong> 3,5 т;<br/>
                        </p>
                        <button v-on:click="show()" type="button" style="height: 40px; width: 100%;"
                                class="btn btn-default submit-btn form_submit">Заказать</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import json from "@/assets/price.json";
    export default {
        name: "Docker8",
        methods: {
            show() {
                this.$store.commit('setCarType', this.config.cars.baw.name);
                this.$store.commit('setNumberOfItems', 1);
                this.$store.commit('setTotalPrice', this.config.cars.baw.price1);
                this.$store.commit('setRegion', "");
                this.$store.commit('setGarbageType', "");
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