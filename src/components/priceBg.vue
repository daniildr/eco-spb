<template>
    <section>
        <div class="container_z_index">
            <img class="position1" src="../images/bg_color_blue_mini.png">
        </div>
        <div class="container_z_index">
            <img class="position2" src="../images/bg_color_blue_mini.png">
        </div>
        <div class="container_z_index">
            <img class="position3" src="../images/bg_color_blue_mini.png">
        </div>
    </section>
</template>

<script>
    export default {
        name: "priceBg"
    }
</script>

<style scoped>
    .position1{
        bottom: 323px;
        height: 55px;
        width: 2560px;
        position: inherit;
    }
    .position2{
        bottom: 188px;
        height: 66px;
        width: 2560px;
        position: inherit;
    }
    .position3{
        bottom: 54px;
        height: 66px;
        width: 2560px;
        position: inherit;
    }
    @media (max-width: 1024px){
        .position1{
            display: none;
        }
        .position2{
            display: none;
        }
        .position3{
            display: none;
        }
    }
</style>