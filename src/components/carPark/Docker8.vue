<template>
    <div class="container">
        <div class="row bottom-pad hidden-sm hidden-xs">
            <div class="col-md-6 carpark_row">
                <div class="carpark">
                    <div class="carpark_title right-text" style="padding-right: 80px;">
                        <h2>BAW Fenix (8-12 Кубометров)</h2>
                        <p>Разумный компромисс между габаритами и маневренностью.<br/>
                            Ширина кузова: 1,85 м;<br/>
                            Длина кузова: 4 м;<br/>
                            Вместимость: от 8м<sup>3</sup> до 12м<sup>3</sup>;<br/>
                            Грузоподъемность: 3,5 т;<br/>
                        </p>
                        <BlueButton custom-style="height: 40px; width: 300px;"/>
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
                        <p>Разумный компромисс между габаритами и маневренностью.<br/>
                            Ширина кузова: 1,85 м;<br/>
                            Длина кузова: 4 м;<br/>
                            Вместимость: от 8м<sup>3</sup> до 12м<sup>3</sup>;<br/>
                            Грузоподъемность: 3,5 т;<br/>
                        </p>
                        <BlueButton custom-style="height: 40px; width: 300px;"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import BlueButton from "@/components/Buttons/BlueButton";
    export default {
        name: "Docker8",
        components: {BlueButton}
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