<script>
export default {
  name: "AppSectionTypology",
  props: {
    types: Array,
    selectedTypes: Array,
  },
  data() {
    return {
      showmenu: false,
    };
  },
  methods: {
    showDropdown: function () {
      this.showmenu = !this.showmenu;
      // console.log(this.showmenu);
    },
  },
};
</script>

<template>
  <section class="typology">
    <div class="select d-flex gap-3" @click="showDropdown">
      <h1 class="ms-5">SCEGLI LA TIPOLOGIA DI RISTORANTE</h1>
      <button class="py-0 px-2 rounded">&#11167;</button>
    </div>

    <!-- <AppSectionTypology /> -->
    <section v-if="showmenu" class="section-egg">
      <div class="item" v-for="(typology, idx) in types" :key="idx">
        <button class="uovo" @click.prevent="$emit('event', idx)"
          :class="selectedTypes.includes(typology.nome) ? ' selected' : ''">
          <img class="img-egg" :src="`${this.$store.state.beUrl}${typology.image}`" alt="" />
          <span class="border px-4 py-2 rounded">
            {{ typology.nome.toUpperCase() }}
          </span>
        </button>
      </div>
    </section>
  </section>
</template>

<style lang="scss" scoped>
@use "./../styles/partials/variables.scss" as *;
@use "./../styles/partials/mixins.scss" as *;
@use "./../styles/general.scss" as *;

h1 {
  color: #e0cfb5;
  font-size: 3rem;
  // text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
}


.typology {
  margin-top: 100px;
  margin-left: -5%;
  padding: 10px;
  width: 110%;
  background-image: url(./../assets/images/Sfondo_sezione_tipologie.jpg);
  background-size: cover;
  background-position: top;
  -webkit-box-shadow: 10px 11px 24px 6px #000000;
  -moz-box-shadow: 10px 11px 24px 6px #000000;
  -o-box-shadow: 10px 11px 24px 6px #000000;
  box-shadow: 10px 11px 24px 6px #000000;

  .section-egg {
    padding: 20px 40px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 30px;
    // .img-egg {
    //   filter: opacity(0.7);
    // }
  }



  button {
    border: none;
    font-size: 1.5rem;
    background: #a08b80;


  }

  .uovo {
    margin-left: 25px;
    display: block;
    width: 168px;
    height: 240px;
    border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
    text-align: center;
    font-size: 1.4rem;

    img {
      width: 168px;
      height: 240px;
      border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
      border: 4px solid $skobeloff;
    }

    span {
      background-color: #596d67;
      color: white;
      position: relative;
      bottom: 90px;
      left: 50px;
    }


  }

  .uovo.selected {

    cursor: pointer;

    img {
      border-color: $vividAuburn;
    }

    span {
      color: $vividAuburn;
    }
  }
}
</style>

