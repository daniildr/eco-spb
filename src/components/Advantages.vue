<template>
    <section class="inner_about_area">
        <div class="container">
            <div class="row">
                <div class="col-md-12 ">
                    <div class="col-md-10 col-md-offset-1 inner_about_title">
                        <h2>Преимущества работы с нами</h2>
                    </div>
                    <div class="col-md-12">
                        <div class="col-md-4">
                            <SingleAdvantages
                                    title-txt="Оперативная подача техники"
                                    img-src="../images/Advantages-1.png"
                            />
                        </div>
                        <div class="col-md-4">
                            <SingleAdvantages
                                    title-txt="Удобный сервис"
                                    img-src="../images/Advantages-2-fix.png"
                            />
                        </div>
                        <div class="col-md-4">
                            <SingleAdvantages
                                    title-txt="Использование современных технологий"
                                    img-src="../images/Advantages-3.png"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr/>
    </section>
</template>

<script>
    import SingleAdvantages from "@/components/SingleAdvantages";
    export default {
        name: "Advantages",
        components: {SingleAdvantages}
    }
</script>

<style scoped>

</style>