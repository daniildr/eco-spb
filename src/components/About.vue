<template>
    <section id="ABOUT">
        <section class="about page">
            <div class="container">
                <div class="row">
                    <div class="col-md-10 col-md-offset-1 center-text">
                        <div class="section_title">
                            <h2>О компании</h2>
                            <p>
                                «Эко-СПБ» — это проверенная годами компания с большим опытом работы в сфере утилизации отходов,
                                за 2019 мы вывезли 17000 тонн различного мусора с объектов наши клиентов.
                                Обеспечиваем вывоз мусора и экологически безопасную утилизацию строительных и твёрдых коммунальных отходов.
                            </p>
                            <p><strong>Доверьте вывоз мусора ответственному партнеру!</strong></p>
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