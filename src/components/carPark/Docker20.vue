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
                        <p>Газель для самых низких арок в городе.<br/>
                            Высота газели 2,50 м;<br/>
                            Длина 3 м;<br/>
                            Вместимость 9 куб;<br/>
                            Грузоподъемность до 1,5 т;<br/>
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
        name: "Docker20",
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