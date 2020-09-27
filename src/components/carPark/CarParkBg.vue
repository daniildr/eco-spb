<template>
    <div class="container_z_index">
        <img class="position" v-bind:style="bottomPosition" src="../../images/bg_color_blue.png">
    </div>


</template>

<script>
    export default {
        name: "CarParkBg",
        props: {
            bottomPosition: {
                type: String,
                default: "bottom: 148px;"
            }
        }
    }
</script>

<style scoped>
    .position{
        position: inherit;
    }
    @media (max-width: 1199px){
        .position{
            display: none;
        }
    }

</style>