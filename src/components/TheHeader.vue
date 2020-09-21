<template>
    <section>
        <section class="copyright">
            <MainMenu/>
            <div class="container" id="HOME">
                <div class="col-md-12"  style="margin-bottom: 20px;">
                    <div class="col-md-pull-6 pull-left">
                        <a href="#"><img src="../images/header-logo.png" alt="Logo"></a>
                    </div>
                    <div class="col-md-pull-6 pull-right" >
                        <WorkInfo/>
                    </div>
                </div>

                <div class="col-md-12">
                    <div class="col-md-6 left-text">
                        <TopMenu/>
                        <div class="section_title">
                            <customP>Вывоз мусора в Санкт-Петербурге и Ленинградской области...</customP>
                        </div>
                        <div class="col-md-6" style="margin-top: 14px;">
                            <img class="right-img" src="../images/loLabel.png">
                        </div>
                        <div class="col-md-6" style="margin-bottom: 15px;">
                            <select class="Shape_2">
                                <option value="Select">Выберите место:</option>
                                <option value="Тосно">Тосно</option>
                                <option value="Любань">Любань</option>
                                <option value="Лодейное Поле">Лодейное Поле</option>
                                <option value="Гатчина">Гатчина</option>
                                <option value="Луга">Луга</option>
                            </select>
                        </div>
                        <img src="../images/spbLabele.png">
                        <br/>
                        <svg class="z-first"
                             style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
                             viewBox="10 50 200 287">
                            <defs>
                            </defs>
                            <g>
                                <metadata/>
                                <path class="fil0" id="kurort" v-on:click="activeRegion('kurort')" d="M102.909 124.714l-4.633 -3.277 -2.373 0 0 -2.5425c0,0 -6.2715,-3.39 -6.9495,-4.0115 -0.678,-0.6215 -0.678,-0.6215 -0.678,-0.6215l-0.339 -4.8025 -3.3335 -2.7685 -2.2035 -5.4805 3.6725 -2.938 0.113 -6.667 -3.1075 -5.763 -7.797 -5.0285 -1.921 0.9605 -10.057 -5.311 -27.6333 -5.3229 -5.7681 1.4703 -1.131 2.6013 -4.8633 1.8096 -1.8096 -2.4882 -4.6371 0.5655 -3.8454 -3.5061 8.7087 -8.1432 2.6013 0 2.7144 -3.6192 4.1847 1.4703 4.2978 3.1668 1.0179 -2.7144 7.2384 -3.1668 10.8576 2.4882 -2.1489 -2.3751 2.7144 -1.4703 4.524 1.3572 9.1611 8.5956 5.2026 2.0358 3.9585 -0.3393 3.7323 4.9764 9.6135 3.1668 7.5777 5.5419 4.0716 0.2262 14.1375 4.7502 4.8633 2.8275 -3.0537 4.7502 -6.3336 -2.6013 0 2.7144 -8.2563 4.8633 7.4646 7.4646 -1.3572 9.2742 -7.2384 -0.4524 -0.9595 8.3339z">
                                    <title>Курортный район</title>
                                </path>
                                <!--<svg x="0" y="-5">
                                    <path style="fill: #cce874; display: none;" class="fil0" id="kurort1-2" v-on:click="activeRegion('kurort1')" d="M102.909 124.714l-4.633 -3.277 -2.373 0 0 -2.5425c0,0 -6.2715,-3.39 -6.9495,-4.0115 -0.678,-0.6215 -0.678,-0.6215 -0.678,-0.6215l-0.339 -4.8025 -3.3335 -2.7685 -2.2035 -5.4805 3.6725 -2.938 0.113 -6.667 -3.1075 -5.763 -7.797 -5.0285 -1.921 0.9605 -10.057 -5.311 -27.6333 -5.3229 -5.7681 1.4703 -1.131 2.6013 -4.8633 1.8096 -1.8096 -2.4882 -4.6371 0.5655 -3.8454 -3.5061 8.7087 -8.1432 2.6013 0 2.7144 -3.6192 4.1847 1.4703 4.2978 3.1668 1.0179 -2.7144 7.2384 -3.1668 10.8576 2.4882 -2.1489 -2.3751 2.7144 -1.4703 4.524 1.3572 9.1611 8.5956 5.2026 2.0358 3.9585 -0.3393 3.7323 4.9764 9.6135 3.1668 7.5777 5.5419 4.0716 0.2262 14.1375 4.7502 4.8633 2.8275 -3.0537 4.7502 -6.3336 -2.6013 0 2.7144 -8.2563 4.8633 7.4646 7.4646 -1.3572 9.2742 -7.2384 -0.4524 -0.9595 8.3339z">
                                        <title>Курортный район1</title>
                                    </path>
                                </svg>-->
                                <polygon class="fil0" id="prima" v-on:click="activeRegion('prima')" points="88.4455,123.075 88.362,114.829 95.6094,119.172 95.6376,121.851 98.232,121.766 103.082,125.179 104.126,116.606 111.31,117.142 112.247,112.037 119.438,108.71 125.248,110.599 132.629,106.295 140.878,130.137 139.578,131.494 123.702,131.889 119.803,130.081 108.899,129.459 103.079,126.522 96.8075,126.691 ">
                                    <title>Приморский район</title>
                                </polygon>
                                <polygon class="fil0" id="viborg" v-on:click="activeRegion('viborg')" points="125.51,92.6215 122.968,90.5629 119.785,95.5837 113.77,93.087 113.714,95.2302 105.508,100.25 112.755,107.215 112.902,107.398 112.244,111.639 119.417,108.32 125.163,110.233 132.89,105.749 141.124,129.944 141.265,130.226 139.771,131.749 141.096,133.3 141.604,139.025 143.155,138.827 143.747,129.493 144.593,127.773 145.115,115.278 148.674,109.572 146.358,100.588 138.448,99.6275 131.951,95.277 132.177,92 128.56,90.644 ">
                                    <title>Выборгский район</title>
                                </polygon>
                                <polygon class="fil0" id="kron" v-on:click="activeRegion('kron')" points="66.6365,135.731 66.354,131.494 67.823,130.194 66.241,126.409 59.913,121.38 59.687,118.668 50.9295,118.894 44.2625,115.334 44.206,118.442 50.873,123.923 51.212,126.635 50.534,128.838 51.099,130.42 53.924,130.363 54.037,126.07 56.3535,125.052 57.7095,128.951 59.913,129.064 64.0375,132.115 ">
                                    <title>Кронштадтский район</title>
                                </polygon>
                                <polygon class="fil0" id="petr" v-on:click="activeRegion('petr')" points="124.097,132.624 139.239,132.172 140.532,133.554 141.096,139.307 137.627,140.378 124.43,134.992 ">
                                    <title>Петроградский район</title>
                                </polygon>
                                <polygon class="fil0" id="vaska" v-on:click="activeRegion('vaska')" points="124.402,135.641 137.317,140.942 136.922,143.283 134.441,143.424 130.143,148.557 124.549,145.223 122.572,140.082 ">
                                    <title>Василеостровский район</title>
                                </polygon>
                                <polygon class="fil0" id="center" v-on:click="activeRegion('center')" points="137.43,143.452 137.768,140.914 147.695,137.812 150.515,138.348 148.992,145.962 149.753,147.88 145.354,149.825 ">
                                    <title>Центральный район</title>
                                </polygon>
                                <polygon class="fil0" id="kalin" v-on:click="activeRegion('kalin')" points="149.161,109.951 152.743,111.445 155.704,114.632 154.688,117.339 155.083,131.608 150.712,137.643 147.836,137.248 143.578,138.574 144.142,129.691 145.185,127.829 145.619,115.61 ">
                                    <title>Калининский район</title>
                                </polygon>
                                <polygon class="fil0" id="krasnogvar" v-on:click="activeRegion('krasnogvar')" points="156.155,114.688 158.636,114.716 164.22,122.641 166.166,130.283 169.86,127.858 172.574,133.076 170.709,134.432 169.071,132.963 164.834,144.319 156.019,144.206 153.816,148.557 150.935,149.63 149.635,145.675 151.274,137.822 155.68,131.663 155,117.397 ">
                                    <title>Красногвардейский район</title>
                                </polygon>
                                <polygon class="fil0" id="admiral" v-on:click="activeRegion('admiral')" points="130.042,153.181 130.267,148.923 134.695,143.903 136.951,143.734 142.675,148.359 139.207,150.7 138.389,154.281 136.302,154.478 135.541,152.476 ">
                                    <title>Адмиральейский район</title>
                                </polygon>
                                <polygon class="fil0" id="nevskii" v-on:click="activeRegion('nevskii')" points="145.761,150.159 149.948,148.33 150.769,150.372 154.122,149.053 156.528,144.601 164.747,144.813 166.359,164.15 163.647,165.902 163.459,168.889 167.999,171.765 172.765,171.962 172.906,174.162 170.932,177.32 167.858,175.375 165.856,179.153 ">
                                    <title>Невский район</title>
                                </polygon>
                                <polygon class="fil0" id="frunzen" v-on:click="activeRegion('frunzen')" points="159.692,171.947 145.18,150.372 143.044,148.585 141.162,149.989 148.279,176.468 ">
                                    <title>Фрунзенский район</title>
                                </polygon>
                                <polygon class="fil0" id="moscow" v-on:click="activeRegion('moscow')" points="140.539,150.421 147.714,176.75 139.974,180.762 140.426,187.202 141.612,189.632 138.93,196.341 135.763,196.794 130.9,192.383 134.519,183.222 131.239,184.126 125.019,182.204 129.769,173.156 135.311,167.614 135.198,159.471 136.471,154.93 138.586,154.732 139.545,150.841 ">
                                    <title>Московский район</title>
                                </polygon>
                                <polygon class="fil0" id="kirovskii" v-on:click="activeRegion('kirovskii')" points="123.137,149.065 129.464,149.065 129.478,153.266 129.478,153.802 135.23,152.984 136.048,154.986 134.554,159.695 134.723,167.225 129.308,172.893 120.172,175.318 128.829,163.361 123.104,163.249 117.041,156.565 120.566,156.283 124.267,152.399 ">
                                    <title>Кировский район</title>
                                </polygon>
                                <polygon class="fil0" id="krasnosel" v-on:click="activeRegion('krasnosel')" points="108.503,162.964 117.148,162.06 117.091,160.535 118.391,159.122 122.851,163.841 127.927,163.897 119.238,175.959 128.899,173.53 124.323,182.513 119.351,185.168 117.204,181.835 113.757,185.338 115.566,185.564 115.961,189.463 113.984,193.531 111.215,192.852 111.611,197.203 109.52,200.084 113.935,210.818 112.125,212.175 108.619,209.8 105.905,205.276 103.53,206.181 101.607,204.145 105.339,196.115 101.607,191.704 107.828,186.388 109.637,177.906 105.113,178.049 105.17,172.173 107.769,172.173 ">
                                    <title>Красносельский район</title>
                                </polygon>
                                <polygon class="fil0" id="petrodvor" v-on:click="activeRegion('petrodvor')" points="107.486,163.021 98.2765,164.885 97.768,163.021 95.9035,163.36 89.858,157.483 82.965,156.128 77.202,152.907 73.247,152.907 69.066,164.546 75.5635,165.959 79.123,171.1 80.8745,168.162 85.8465,169.688 86.8635,175.055 99.915,172.512 99.576,176.581 102.006,178.219 104.718,178.223 104.69,171.624 107.538,171.709 108.187,162.854 ">
                                    <title>Петродворцовый район</title>
                                </polygon>
                                <polygon class="fil0" id="lomonosov" v-on:click="activeRegion('lomonosov')" points="46.918,150.195 46.805,146.975 48.726,143.019 58.2745,146.41 64.094,145.053 72.9648,152.702 68.5938,164.377 65.2098,165.223 57.7932,163.361 55.4244,161.049 55.086,152.307 ">
                                    <title>Ломоносовский район</title>
                                </polygon>
                                <polygon class="fil0" id="pushkin" v-on:click="activeRegion('pushkin')"  points="127.959,218.848 124.906,216.699 133.614,203.467 135.602,197.176 139.026,196.708 141.955,189.531 140.597,187.035 140.25,180.902 155.003,174.547 157.997,180.988 167.998,187.259 164.664,192.287 167.094,196.582 171.839,195.395 171.839,198.955 175.569,200.932 174.778,207.543 168.732,211.441 163.986,211.724 161.896,207.656 154.946,205.339 152.291,215.622 143.646,215.791 142.403,218.278 139.465,218.504 138.957,221.329 137.431,221.159 128.617,228.843 130.651,223.928 129.125,224.041 ">
                                    <title>Пушкинский район</title>
                                </polygon>
                                <polygon class="fil0" id="pavel" v-on:click="activeRegion('pavel')" points="152.178,225.849 142.177,221.555 139.338,221.372 139.734,218.684 142.684,218.514 143.851,216.018 152.63,216.124 155.337,205.887 161.597,208.002 164.107,212.796 164.558,217.054 164.777,225.001 161.048,230.821 156.471,220.594 154.89,220.82 ">
                                    <title>Павловский район</title>
                                </polygon>
                                <polygon class="fil0" id="kolpinskii" v-on:click="activeRegion('kolpinskii')" points="173.365,174.773 177.942,176.92 187.716,185.846 196.869,185.733 201.333,193.587 197.717,196.751 193.253,196.073 190.315,199.858 190.937,202.627 185.456,203.983 182.857,200.875 176.08,200.948 172.133,198.793 172.006,194.949 167.28,196.268 164.932,192.254 168.422,187.021 158.383,180.733 155.365,174.416 160.131,172.216 166.053,179.887 167.942,175.995 171.214,178.054 ">
                                    <title>Колпинский район</title>
                                </polygon>
                            </g>
                        </svg>
                    </div>
                    <div class="col-md-6 right-text">
                        <img class="rantruck_recycling_copy" src="../images/rantruck-2.png">
                    </div>
                </div>

            </div>
        </section>
        <section class="inner_about_area page">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="col-md-6"></div>
                        <div class="col-md-6 inner_about_title" >
                            <h2 style="margin-top: 5px;">Тип мусора:</h2>
                            <select class="Shape_3">
                                <option value="Select">Выберите тип:</option>
                                <option value="Тосно">Тосно</option>
                                <option value="Любань">Любань</option>
                                <option value="Лодейное Поле">Лодейное Поле</option>
                                <option value="Гатчина">Гатчина</option>
                                <option value="Луга">Луга</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="about page">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="col-md-6"></div>
                        <div class="col-md-6">
                            <div class="section_title" style="padding-top: 0px;">
                                <h2>Способ вывоза:</h2>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="col-md-3 center-text">
                            <img src="../images/Layer39.png">
                            <br/>
                            <div class="gazel_1_5_t">
                                <label><h4>Газель (до 1.5 тонн)</h4></label>
                            </div>
                        </div>
                        <div class="col-md-3 center-text">
                            <img src="../images/Layer38.png" style="height: 58px">
                            <br/>
                            <div class="gazel_1_5_t">
                                <label><h4>Контейнер 8 м<sup>3</sup></h4></label>
                            </div>
                        </div>
                        <div class="col-md-3 center-text">
                            <img src="../images/Layer37.png" style="height: 58px">
                            <br/>
                            <div class="gazel_1_5_t">
                                <label><h4>Контейнер 20 м<sup>3</sup></h4></label>
                            </div>
                        </div>
                        <div class="col-md-3 center-text">
                            <img src="../images/Layer36.png">
                            <br/>
                            <div class="gazel_1_5_t">
                                <label><h4>Контейнер 27 м<sup>3</sup></h4></label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="inner_about_area page">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="col-md-6 inner_about_title">
                            <input id="need-loader" class="custom-radio2 hidden" type="checkbox" v-bind:value="true" v-on:input="needLoader == true ? needLoader = false : needLoader = true">
                            <label for="need-loader"> Ручная погрузка контейнера (2 чел.) от 2500 руб.</label>
                        </div>
                        <div class="col-md-6 inner_about_title">
                            <h2>Тип мусора:</h2>
                            <input >
                        </div>
                    </div>
                    <div class="col-md-12">

                    </div>
                </div>
            </div>
        </section>

    </section>
