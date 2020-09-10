<template>
    <div class="container_z_index">
        <img class="position" src="../../images/bg_color_blue.png">
    </div>


</template>

<script>
    export default {
        name: "CarParkBg"
    }
</script>

<style scoped>
    .position{
        bottom: 148px;
        position: inherit;
    }
    @media (max-width: 1024px){
        .position{
            display: none;
        }
    }

</style>