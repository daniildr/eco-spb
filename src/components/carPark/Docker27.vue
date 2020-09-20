<template>
    <div class="container">
        <div class="row bottom-pad bottom-pad-last">
            <div class="col-md-6 carpark_row">
                <div class="carpark">
                    <div class="carpark_title">
                        <h2>Контейнер (27 Кубометров)</h2>
                        <p>Газель для самых низких арок в городе.<br/>
                            Высота газели 2,50 м;<br/>
                            Длина 3 м;<br/>
                            Вместимость 9 куб;<br/>
                            Грузоподъемность до 1,5 т;<br/>
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-md-6 carpark_row">
                <div class="carpark">
                    <img width="560" height="315" src="../../images/kontainer-27-m3.png">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Docker27"
    }
</script>

<style scoped>
    .bottom-pad-last {
        margin-bottom: 10px;
    }

    @media (max-width: 1024px){
        .carpark_title > p{
            color: #0F1217;
            background-image: url("../../images/bg_color_blue.png");
        }
    }
</style>