</template>



<script>
    import WorkInfo from "@/components/header/WorkInfo";
    import MainMenu from "@/components/header/MainMenu";
    import TopMenu from "@/components/header/TopMenu";

    export default {
        name: "TheHeader",
        components: {
            TopMenu,
            MainMenu,
            WorkInfo,
        },
    methods: {
        randomColor () {
            return `#${(Math.random()*0xFFFFFF<<0).toString(16)}`
        },
        activeMapElement (element) {
                element.classList.remove(this.fillClassName);
                element.classList.add(this.activeFillClassName);
                this.selectedRegion = element.id;
        },
        disableMapElement(element){
                element.classList.remove(this.activeFillClassName);
                element.classList.add(this.fillClassName);
                this.selectedRegion = '';
        },
        disableOtherMapElements() {
            let elementOld = document.getElementById(this.selectedRegion);
            elementOld.classList.remove(this.activeFillClassName);
            elementOld.classList.add(this.fillClassName);
            this.selectedRegion = '';
        },
        activeRegion(polygonId) {
            let element = document.getElementById(polygonId);

            if (this.selectedRegion !== '')
                this.disableOtherMapElements();

            if(element.classList.contains(this.fillClassName))
                this.activeMapElement(element);
            else if (element.classList.contains(this.activeFillClassName))
                this.disableMapElement(element);
        }
    },
        data() {
            return {
                garbageType: '',
                selectedRegion: '',
                fillClassName: "fil0",
                activeFillClassName: "fil-click",
                svgPalette: {
                    fill: '#FFFFFF',
                    width: '585px',
                    height: '544px'
                }
            }
        }
    }
