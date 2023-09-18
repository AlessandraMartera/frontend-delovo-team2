<script>
import axios from 'axios';

export default {
    name: 'AppFooter',
    data() {
        return {
            links: [
                {
                    text: "Shop",
                    url: "#",
                    current: false,
                },
                {
                    text: "About",
                    url: "#",
                    current: false,
                },
                {
                    text: "Gallery",
                    url: "#",
                    current: false,
                },
                {
                    text: "Locations",
                    url: "#",
                    current: false,
                },
                {
                    text: "Journal",
                    url: "#",
                    current: false,
                },
                {
                    text: "Orders",
                    url: "#",
                    current: false,
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
                <div class="contenitore-sviluppatori">
                    <ul class="prova">
                        <li v-for="link in links">
                            <h5>
                                {{ link.text }}
                            </h5>
                            <ul>
                                <li>
                                    <a href="#">
                                        prova
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        prova
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        prova
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        prova
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        prova
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        prova
                                    </a>
                                </li>
                            </ul>
                        </li>

                    </ul>

                    <ul class="prova">
                        <li>
                            <h5>
                                Developed by:
                            </h5>
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


            .contenitore-sviluppatori {
                width: 100%;
                display: flex;
                justify-content: space-around;


                .prova {
                    display: flex;
                    justify-content: space-around;
                    width: 100%;

                    h5 {
                        margin-top: 12px;
                        font-size: 22px;
                        font-weight: 700;
                    }

                    li {
                        font-weight: 700;

                        a {
                            color: #000000;
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
</style>
