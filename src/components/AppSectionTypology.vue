<script>
export default {
  name: "AppSectionTypology",
  props: {
    types: Array,
    selectedTypes: Array,
  },
  data() {
    return {
      showmenu: false
    };
  },
  methods: {
    showDropdown: function () {
      this.showmenu = !this.showmenu;
      console.log(this.showmenu)
    }
  }
};
</script>

<template>
  <section class="typology">
    <h1>Scegli la tipologia di ristorante</h1>

    <button @click="showDropdown"> &#11167; </button>

    <!-- <AppSectionTypology /> -->
    <section v-if="showmenu" class="section-egg ">
      <div class="item" v-for="(typology, idx) in types" :key="idx">

        <button @click.prevent="$emit('event', idx)" :class="selectedTypes.includes(typology.nome)
          ? ' uovo selected'
          : 'uovo'
          ">

          <img src="./../assets/images/Italiano.jpg" alt="">
          <span>
            {{ typology.nome }}
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
  display: inline;
  padding: 25px;
  color: $skobeloff;
  text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
}

.typology {
  margin-top: 100px;
  margin-left: -5%;
  padding: 10px;

  width: 110%;
  // height: 400px;
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

    input {
      height: 60px;
      width: 60px;
      border-radius: 50%;
    }

    .tipology-list {
      width: 70vw;
      overflow: hidden;
      overflow-x: auto;

      // uova in linea
      display: flex;
    }
  }

  .selected {
    img {
      filter: grayscale(100%) opacity(1);
    }

  }

  button {
    border: none;
  }

  .uovo {
    margin-left: 25px;
    display: block;
    width: 168px;
    height: 240px;
    border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;

    text-align: center;




    img {
      width: 168px;
      height: 240px;

      border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
      border: 4px solid $skobeloff;
    }

    span {
      background-color: #000000;
      color: white;
      position: relative;
      bottom: 120px;
    }

    .selected {

      background-color: #00000034;
    }


  }
}
</style>