</script>

<style scoped>

    .fil0 {
        fill:#F8F8F8;
        stroke: #000000;
        stroke-width: 1px;
        transition: 0.5s;
    }
    .fil-click {
        fill: #cce874;
        /* fill:#083d6f; */
        stroke: #083d6f;
        stroke-width: 1px;
        transition: 0.5s;
    }

    .right-img{
        right: 20px;
        position: absolute;
    }
    img{
        vertical-align: middle;;
    }
    .copyright{
        background-image: url("../images/head-bg.png");
    }
    .gazel_1_5_t {
        margin-top: 20px;
        font-size: 18px;
        font-family: "Roboto";
        color: rgb(255, 255, 255);
        line-height: 0.917;
        text-align: center;
        z-index: 128;
    }

    .z-first {
        z-index: 9998;
        position: absolute;
    }

    .rantruck_recycling_copy {
        width: 803px;
        height: 485px;
        z-index: 109;
    }
    .section_title{
        background: none;
        padding-top: 25px;
        padding-bottom: 25px;
    }
    .section_title > customP {
        margin-top: 20px;
        margin-bottom: 20px;
        width: 100%;
        font-size: 23px;
        font-family: "Bebas Neue Cyrillic";
        color: rgb(255, 255, 255);
        line-height: 0.511;
        text-align: left;
        text-shadow: 0px 3px 2.64px rgba(1, 1, 1, 0.75);
        -moz-transform: matrix( 0.6169261354827,0,0,0.6169261354827,0,0);
        -webkit-transform: matrix( 0.6169261354827,0,0,0.6169261354827,0,0);
        -ms-transform: matrix( 0.6169261354827,0,0,0.6169261354827,0,0);
    }

    .Shape_2 {
        margin: 5px 5px 5px 5px;
        border-style: solid;
        border-width: 3px;
        border-color: rgb(6, 35, 62);
        border-radius: 4px;
        background-color: rgb(8, 41, 72);
        box-shadow: 0px 1px 0px 0px rgba(255, 255, 255, 0.08);
        width: 100%;
        height: 40px;

            font-size: 14px;
            font-family: "Roboto";
            color: rgb(255, 255, 255);
            line-height: 1.571;
            text-align: left;

    }

    .Shape_3 {
        border-style: solid;
        border-width: 1px;
        border-color: rgb(6, 35, 62);
        border-radius: 5px;
        background-color: rgb(232, 233, 234);
        box-shadow: 0px 1px 0px 0px rgba(255, 255, 255, 0.08);
        width: 384px;
        height: 44px;
        z-index: 120;
    }




</style>