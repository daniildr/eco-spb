<template>
    <div class="row">
        <div class="col-md-12" style="vertical-align: center;">
            <div class="col-md-4 left-text mobile-hidden"><p>&copy; {{ currentYear }}   Copyright </p></div>
            <div class="col-md-4 center-text mobile-hidden" style="padding-top: 10px;"><p>All rights reserved</p></div>
            <div class="col-md-4 right-text" style="padding-top: 8px;">
                <p>Designed by:
                    <img src="../../images/BIGZ1_cr1.png" alt="Эко Санкт-Петербург | Вывоз мусора и бытовых отходов">
                    |
                    <img src="../../images/DaniilDr.png" alt="Designed by Daniil Drozdov">
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Copyright",
        data() {
            return {
                currentYear: (new Date()).getFullYear()
            }
        }
    }
</script>

<style scoped>

</style>