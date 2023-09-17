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
                <ul>
                    <li v-for="link in links">
                        <a :href="link.url" :class="{ active: link.current }">{{ link.text }}</a>
                    </li>
                </ul>
            </div>

            <div>
                <small id="copy">© Copyright 2012-2020 | L'ovo | All Rights Reserved </small>
            </div>
        </div>


    </footer>
</template>

<style lang="scss" scoped>
@use './../styles/partials/variables.scss' as *;
@use './../styles/partials/mixins.scss' as *;
@use './../styles/general.scss' as *;

.brand {
    padding: 20px 0;
}



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

        div {
            font-size: 20px;
            padding: 20px;

            ul {
                display: flex;
                margin: 0px 20px;

                li {
                    padding: 10px;

                    a {
                        font-weight: 600;
                    }

                }
            }

        }


    }
}

.news {
    display: flex;
}



button {
    color: white;
    padding: 0.5em 1em;
    border-radius: 6px;
    margin-left: 20px;
}


#logo {
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
        margin-top: -20px;
        height: 76px;
    }
}

a {
    color: black;
}
</style>
