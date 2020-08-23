<template>
    <section class="inner_about_area page">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-md-offset-1">
                    <div class="col-md-10 inner_about_title">
                        <h2>Преимущества работы с нами</h2>
                        <p>Компания  «Эко-Питер» более 10 лет производит вывоз мусора и предоставляет весь спектр услуг по вывозу любых типов отходов:</p>
                        <!--<ul>
                            <li><p>ТБО (твердые бытовые отходы);</p></li>
                            <li>Строительный мусор;</li>
                            <li>Мусор от слома и разборки зданий;</li>
                            <li>КГМ (крупногабаритный мусор);</li>
                            <li>Вторсырье (стеклобой, ПЭТ, ПВХ, металлолом и др.);</li>
                            <li>Порубочные остатки;</li>
                            <li>Уборка и вывоз снега с погрузкой.</li>
                        </ul>-->
                    </div>
                    <SingleAdvantages
                        title-txt="Оперативная подача техники"
                        descrip="Возможность оперативной подачи техники по срочному запросу клиента. Гарантируем соблюдение сроков подачи транспорта и предоставление правильных закрывающих документов."
                        img-src="../images/Advantages-1.png"
                    />
                    <br>


                    <SingleAdvantages
                            title-txt="Удобный сервис"
                            descrip="На сайте можно заказать вывоз, погрузку и утилизацию отходов любого класса. Сотрудничая с нами вы экономите свое время и деньги. Вы не будете тратить время на подбор оптимального контейнера, поиск грузчиков или трактора."
                            img-src="../images/Advantages-2-fix.png"
                    />
                    <br>

                    <SingleAdvantages
                            title-txt="Использование современных технологий"
                            descrip="На сайте можно заказать вывоз, погрузку и утилизацию отходов любого класса. Постоянная модернизация автопарка и своевременное ТО исключают поломки на маршрутах."
                            img-src="../images/Advantages-3.png"
                    />
                    <br>
                </div>
            </div>
        </div>
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