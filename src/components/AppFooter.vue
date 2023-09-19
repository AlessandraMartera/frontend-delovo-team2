<script>
import axios from 'axios';

export default {
    name: 'AppFooter',
    data() {
        return {
            links: [
                {
                    text: "Scopri l'Ovo",
                    url: "#",
                    current: false,
                    infos: [
                        'Ristoranti',
                        'Programmazione',
                        'Altro',
                        'Lavora con noi',

                    ]
                },
                {
                    text: "Note Legali",
                    url: "#",
                    current: false,
                    infos: [
                        'Termini & Condizioni',
                        'Informazioni sulla privacy',
                        'Cookies',
                    ]
                },
                {
                    text: "Chi siamo",
                    url: "#",
                    current: false,
                    infos: [
                        "Informazioni su l'OVO",
                        'Diventa partner',
                        'Investitori',
                        "Diventa un rider",
                        "Città in cui lavoriamo"
                    ]
                },
                {
                    text: "Aiuto",
                    url: "#",
                    current: false,
                    infos: [
                        'Contatti',
                        'FAQ',
                        'Tipi di cucina'
                    ]
                },
            ],
            developers: [
                {
                    nome: "Mirko",
                    link: "https://github.com/MirkoGLostia"
                },
                {
                    nome: "Alessandra",
                    link: "https://github.com/AlessandraMartera"
                },
                {
                    nome: "Federica",
                    link: "https://github.com/FedericaMammone"
                },
                {
                    nome: "Gianbattista",
                    link: "https://github.com/GianbaBotassi"
                },
                {
                    nome: "Gabriele",
                    link: "https://github.com/g4br100"
                },
            ]
        }
    }
}
</script>

<template>
    <footer class="contenitore">
        <div class="footer">
            <div class="news">
                <div id="logo">
                    <img src="./../assets/images/Logo3.svg" alt="">
                </div>
                <div class="contenitore-footer">
                    <ul class="developer">
                        <li v-for="link in links" class="colonna">
                            <div class="nav">
                                <h5>
                                    {{ link.text }}
                                </h5>
                            </div>

                            <ul>
                                <li v-for="info in link.infos">
                                    <a href="#">
                                        {{ info }}
                                    </a>
                                </li>

                            </ul>
                        </li>

                    </ul>

                    <ul class="developer">
                        <li class="colonna">
                            <div class="nav">
                                <h5>
                                    Developed by:
                                </h5>
                            </div>

                            <ul>
                                <li v-for="developer in  developers ">
                                    <a :href="developer.link">
                                        {{ developer.nome }}
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            <div id="copyright">
                <small id="copy">© Copyright 2012-2020 | L'ovo | All Rights Reserved </small>
            </div>
        </div>


    </footer>
</template>

<style lang="scss" scoped>
@use './../styles/partials/variables.scss' as *;
@use './../styles/partials/mixins.scss' as *;
@use './../styles/general.scss' as *;


.contenitore {
    width: 110%;
    margin-left: -5%;
    padding: 30px 0px;

    .footer {
        background-image: url("./../assets/images/Sfondo_footer.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        -webkit-box-shadow: 10px 11px 24px 6px #000000;
        -moz-box-shadow: 10px 11px 24px 6px #000000;
        -o-box-shadow: 10px 11px 24px 6px #000000;
        box-shadow: 10px 11px 24px 6px #000000;



        .news {
            display: flex;
            font-size: 20px;
            padding: 20px;
            padding-bottom: 0px;

            #logo {
                margin-left: 20px;
                height: 80px;
                width: 54px;
                display: flex;
                justify-content: center;

                background-color: #992631;
                //   margin: -30px 0 0 100px;
                border-bottom-left-radius: 50%;
                border-bottom-right-radius: 50%;
                border: 3px solid black;

                img {
                    margin-left: 4px;
                    height: 76px;
                }
            }


            .contenitore-footer {
                width: 100%;
                display: flex;
                justify-content: space-around;


                .developer {
                    display: flex;
                    justify-content: end;
                    width: 100%;

                    .colonna {
                        padding: 10px;
                        margin-right: 15px;
                        margin-left: 5px;
                    }

                    .nav {
                        width: max-content;

                        border: 2px solid black;


                        h5 {

                            font-size: 20px;
                            font-weight: 600;
                            padding: 5px;
                            background-color: antiquewhite;
                        }
                    }

                    ul {
                        margin-top: 15px;
                        padding: 5px;
                    }

                    li {

                        a {
                            font-size: 15px;
                            color: $CookiesAndCream;
                        }
                    }
                }

            }
        }

        #copyright {
            padding-top: 0px;
        }

    }

}

@media screen and (max-width: 810px) {
    .contenitore {
        .footer {
            .news {
                .contenitore-footer {
                    .developer {

                        .colonna {
                            margin-right: 0;
                        }
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 810px) {

    .contenitore {
        .footer {
            .news {
                .contenitore-footer {
                    flex-wrap: wrap;

                    .developer {
                        flex-wrap: wrap;
                        justify-content: start;

                        .colonna {
                            min-width: 140px;
                            margin-right: 50px;
                        }

                    }
                }
            }
        }
    }



}
</style>
