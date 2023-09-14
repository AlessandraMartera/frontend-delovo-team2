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
    <section>
        <div class="contenitore">
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
        </div>
    </section>
    <section>
        <div class="contenitore">
            <small id="copy">© Copyright 2012-2020 | L'ovo | All Rights Reserved </small>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use './../styles/partials/variables.scss' as *;
@use './../styles/partials/mixins.scss' as *;
@use './../styles/general.scss' as *;

.brand {
    padding: 20px 0;
}

#copy {
    padding: 50px 0;
}

.contenitore {
    background-color: #9b2226dd;
    padding: 20px;

    ul {
        @include center ();
        justify-content: start;

        li {
            margin: 0 2%;

            a {
                font-weight: 600;
                font-size: 12px;

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
    width: 60px;
    display: flex;
    justify-content: center;
    margin-left: 200px;
    background-color: $vividAuburn;
    margin: 35px 0 0 0px;
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
    border: 3px solid black;

    img {
        margin-left: 4px;
        margin-top: -5px;
        height: 70px;
        width: 60px;
    }
}
</style>
