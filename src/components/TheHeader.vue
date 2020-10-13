<template>
    <section id="HOME">
        <section class="copyright">
            <MainMenu/>
            <div class="container" >
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
                        <div class="hidden-sm hidden-xs">
                            <TopMenu/>
                        </div>
                        <div class="section_title" style="padding-bottom: 0px;">
                            <customP>Вывоз мусора в Санкт-Петербурге и Ленинградской области...</customP>
                        </div>

                        <div class="col-md-pull-12" style="margin-bottom: 15px; margin-top: 15px;">
                            <div class="col-md-6" style="padding-left: 0px; padding-right: 0px; padding-top: 10px;">
                                <h4 style="font-size: 150%; margin-top: 0px; margin-bottom: 0px;">Ленинградская область:</h4>
                            </div>
                            <div class="col-md-6">
                                <select v-model="selectedRegion" class="Shape_2">
                                    <option value="">Выберите место:</option>
                                    <option value="Тосно">Тосно</option>
                                    <option value="Любань">Любань</option>
                                    <option value="Лодейное Поле">Лодейное Поле</option>
                                    <option value="Гатчина">Гатчина</option>
                                    <option value="Луга">Луга</option>
                                </select>
                            </div>
                        </div>
                        <hr/>
                        <div class="hidden-lg hidden-md showDropbox">
                            <div class="col-md-pull-12" style="margin-bottom: 15px; margin-top: 15px;">
                                <div class="col-md-6" style="padding-left: 0px; padding-right: 0px; padding-top: 10px;">
                                    <h4 style="font-size: 150%; margin-top: 0px; margin-bottom: 0px;">Санкт-Петербург:</h4>
                                </div>
                                <div class="col-md-6">
                                    <select class="Shape_2">
                                        <option value="Select">Выберите место:</option>
                                        <option value="Тосно">Тосно</option>
                                        <option value="Любань">Любань</option>
                                        <option value="Лодейное Поле">Лодейное Поле</option>
                                        <option value="Гатчина">Гатчина</option>
                                        <option value="Луга">Луга</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="hidden-sm hidden-xs hiddenMap">
                            <div class="col-md-12" style="margin-bottom: 0px; margin-top: 15px;">
                                <div class="col-md-6" style="padding-left: 0px; padding-right: 0px; padding-top: 10px;">
                                    <h4 style="font-size: 150%; margin-top: 0px; margin-bottom: 0px;">Санкт-Петербург:</h4>
                                </div>
                                <div class="col-md-6">
                                    <h5 style="margin-top: 15px;">Выберите район на карте</h5>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <br/>
                                <MapBackground/>
                                <svg class="z-first"
                                     style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"
                                     viewBox="10 50 200 287">
                                    <defs>
                                    </defs>
                                    <g>
                                        <metadata/>
                                        <svg x="0" y="0">
                                            <path class="fil0" id="kurort" v-on:click="activeRegion('kurort')" d="M102.909 124.714l-4.633 -3.277 -2.373 0 0 -2.5425c0,0 -6.2715,-3.39 -6.9495,-4.0115 -0.678,-0.6215 -0.678,-0.6215 -0.678,-0.6215l-0.339 -4.8025 -3.3335 -2.7685 -2.2035 -5.4805 3.6725 -2.938 0.113 -6.667 -3.1075 -5.763 -7.797 -5.0285 -1.921 0.9605 -10.057 -5.311 -27.6333 -5.3229 -5.7681 1.4703 -1.131 2.6013 -4.8633 1.8096 -1.8096 -2.4882 -4.6371 0.5655 -3.8454 -3.5061 8.7087 -8.1432 2.6013 0 2.7144 -3.6192 4.1847 1.4703 4.2978 3.1668 1.0179 -2.7144 7.2384 -3.1668 10.8576 2.4882 -2.1489 -2.3751 2.7144 -1.4703 4.524 1.3572 9.1611 8.5956 5.2026 2.0358 3.9585 -0.3393 3.7323 4.9764 9.6135 3.1668 7.5777 5.5419 4.0716 0.2262 14.1375 4.7502 4.8633 2.8275 -3.0537 4.7502 -6.3336 -2.6013 0 2.7144 -8.2563 4.8633 7.4646 7.4646 -1.3572 9.2742 -7.2384 -0.4524 -0.9595 8.3339z">
                                                <title>Курортный район</title>
                                            </path>
                                        </svg>
                                        <svg x="0" y="0">
                                            <polygon class="fil0" id="prima" v-on:click="activeRegion('prima')" points="88.4455,123.075 88.362,114.829 95.6094,119.172 95.6376,121.851 98.232,121.766 103.082,125.179 104.126,116.606 111.31,117.142 112.247,112.037 119.438,108.71 125.248,110.599 132.629,106.295 140.878,130.137 139.578,131.494 123.702,131.889 119.803,130.081 108.899,129.459 103.079,126.522 96.8075,126.691 ">
                                                <title>Приморский район</title>
                                            </polygon>
                                        </svg>
                                        <svg x="0" y="0">
                                            <polygon class="fil0" id="viborg" v-on:click="activeRegion('viborg')" points="125.51,92.6215 122.968,90.5629 119.785,95.5837 113.77,93.087 113.714,95.2302 105.508,100.25 112.755,107.215 112.902,107.398 112.244,111.639 119.417,108.32 125.163,110.233 132.89,105.749 141.124,129.944 141.265,130.226 139.771,131.749 141.096,133.3 141.604,139.025 143.155,138.827 143.747,129.493 144.593,127.773 145.115,115.278 148.674,109.572 146.358,100.588 138.448,99.6275 131.951,95.277 132.177,92 128.56,90.644 ">
                                                <title>Выборгский район</title>
                                            </polygon>
                                        </svg>
                                        <svg x="0" y="0">
                                            <polygon class="fil0" id="kron" v-on:click="activeRegion('kron')" points="66.6365,135.731 66.354,131.494 67.823,130.194 66.241,126.409 59.913,121.38 59.687,118.668 50.9295,118.894 44.2625,115.334 44.206,118.442 50.873,123.923 51.212,126.635 50.534,128.838 51.099,130.42 53.924,130.363 54.037,126.07 56.3535,125.052 57.7095,128.951 59.913,129.064 64.0375,132.115 ">
                                                <title>Кронштадтский район</title>
                                            </polygon>
                                        </svg>
                                        <svg x="0" y="0">
                                            <polygon class="fil0" id="petr" v-on:click="activeRegion('petr')" points="124.097,132.624 139.239,132.172 140.532,133.554 141.096,139.307 137.627,140.378 124.43,134.992 ">
                                                <title>Петроградский район</title>
                                            </polygon>
                                        </svg>
                                        <svg x="0" y="0">
                                            <polygon class="fil0" id="vaska" v-on:click="activeRegion('vaska')" points="124.402,135.641 137.317,140.942 136.922,143.283 134.441,143.424 130.143,148.557 124.549,145.223 122.572,140.082 ">
                                                <title>Василеостровский район</title>
                                            </polygon>
                                        </svg>
                                        <svg x="0" y="0">
                                            <polygon class="fil0" id="center" v-on:click="activeRegion('center')" points="137.43,143.452 137.768,140.914 147.695,137.812 150.515,138.348 148.992,145.962 149.753,147.88 145.354,149.825 ">
                                                <title>Центральный район</title>
                                            </polygon>
                                        </svg>
                                        <svg x="0" y="0">
                                            <polygon class="fil0" id="kalin" v-on:click="activeRegion('kalin')" points="149.161,109.951 152.743,111.445 155.704,114.632 154.688,117.339 155.083,131.608 150.712,137.643 147.836,137.248 143.578,138.574 144.142,129.691 145.185,127.829 145.619,115.61 ">
                                                <title>Калининский район</title>
                                            </polygon>
                                        </svg>
                                        <svg x="0" y="0">
                                            <polygon class="fil0" id="krasnogvar" v-on:click="activeRegion('krasnogvar')" points="156.155,114.688 158.636,114.716 164.22,122.641 166.166,130.283 169.86,127.858 172.574,133.076 170.709,134.432 169.071,132.963 164.834,144.319 156.019,144.206 153.816,148.557 150.935,149.63 149.635,145.675 151.274,137.822 155.68,131.663 155,117.397 ">
                                                <title>Красногвардейский район</title>
                                            </polygon>
                                        </svg>
                                        <svg x="0" y="0">
                                            <polygon class="fil0" id="admiral" v-on:click="activeRegion('admiral')" points="130.042,153.181 130.267,148.923 134.695,143.903 136.951,143.734 142.675,148.359 139.207,150.7 138.389,154.281 136.302,154.478 135.541,152.476 ">
                                                <title>Адмиралтейский район</title>
                                            </polygon>
                                        </svg>
                                        <svg x="0" y="0">
                                            <polygon class="fil0" id="nevskii" v-on:click="activeRegion('nevskii')" points="145.761,150.159 149.948,148.33 150.769,150.372 154.122,149.053 156.528,144.601 164.747,144.813 166.359,164.15 163.647,165.902 163.459,168.889 167.999,171.765 172.765,171.962 172.906,174.162 170.932,177.32 167.858,175.375 165.856,179.153 ">
                                                <title>Невский район</title>
                                            </polygon>
                                        </svg>
                                        <svg x="0" y="0">
                                            <polygon class="fil0" id="frunzen" v-on:click="activeRegion('frunzen')" points="159.692,171.947 145.18,150.372 143.044,148.585 141.162,149.989 148.279,176.468 ">
                                                <title>Фрунзенский район</title>
                                            </polygon>
                                        </svg>
                                        <svg x="0" y="0">
                                            <polygon class="fil0" id="moscow" v-on:click="activeRegion('moscow')" points="140.539,150.421 147.714,176.75 139.974,180.762 140.426,187.202 141.612,189.632 138.93,196.341 135.763,196.794 130.9,192.383 134.519,183.222 131.239,184.126 125.019,182.204 129.769,173.156 135.311,167.614 135.198,159.471 136.471,154.93 138.586,154.732 139.545,150.841 ">
                                                <title>Московский район</title>
                                            </polygon>
                                        </svg>
                                        <svg x="0" y="0">
                                            <polygon class="fil0" id="kirovskii" v-on:click="activeRegion('kirovskii')" points="123.137,149.065 129.464,149.065 129.478,153.266 129.478,153.802 135.23,152.984 136.048,154.986 134.554,159.695 134.723,167.225 129.308,172.893 120.172,175.318 128.829,163.361 123.104,163.249 117.041,156.565 120.566,156.283 124.267,152.399 ">
                                                <title>Кировский район</title>
                                            </polygon>
                                        </svg>
                                        <svg x="0" y="0">
                                            <polygon class="fil0" id="krasnosel" v-on:click="activeRegion('krasnosel')" points="108.503,162.964 117.148,162.06 117.091,160.535 118.391,159.122 122.851,163.841 127.927,163.897 119.238,175.959 128.899,173.53 124.323,182.513 119.351,185.168 117.204,181.835 113.757,185.338 115.566,185.564 115.961,189.463 113.984,193.531 111.215,192.852 111.611,197.203 109.52,200.084 113.935,210.818 112.125,212.175 108.619,209.8 105.905,205.276 103.53,206.181 101.607,204.145 105.339,196.115 101.607,191.704 107.828,186.388 109.637,177.906 105.113,178.049 105.17,172.173 107.769,172.173 ">
                                                <title>Красносельский район</title>
                                            </polygon>
                                        </svg>
                                        <svg x="0" y="0">
                                            <polygon class="fil0" id="petrodvor" v-on:click="activeRegion('petrodvor')" points="107.486,163.021 98.2765,164.885 97.768,163.021 95.9035,163.36 89.858,157.483 82.965,156.128 77.202,152.907 73.247,152.907 69.066,164.546 75.5635,165.959 79.123,171.1 80.8745,168.162 85.8465,169.688 86.8635,175.055 99.915,172.512 99.576,176.581 102.006,178.219 104.718,178.223 104.69,171.624 107.538,171.709 108.187,162.854 ">
                                                <title>Петродворцовый район</title>
                                            </polygon>
                                        </svg>
                                        <svg x="0" y="0">
                                            <polygon class="fil0" id="lomonosov" v-on:click="activeRegion('lomonosov')" points="46.918,150.195 46.805,146.975 48.726,143.019 58.2745,146.41 64.094,145.053 72.9648,152.702 68.5938,164.377 65.2098,165.223 57.7932,163.361 55.4244,161.049 55.086,152.307 ">
                                                <title>Ломоносовский район</title>
                                            </polygon>
                                        </svg>
                                        <svg x="0" y="0">
                                            <polygon class="fil0" id="pushkin" v-on:click="activeRegion('pushkin')"  points="127.959,218.848 124.906,216.699 133.614,203.467 135.602,197.176 139.026,196.708 141.955,189.531 140.597,187.035 140.25,180.902 155.003,174.547 157.997,180.988 167.998,187.259 164.664,192.287 167.094,196.582 171.839,195.395 171.839,198.955 175.569,200.932 174.778,207.543 168.732,211.441 163.986,211.724 161.896,207.656 154.946,205.339 152.291,215.622 143.646,215.791 142.403,218.278 139.465,218.504 138.957,221.329 137.431,221.159 128.617,228.843 130.651,223.928 129.125,224.041 ">
                                                <title>Пушкинский район</title>
                                            </polygon>
                                        </svg>
                                        <svg x="0" y="0">
                                            <polygon class="fil0" id="pavel" v-on:click="activeRegion('pavel')" points="152.178,225.849 142.177,221.555 139.338,221.372 139.734,218.684 142.684,218.514 143.851,216.018 152.63,216.124 155.337,205.887 161.597,208.002 164.107,212.796 164.558,217.054 164.777,225.001 161.048,230.821 156.471,220.594 154.89,220.82 ">
                                                <title>Павловский район</title>
                                            </polygon>
                                        </svg>
                                        <svg x="0" y="0">
                                            <polygon class="fil0" id="kolpinskii" v-on:click="activeRegion('kolpinskii')" points="173.365,174.773 177.942,176.92 187.716,185.846 196.869,185.733 201.333,193.587 197.717,196.751 193.253,196.073 190.315,199.858 190.937,202.627 185.456,203.983 182.857,200.875 176.08,200.948 172.133,198.793 172.006,194.949 167.28,196.268 164.932,192.254 168.422,187.021 158.383,180.733 155.365,174.416 160.131,172.216 166.053,179.887 167.942,175.995 171.214,178.054 ">
                                                <title>Колпинский район</title>
                                            </polygon>
                                        </svg>

                                        <svg x="0" y="-2">
                                            <path class="fil-click fil-hidden" id="kurort-on" v-on:click="activeRegion('kurort')" d="M102.909 124.714l-4.633 -3.277 -2.373 0 0 -2.5425c0,0 -6.2715,-3.39 -6.9495,-4.0115 -0.678,-0.6215 -0.678,-0.6215 -0.678,-0.6215l-0.339 -4.8025 -3.3335 -2.7685 -2.2035 -5.4805 3.6725 -2.938 0.113 -6.667 -3.1075 -5.763 -7.797 -5.0285 -1.921 0.9605 -10.057 -5.311 -27.6333 -5.3229 -5.7681 1.4703 -1.131 2.6013 -4.8633 1.8096 -1.8096 -2.4882 -4.6371 0.5655 -3.8454 -3.5061 8.7087 -8.1432 2.6013 0 2.7144 -3.6192 4.1847 1.4703 4.2978 3.1668 1.0179 -2.7144 7.2384 -3.1668 10.8576 2.4882 -2.1489 -2.3751 2.7144 -1.4703 4.524 1.3572 9.1611 8.5956 5.2026 2.0358 3.9585 -0.3393 3.7323 4.9764 9.6135 3.1668 7.5777 5.5419 4.0716 0.2262 14.1375 4.7502 4.8633 2.8275 -3.0537 4.7502 -6.3336 -2.6013 0 2.7144 -8.2563 4.8633 7.4646 7.4646 -1.3572 9.2742 -7.2384 -0.4524 -0.9595 8.3339z">
                                                <title>Курортный район</title>
                                            </path>
                                        </svg>
                                        <svg x="0" y="-2">
                                            <polygon class="fil-click fil-hidden" id="prima-on" v-on:click="activeRegion('prima')" points="88.4455,123.075 88.362,114.829 95.6094,119.172 95.6376,121.851 98.232,121.766 103.082,125.179 104.126,116.606 111.31,117.142 112.247,112.037 119.438,108.71 125.248,110.599 132.629,106.295 140.878,130.137 139.578,131.494 123.702,131.889 119.803,130.081 108.899,129.459 103.079,126.522 96.8075,126.691 ">
                                                <title>Приморский район</title>
                                            </polygon>
                                        </svg>
                                        <svg x="0" y="-2">
                                            <polygon class="fil-click fil-hidden" id="viborg-on" v-on:click="activeRegion('viborg')" points="125.51,92.6215 122.968,90.5629 119.785,95.5837 113.77,93.087 113.714,95.2302 105.508,100.25 112.755,107.215 112.902,107.398 112.244,111.639 119.417,108.32 125.163,110.233 132.89,105.749 141.124,129.944 141.265,130.226 139.771,131.749 141.096,133.3 141.604,139.025 143.155,138.827 143.747,129.493 144.593,127.773 145.115,115.278 148.674,109.572 146.358,100.588 138.448,99.6275 131.951,95.277 132.177,92 128.56,90.644 ">
                                                <title>Выборгский район</title>
                                            </polygon>
                                        </svg>
                                        <svg x="0" y="0">
                                            <polygon class="fil-click fil-hidden" id="kron-on" v-on:click="activeRegion('kron')" points="66.6365,135.731 66.354,131.494 67.823,130.194 66.241,126.409 59.913,121.38 59.687,118.668 50.9295,118.894 44.2625,115.334 44.206,118.442 50.873,123.923 51.212,126.635 50.534,128.838 51.099,130.42 53.924,130.363 54.037,126.07 56.3535,125.052 57.7095,128.951 59.913,129.064 64.0375,132.115 ">
                                                <title>Кронштадтский район</title>
                                            </polygon>
                                        </svg>
                                        <svg x="0" y="-2">
                                            <polygon class="fil-click fil-hidden" id="petr-on" v-on:click="activeRegion('petr')" points="124.097,132.624 139.239,132.172 140.532,133.554 141.096,139.307 137.627,140.378 124.43,134.992 ">
                                                <title>Петроградский район</title>
                                            </polygon>
                                        </svg>
                                        <svg x="0" y="-2">
                                            <polygon class="fil-click fil-hidden" id="vaska-on" v-on:click="activeRegion('vaska')" points="124.402,135.641 137.317,140.942 136.922,143.283 134.441,143.424 130.143,148.557 124.549,145.223 122.572,140.082 ">
                                                <title>Василеостровский район</title>
                                            </polygon>
                                        </svg>
                                        <svg x="0" y="-2">
                                            <polygon class="fil-click fil-hidden" id="center-on" v-on:click="activeRegion('center')" points="137.43,143.452 137.768,140.914 147.695,137.812 150.515,138.348 148.992,145.962 149.753,147.88 145.354,149.825 ">
                                                <title>Центральный район</title>
                                            </polygon>
                                        </svg>
                                        <svg x="0" y="-2">
                                            <polygon class="fil-click fil-hidden" id="kalin-on" v-on:click="activeRegion('kalin')" points="149.161,109.951 152.743,111.445 155.704,114.632 154.688,117.339 155.083,131.608 150.712,137.643 147.836,137.248 143.578,138.574 144.142,129.691 145.185,127.829 145.619,115.61 ">
                                                <title>Калининский район</title>
                                            </polygon>
                                        </svg>
                                        <svg x="0" y="-2">
                                            <polygon class="fil-click fil-hidden" id="krasnogvar-on" v-on:click="activeRegion('krasnogvar')" points="156.155,114.688 158.636,114.716 164.22,122.641 166.166,130.283 169.86,127.858 172.574,133.076 170.709,134.432 169.071,132.963 164.834,144.319 156.019,144.206 153.816,148.557 150.935,149.63 149.635,145.675 151.274,137.822 155.68,131.663 155,117.397 ">
                                                <title>Красногвардейский район</title>
                                            </polygon>
                                        </svg>
                                        <svg x="0" y="-2">
                                            <polygon class="fil-click fil-hidden" id="admiral-on" v-on:click="activeRegion('admiral')" points="130.042,153.181 130.267,148.923 134.695,143.903 136.951,143.734 142.675,148.359 139.207,150.7 138.389,154.281 136.302,154.478 135.541,152.476 ">
                                                <title>Адмиралтейский район</title>
                                            </polygon>
                                        </svg>
                                        <svg x="0" y="-2">
                                            <polygon class="fil-click fil-hidden" id="nevskii-on" v-on:click="activeRegion('nevskii')" points="145.761,150.159 149.948,148.33 150.769,150.372 154.122,149.053 156.528,144.601 164.747,144.813 166.359,164.15 163.647,165.902 163.459,168.889 167.999,171.765 172.765,171.962 172.906,174.162 170.932,177.32 167.858,175.375 165.856,179.153 ">
                                                <title>Невский район</title>
                                            </polygon>
                                        </svg>
                                        <svg x="0" y="-2">
                                            <polygon class="fil-click fil-hidden" id="frunzen-on" v-on:click="activeRegion('frunzen')" points="159.692,171.947 145.18,150.372 143.044,148.585 141.162,149.989 148.279,176.468 ">
                                                <title>Фрунзенский район</title>
                                            </polygon>
                                        </svg>
                                        <svg x="0" y="-2">
                                            <polygon class="fil-click fil-hidden" id="moscow-on" v-on:click="activeRegion('moscow')" points="140.539,150.421 147.714,176.75 139.974,180.762 140.426,187.202 141.612,189.632 138.93,196.341 135.763,196.794 130.9,192.383 134.519,183.222 131.239,184.126 125.019,182.204 129.769,173.156 135.311,167.614 135.198,159.471 136.471,154.93 138.586,154.732 139.545,150.841 ">
                                                <title>Московский район</title>
                                            </polygon>
                                        </svg>
                                        <svg x="0" y="-2">
                                            <polygon class="fil-click fil-hidden" id="kirovskii-on" v-on:click="activeRegion('kirovskii')" points="123.137,149.065 129.464,149.065 129.478,153.266 129.478,153.802 135.23,152.984 136.048,154.986 134.554,159.695 134.723,167.225 129.308,172.893 120.172,175.318 128.829,163.361 123.104,163.249 117.041,156.565 120.566,156.283 124.267,152.399 ">
                                                <title>Кировский район</title>
                                            </polygon>
                                        </svg>
                                        <svg x="0" y="-2">
                                            <polygon class="fil-click fil-hidden" id="krasnosel-on" v-on:click="activeRegion('krasnosel')" points="108.503,162.964 117.148,162.06 117.091,160.535 118.391,159.122 122.851,163.841 127.927,163.897 119.238,175.959 128.899,173.53 124.323,182.513 119.351,185.168 117.204,181.835 113.757,185.338 115.566,185.564 115.961,189.463 113.984,193.531 111.215,192.852 111.611,197.203 109.52,200.084 113.935,210.818 112.125,212.175 108.619,209.8 105.905,205.276 103.53,206.181 101.607,204.145 105.339,196.115 101.607,191.704 107.828,186.388 109.637,177.906 105.113,178.049 105.17,172.173 107.769,172.173 ">
                                                <title>Красносельский район</title>
                                            </polygon>
                                        </svg>
                                        <svg x="0" y="-2">
                                            <polygon class="fil-click fil-hidden" id="petrodvor-on" v-on:click="activeRegion('petrodvor')" points="107.486,163.021 98.2765,164.885 97.768,163.021 95.9035,163.36 89.858,157.483 82.965,156.128 77.202,152.907 73.247,152.907 69.066,164.546 75.5635,165.959 79.123,171.1 80.8745,168.162 85.8465,169.688 86.8635,175.055 99.915,172.512 99.576,176.581 102.006,178.219 104.718,178.223 104.69,171.624 107.538,171.709 108.187,162.854 ">
                                                <title>Петродворцовый район</title>
                                            </polygon>
                                        </svg>
                                        <svg x="0" y="-2">
                                            <polygon class="fil-click fil-hidden" id="lomonosov-on" v-on:click="activeRegion('lomonosov')" points="46.918,150.195 46.805,146.975 48.726,143.019 58.2745,146.41 64.094,145.053 72.9648,152.702 68.5938,164.377 65.2098,165.223 57.7932,163.361 55.4244,161.049 55.086,152.307 ">
                                                <title>Ломоносовский район</title>
                                            </polygon>
                                        </svg>
                                        <svg x="0" y="-2">
                                            <polygon class="fil-click fil-hidden" id="pushkin-on" v-on:click="activeRegion('pushkin')"  points="127.959,218.848 124.906,216.699 133.614,203.467 135.602,197.176 139.026,196.708 141.955,189.531 140.597,187.035 140.25,180.902 155.003,174.547 157.997,180.988 167.998,187.259 164.664,192.287 167.094,196.582 171.839,195.395 171.839,198.955 175.569,200.932 174.778,207.543 168.732,211.441 163.986,211.724 161.896,207.656 154.946,205.339 152.291,215.622 143.646,215.791 142.403,218.278 139.465,218.504 138.957,221.329 137.431,221.159 128.617,228.843 130.651,223.928 129.125,224.041 ">
                                                <title>Пушкинский район</title>
                                            </polygon>
                                        </svg>
                                        <svg x="0" y="-2">
                                            <polygon class="fil-click fil-hidden" id="pavel-on" v-on:click="activeRegion('pavel')" points="152.178,225.849 142.177,221.555 139.338,221.372 139.734,218.684 142.684,218.514 143.851,216.018 152.63,216.124 155.337,205.887 161.597,208.002 164.107,212.796 164.558,217.054 164.777,225.001 161.048,230.821 156.471,220.594 154.89,220.82 ">
                                                <title>Павловский район</title>
                                            </polygon>
                                        </svg>
                                        <svg x="0" y="-2">
                                            <polygon class="fil-click fil-hidden" id="kolpinskii-on" v-on:click="activeRegion('kolpinskii')" points="173.365,174.773 177.942,176.92 187.716,185.846 196.869,185.733 201.333,193.587 197.717,196.751 193.253,196.073 190.315,199.858 190.937,202.627 185.456,203.983 182.857,200.875 176.08,200.948 172.133,198.793 172.006,194.949 167.28,196.268 164.932,192.254 168.422,187.021 158.383,180.733 155.365,174.416 160.131,172.216 166.053,179.887 167.942,175.995 171.214,178.054 ">
                                                <title>Колпинский район</title>
                                            </polygon>
                                        </svg>
                                    </g>
                                </svg>

                                <div class="mapLabel fil-hidden" id="kurort-label" style="left: 270px; top: 40px;"><p>Курортный район</p></div>
                                <div class="mapLabel fil-hidden" id="prima-label" style="left: 340px; top: 90px;"><p>Приморский район</p></div>
                                <div class="mapLabel fil-hidden" id="viborg-label" style="left: 350px; top: 70px;"><p>Выборгский район</p></div>
                                <div class="mapLabel fil-hidden" id="kron-label" style="left: -45px; top: 130px;"><p>Кронштадтский район</p></div>
                                <div class="mapLabel fil-hidden" id="petr-label" style="left: 350px; top: 130px;"><p>Петроградский район</p></div>
                                <div class="mapLabel fil-hidden" id="vaska-label" style="left: 380px; top: 150px;"><p>Василеостровский район</p></div>
                                <div class="mapLabel fil-hidden" id="center-label" style="left: 390px; top: 160px;"><p>Центральный район</p></div>
                                <div class="mapLabel fil-hidden" id="krasnogvar-label" style="left: 380px; top: 100px;"><p>Красногвардейский район</p></div>
                                <div class="mapLabel fil-hidden" id="kalin-label" style="left: 370px; top: 95px;"><p>Калининский район</p></div>
                                <div class="mapLabel fil-hidden" id="admiral-label" style="left: 360px; top: 140px;"><p>Адмиралтейский район</p></div>
                                <div class="mapLabel fil-hidden" id="nevskii-label" style="left: 410px; top: 180px;"><p>Невский район</p></div>
                                <div class="mapLabel fil-hidden" id="frunzen-label" style="left: 420px; top: 210px;"><p>Фрунзенский район</p></div>
                                <div class="mapLabel fil-hidden" id="moscow-label" style="left: 410px; top: 230px;"><p>Московский район</p></div>
                                <div class="mapLabel fil-hidden" id="kirovskii-label" style="left: 400px; top: 240px;"><p>Кировский район</p></div>
                                <div class="mapLabel fil-hidden" id="krasnosel-label" style="left: 390px; top: 260px;"><p>Красносельский район</p></div>
                                <div class="mapLabel fil-hidden" id="petrodvor-label" style="left: -10px; top: 340px;"><p>Петродворцовый район</p></div>
                                <div class="mapLabel fil-hidden" id="lomonosov-label" style="left: -20px; top: 320px;"><p>Ломоносовский район</p></div>
                                <div class="mapLabel fil-hidden" id="pushkin-label" style="left: 410px; top: 280px;"><p>Пушкинский район</p></div>
                                <div class="mapLabel fil-hidden" id="pavel-label" style="left: 420px; top: 290px;"><p>Павловский район</p></div>
                                <div class="mapLabel fil-hidden" id="kolpinskii-label" style="left: 430px; top: 270px;"><p>Колпинский район</p></div>

                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 right-text fixdiv">
                        <img class="rantruck_recycling_copy hidden-xs hidden-sm resize" src="../images/rantruck-2.png">
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
                            <h2 style="margin-top: 5px;">Тип мусора</h2>
                            <select v-model="selectedTrashType" class="Shape_3">
                                <option value="Select">Выберите тип:</option>
                                <option value="construction">Строительный</option>
                                <option value="household ">Бытовой</option>
                                <option value="bulky">Крупногабаритный</option>
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
                                <h2>Способ вывоза</h2>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div v-on:click="selectCarType('gazel')" class="col-md-3 center-text carIcon-z-index">
                            <div id="gazel-div" class="gazel-off carTypeLabel">
                                <input class="carInput" type="radio" id="gazel-radio" value="gazel" v-model="selectedCarType">
                                <label for="gazel-radio"><h4>Газель (до 1.5 тонн)</h4></label>
                            </div>
                        </div>
                        <div v-on:click="selectCarType('baw')" class="col-md-3 center-text carIcon-z-index">
                            <div id="baw-div" class="baw-off carTypeLabel">
                                <input class="carInput" type="radio" id="baw-radio" value="baw" v-model="selectedCarType">
                                <label for="baw-radio"><h4>BAW Fenix 8-12 м<sup>3</sup></h4></label>
                            </div>
                        </div>
                        <div v-on:click="selectCarType('docker20')" class="col-md-3 center-text carIcon-z-index">
                            <div id="docker20-div" class="docker20-off carTypeLabel">
                                <input class="carInput" type="radio" id="docker20-radio" value="docker20" v-model="selectedCarType">
                                <label for="docker20-radio"><h4>Контейнер 20 м<sup>3</sup></h4></label>
                            </div>
                        </div>
                        <div v-on:click="selectCarType('docker27')" class="col-md-3 center-text carIcon-z-index">
                            <div id="docker27-div" class="docker27-off carTypeLabel">
                                <input class="carInput" type="radio" id="docker27-radio" value="docker27" v-model="selectedCarType">
                                <label for="docker27-radio"><h4>Контейнер 27 м<sup>3</sup></h4></label>
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
                            <input class="custom-checkbox" type="checkbox" id="need-loader" v-model="needLoaders">
                            <label class="label-custom" for="need-loader"> Ручная погрузка контейнера (2 чел.) от 2500 руб.</label>
                            <GreenButton
                                    custom-text="Оставить заявку"
                                    custom-style="width: 250px; height: 55px;"
                                    user-message="12-3-456"
                            />
                        </div>
                        <div class="col-md-6 inner_about_title">
                            <h2>Количество мусора</h2>
                            <h3 style="margin-bottom: 25px;">{{getLabelForSlider()}}: <green-p>{{ itemCount }}</green-p></h3>
                            <br/>
                            <input type="range" min="1" :max="config.MaxSliderSize" step="1" v-model="itemCount">
                        </div>
                    </div>
                    <div class="col-md-12 center-text">
                        <h3 style="margin-bottom: 25px; font-size: 22px;">
                            Общая стоимость вывоза мусора: Контейнеров - <green-p>{{ itemCount }}</green-p> |
                            Стоимость каждого - <green-p>{{getSelectedCarPrice()}}</green-p> |
                            Всего - <green-p>{{getFullPrice()}}</green-p> рублей</h3>
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
    import MapBackground from "@/components/map/MapBackground";
    import json from "@/assets/price.json";
    import GreenButton from "@/components/Buttons/GreenButton";

    export default {
        name: "TheHeader",
        components: {
            GreenButton,
            MapBackground,
            TopMenu,
            MainMenu,
            WorkInfo,
        },
    methods: {
            getLabelForSlider() {
                switch (this.selectedCarType) {
                    case "":
                        return "Контейнеров";
                    case "gazel":
                        return "Мусоровозов";
                    case "baw":
                        return "Мусоровозов";
                    case "docker20":
                        return "Контейнеров";
                    case "docker27":
                        return "Контейнеров";
                    default:
                        return "Контейнеров";
                }
            },
        selectCarType (elementId) {
            let element = document.getElementById(elementId + "-div");
            let elementRadio = document.getElementById(elementId + "-radio");

            if (elementRadio.checked) {
                element.classList.replace(elementId + "-on", elementId + "-off");
                elementRadio.checked = false;
                this.selectedCarType = "";
            } else if (document.getElementById(this.selectedCarType + "-radio") != null) {
                let element2 = document.getElementById(this.selectedCarType + "-div");
                let elementRadio2 = document.getElementById(this.selectedCarType + "-radio");

                element2.classList.replace(this.selectedCarType + "-on", this.selectedCarType + "-off");
                elementRadio2.checked = false;
                this.selectedCarType = "";

                element.classList.replace(elementId + "-off", elementId + "-on");
                this.selectedCarType = elementRadio.value;
                elementRadio.checked = true;
            } else {
                element.classList.replace(elementId + "-off", elementId + "-on");
                this.selectedCarType = elementRadio.value;
                elementRadio.checked = true;
            }
        },

        activeMapElement (element) {
            element.classList.remove(this.fillClassName);
            element.classList.add(this.hiddenFillClassName);
            this.selectedRegion = element.id;

            let elementOn = document.getElementById(element.id + "-on")
            elementOn.classList.remove(this.hiddenFillClassName);

            let elementLabel = document.getElementById(element.id + "-label")
            elementLabel.classList.remove(this.hiddenFillClassName);
        },
        disableMapElement(element){
            element.classList.remove(this.activeFillClassName);
            element.classList.add(this.fillClassName);
            this.selectedRegion = '';

            let elementOn = document.getElementById(element.id + "-on")
            elementOn.classList.add(this.hiddenFillClassName);

            let elementLabel = document.getElementById(element.id + "-label")
            elementLabel.classList.add(this.hiddenFillClassName);
        },
        disableOtherMapElements() {
            let elementOld = document.getElementById(this.selectedRegion);
            elementOld.classList.remove(this.hiddenFillClassName);
            elementOld.classList.add(this.fillClassName);
            this.selectedRegion = '';

            let elementOn = document.getElementById(elementOld.id + "-on")
            elementOn.classList.add(this.hiddenFillClassName);

            let elementLabel = document.getElementById(elementOld.id + "-label")
            elementLabel.classList.add(this.hiddenFillClassName);
        },
        activeRegion(polygonId) {
            let element = document.getElementById(polygonId);

            if (this.selectedRegion !== '' && this.selectedRegion !== polygonId)
                this.disableOtherMapElements();
            else if (this.selectedRegion === polygonId)
            {
                this.disableOtherMapElements();
                return;
            }

            if(element.classList.contains(this.fillClassName))
                this.activeMapElement(element);
            else if (element.classList.contains(this.activeFillClassName))
                this.disableMapElement(element);
        },


        getSelectedCarPrice(){
            if (this.selectedCarType == ""){
                this.selectedCarPrice = "0";
            }
            else {
                if (this.needLoaders){
                    let carPrise = parseInt(this.config.cars[this.selectedCarType].price1, 10);
                    let loaderPrise = parseInt(this.config.cars[this.selectedCarType].loaderPrice, 10);
                    let fullPrice = carPrise + loaderPrise;

                    this.selectedCarPrice =  fullPrice;
                }
                else
                    this.selectedCarPrice = this.config.cars[this.selectedCarType].price1
            }
            return this.selectedCarPrice;
        },
        getFullPrice(){
            return this.selectedCarPrice * this.itemCount;
        }
    },
        data() {
            return {
                config : json,

                // calc props
                selectedCarType: "",
                selectedCarPrice: "0",
                selectedTrashType: 'Select',
                selectedRegion: '',
                needLoaders: false,
                itemCount: 1,

                // system props
                    // map classes
                    fillClassName: "fil0",
                    activeFillClassName: "fil-click",
                    hiddenFillClassName: "fil-hidden",

                    // other
                    carIconCssClass: "carIcon",
                    carIconDisableCssClass: "carIconDisable",
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

    .gazel-off{
        padding: 100px 10px 25px;
        background-image: url("../images/carIcons/gazel-off.png");
        background-size: 80%;
        background-position: top;
        background-repeat: no-repeat;
        -webkit-transition: all 0.5s;
        -moz-transition: all 0.5s;
        -o-transition: all 0.5s;
        transition: all 0.5s;
    }
    .gazel-on{
        padding: 100px 10px 25px;
        background-image: url("../images/carIcons/gazel-on.png");
        background-size: 80%;
        background-position: top;
        background-repeat: no-repeat;
        -webkit-transition: all 0.5s;
        -moz-transition: all 0.5s;
        -o-transition: all 0.5s;
        transition: all 0.5s;
    }

    .baw-off{
        padding: 100px 10px 25px;
        background-image: url("../images/carIcons/baw-off.png");
        background-size: 80%;
        background-position: top;
        background-repeat: no-repeat;
        -webkit-transition: all 0.5s;
        -moz-transition: all 0.5s;
        -o-transition: all 0.5s;
        transition: all 0.5s;
    }
    .baw-on{
        padding: 100px 10px 25px;
        background-image: url("../images/carIcons/baw-on.png");
        background-size: 80%;
        background-position: top;
        background-repeat: no-repeat;
        -webkit-transition: all 0.5s;
        -moz-transition: all 0.5s;
        -o-transition: all 0.5s;
        transition: all 0.5s;
    }

    .docker20-off{
        padding: 100px 10px 25px;
        background-image: url("../images/carIcons/docker20-off.png");
        background-size: 80%;
        background-position: top;
        background-repeat: no-repeat;
        -webkit-transition: all 0.5s;
        -moz-transition: all 0.5s;
        -o-transition: all 0.5s;
        transition: all 0.5s;
    }
    .docker20-on{
        padding: 100px 10px 25px;
        background-image: url("../images/carIcons/docker20-on.png");
        background-size: 80%;
        background-position: top;
        background-repeat: no-repeat;
        -webkit-transition: all 0.5s;
        -moz-transition: all 0.5s;
        -o-transition: all 0.5s;
        transition: all 0.5s;
    }

    .docker27-off{
        padding: 100px 10px 25px;
        background-image: url("../images/carIcons/docker27-off.png");
        background-size: 80%;
        background-position: top;
        background-repeat: no-repeat;
        -webkit-transition: all 0.5s;
        -moz-transition: all 0.5s;
        -o-transition: all 0.5s;
        transition: all 0.5s;
    }
    .docker27-on{
        padding: 100px 10px 25px;
        background-image: url("../images/carIcons/docker27-on.png");
        background-size: 80%;
        background-position: top;
        background-repeat: no-repeat;
        -webkit-transition: all 0.5s;
        -moz-transition: all 0.5s;
        -o-transition: all 0.5s;
        transition: all 0.5s;
    }

    .custom-checkbox {
        position: absolute;
        z-index: -1;
        opacity: 0;
    }
    .custom-checkbox+label {
        display: inline-flex;
        align-items: center;
        user-select: none;
    }
    .custom-checkbox+label::before {
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
    .custom-checkbox:checked+label::before {
        border-color: #135693;
        background-color: #135693;
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
    }
    /* стили при наведении курсора на checkbox */
    .custom-checkbox:not(:disabled):not(:checked)+label:hover::before {
        border-color: #b3d7ff;
    }
    /* стили для активного состояния чекбокса (при нажатии на него) */
    .custom-checkbox:not(:disabled):active+label::before {
        background-color: #b3d7ff;
        border-color: #b3d7ff;
    }
    /* стили для чекбокса, находящегося в фокусе */
    .custom-checkbox:focus+label::before {
        box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }
    /* стили для чекбокса, находящегося в фокусе и не находящегося в состоянии checked */
    .custom-checkbox:focus:not(:checked)+label::before {
        border-color: #80bdff;
    }
    /* стили для чекбокса, находящегося в состоянии disabled */
    .custom-checkbox:disabled+label::before {
        background-color: #e9ecef;
    }
    .carInput {
        display: none;
    }
    .resize {
        width: 153%;
    }
    .fixdiv{
        height: 485px;
    }
    @media (max-width: 1599px){
        .resize{
            padding-top: 20px;
            width: 140%;
        }
    }
    @media (max-width: 1499px){
        .resize{
            padding-top: 40px;
            width: 130%;
        }
    }
    @media (max-width: 1399px){
        .resize{
            padding-top: 50px;
            width: 125%;
        }
    }
    @media (max-width: 1299px){
        .resize{
            padding-top: 60px;
            width: 120%;
        }
    }
    @media (max-width: 1229px){
        .resize{
            padding-top: 80px;
            width: 110%;
        }
    }
    @media (max-width: 1199px){
        .resize{
            padding-top: 90px;
            width: 120%;
        }
        .fixdiv{
            height: 425px;
        }
    }
    @media (max-width: 1099px){
        .resize{
            padding-top: 100px;
            width: 110%;
        }
        .fixdiv{
            height: 415px;
        }
    }
    @media (max-width: 991px){
        .fixdiv{
            display: none;
        }
    }
    green-p {
        color: #1d890a;
    }
    .label-custom{
        margin-top: 60px;
        margin-bottom: 60px;
        font-size: 20px;
    }
    .carIcon-z-index{
        z-index: 992;
        position: inherit;
    }
    .carIcon{
        height: 58px;
    }
    .carIconDisable{
        display: none;
        z-index: 9998;
    }

    .fil0 {
        fill:#F8F8F8;
        stroke: #000000;
        stroke-width: 1px;
        transition: all 0.5s;
    }
    .fil0:hover {
        fill: rgba(248, 248, 248, 0.8);
        transition: all 0.5s;
    }
    .fil-click {
        position: absolute;
        left: 50px;
        top: 50px;
        fill: #cce874;
        stroke: #000000;
        stroke-width: 1px;
        transition: all 0.5s;
    }
    .fil-click:hover {
        fill: rgba(204, 232, 116, 0.8);
        transition: all 0.5s;
    }
    .fil-hidden{
        display: none;
        transition: .55s opacity, .55s visibility;
    }
    .mapLabel{
        position: relative;
        width: 250px;
        background-color: rgba(255, 255, 255, 0.9);
        font-weight: 500;
        font-family: "Roboto",serif;
        color: #094071;
        padding: 5px 15px;
        border: 1px solid black;
        border-radius: 4px;
        z-index: 989;
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
        transition: .55s opacity, .55s visibility;
    }
    .mapLabel > p {
        font-size: 16px;
        margin: 0px;
        padding: 0px;
        text-align: center;
        vertical-align: center;
        transition: .55s opacity, .55s visibility;
    }

    .right-img{
        right: 20px;
        position: absolute;
    }
    img{
        vertical-align: middle;
    }
    .copyright{
        background-image: url("../images/head-bg.png");
    }
    .carTypeLabel {
        margin-top: 20px;
        font-size: 18px;
        font-family: "Roboto",serif;
        color: rgb(255, 255, 255);
        line-height: 0.917;
        text-align: center;
        z-index: 990;
    }
    .z-first {
        z-index: 989;
        position: absolute;
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
        border-radius: 4px;
        background-color: rgb(232, 233, 234);
        box-shadow: 0px 1px 0px 0px rgba(255, 255, 255, 0.08);
        width: 300px;
        height: 44px;
        z-index: 120;
    }
</style>