    <template>
    <div class="col-md-12" style="margin-bottom: 20px;">
        <div class="col-md-pull-6 pull-left">
            <a href="#"><img src="../../images/header-logo.png" alt="Logo"></a>
        </div>
        <div class="col-md-pull-6 pull-right">
            <WorkInfo/>
        </div>
    </div>
</template>
<script>
    import WorkInfo from "@/components/header/WorkInfo"

    export default {
        name: 'HeaderInfo',
        components: {WorkInfo}
    }
</script>
<style scoped>
    input[type=range] {
        -webkit-appearance: none;
        margin: 18px 0;
        width: 100%;
    }

    input[type=range]:focus {
        outline: none;
    }

    input[type=range]::-webkit-slider-runnable-track {
        width: 100%;
        height: 8.4px;
        cursor: pointer;
        box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
        background: #3071a9;
        border-radius: 1.3px;
        border: 0.2px solid #010101;
    }

    input[type=range]::-webkit-slider-thumb {
        box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
        border: 1px solid #000000;
        height: 36px;
        width: 16px;
        border-radius: 3px;
        background: #ffffff;
        cursor: pointer;
        -webkit-appearance: none;
        margin-top: -14px;
    }

    input[type=range]:focus::-webkit-slider-runnable-track {
        background: #367ebd;
    }

    input[type=range]::-moz-range-track {
        width: 100%;
        height: 8.4px;
        cursor: pointer;
        box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
        background: #3071a9;
        border-radius: 1.3px;
        border: 0.2px solid #010101;
    }

    input[type=range]::-moz-range-thumb {
        box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
        border: 1px solid #000000;
        height: 36px;
        width: 16px;
        border-radius: 3px;
        background: #ffffff;
        cursor: pointer;
    }

    input[type=range]::-ms-track {
        width: 100%;
        height: 8.4px;
        cursor: pointer;
        background: transparent;
        border-color: transparent;
        border-width: 16px 0;
        color: transparent;
    }

    input[type=range]::-ms-fill-lower {
        background: #2a6495;
        border: 0.2px solid #010101;
        border-radius: 2.6px;
        box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    }

    input[type=range]::-ms-fill-upper {
        background: #3071a9;
        border: 0.2px solid #010101;
        border-radius: 2.6px;
        box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    }

    input[type=range]::-ms-thumb {
        box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
        border: 1px solid #000000;
        height: 36px;
        width: 16px;
        border-radius: 3px;
        background: #ffffff;
        cursor: pointer;
    }

    input[type=range]:focus::-ms-fill-lower {
        background: #3071a9;
    }

    input[type=range]:focus::-ms-fill-upper {
        background: #367ebd;
    }

    .custom-checkbox + label {
        display: inline-flex;
        align-items: center;
        user-select: none;
    }

    .custom-checkbox + label::before {
        content: '';
        display: inline-block;
        width: 1em;
        height: 1em;
        flex-shrink: 0;
        flex-grow: 0;
        border: 1px solid #adb5bd;
        border-radius: 0.25em;
        margin-right: 0.5em;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 50% 50%;
    }

    .custom-checkbox:checked + label::before {
        border-color: #135693;
        background-color: #135693;
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
    }

    /* стили при наведении курсора на checkbox */
    .custom-checkbox:not(:disabled):not(:checked) + label:hover::before {
        border-color: #b3d7ff;
    }

    /* стили для активного состояния чекбокса (при нажатии на него) */
    .custom-checkbox:not(:disabled):active + label::before {
        background-color: #b3d7ff;
        border-color: #b3d7ff;
    }

    /* стили для чекбокса, находящегося в фокусе */
    .custom-checkbox:focus + label::before {
        box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }

    /* стили для чекбокса, находящегося в фокусе и не находящегося в состоянии checked */
    .custom-checkbox:focus:not(:checked) + label::before {
        border-color: #80bdff;
    }

    /* стили для чекбокса, находящегося в состоянии disabled */
    .custom-checkbox:disabled + label::before {
        background-color: #e9ecef;
    }

    @media (max-width: 1599px) {
    }

    @media (max-width: 1499px) {
    }

    @media (max-width: 1399px) {
    }

    @media (max-width: 1299px) {
    }

    @media (max-width: 1229px) {
    }

    @media (max-width: 1199px) {
    }

    @media (max-width: 1099px) {
    }

    @media (max-width: 991px) {

    }

    @media (max-width: 700px) {

    }

    @media (max-width: 500px) {

    }

    @media (max-width: 400px) {

    }

    green-p {
        color: #1d890a;
    }

    .mapLabel > p {
        font-size: 16px;
        margin: 0px;
        padding: 0px;
        text-align: center;
        vertical-align: center;
        transition: .55s opacity, .55s visibility;
    }

    img {
        vertical-align: middle;
    }

    .section_title > customP {
        margin-top: 20px;
        margin-bottom: 20px;
        width: 100%;
        font-size: large;
        font-family: "Roboto", sans-serif; /* "Roboto", sans-serif; */
        color: rgb(255, 255, 255);
        line-height: 0.511;
        text-align: left;
        text-shadow: 0px 3px 2.64px rgba(1, 1, 1, 0.75);
        -moz-transform: matrix(0.6169261354827, 0, 0, 0.6169261354827, 0, 0);
        -webkit-transform: matrix(0.6169261354827, 0, 0, 0.6169261354827, 0, 0);
        -ms-transform: matrix(0.6169261354827, 0, 0, 0.6169261354827, 0, 0);
    }
</style>