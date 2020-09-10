<template>
    <section id="ABOUT">
        <section class="about page">
            <div class="container">
                <div class="row">
                    <div class="col-md-10 col-md-offset-1 center-text">
                        <div class="section_title">
                            <h2>О нас:</h2>
                            <p>
                                «Эко-Питер» — это проверенная годами компания с большим опытом работы в сфере утилизации отходов. Обеспечиваем вывоз мусора и экологически безопасную утилизацию твердых коммунальных отходов.
                                <strong>Доверьте вывоз мусора ответственному партнеру!</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Advantages/>
    </section>
</template>

<script>

    import Advantages from "@/components/Advantages";
    export default {
        name: "About",
        components: {Advantages}
    }
</script>

<style scoped>

</style>