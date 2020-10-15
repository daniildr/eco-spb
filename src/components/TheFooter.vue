<template>
    <section class="copyright">
        <div class="container">
            <social/>
            <br/>
            <br/>
            <copyright/>
            <a id="fabUp" href="#HOME">
                <i class="fa fa-arrow-up" title="Вверх"></i>
            </a>
        </div>
    </section>
</template>

<script>
    import Copyright from "@/components/footer/Copyright";
    import Social from "@/components/footer/Social";

    export default {
        name: "TheFooter",
        components: {
            Social,
            Copyright
        }
    }
</script>

<style scoped>
    #fabUp {
        color: #FFFFFF;
        position: fixed;
        bottom: 100px;
        right: 10%;
        font-size: 50px;
        display: none;
    }
    #fabUp > i {
        text-align: center;
        vertical-align: center;
        background-color: rgba(18, 85, 146, 1);
        border-radius: 4px;
        transition: all 0.5s;
        box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
        width: 54px;
        margin-top: 5px;
        margin-bottom: 5px;
    }
    #fabUp > i:hover {
        color: #094071;
        background-color: rgba(255, 255, 255, 0.8);
    }
    @media (max-width: 1599px){
        #fabUp {
            right: 7%;
        }
    }
    @media (max-width: 1499px){
        #fabUp {
            right: 5%;
        }
    }
    @media (max-width: 1399px){
        #fabUp {
            right: 3%;
        }
    }
    @media (max-width: 1299px){
        #fabUp {
            right: 10px;
        }
    }
    @media (max-width: 1229px){

    }
    @media (max-width: 1199px){
        .mobile-st{
            text-align: center;
        }
    }
    @media (max-width: 1099px){

    }
    @media (max-width: 991px){

    }
    @media (max-width: 700px){

    }
    @media (max-width: 500px){

    }
    @media (max-width: 400px){

    }
</style>