<template>
  <div class="home">
      <PokemonCard :details="pokemon"
                   v-for="pokemon in sortedList"
      ></PokemonCard>
  </div>
</template>

<script>
import PokemonCard from "@/components/PokemonCard.vue"
export default {
  name: 'Home',
  data() {
    return {
      pokemonList: []
    }
  },
  computed: {
    sortedList() {
      return this.pokemonList.sort((a,b) => a.id - b.id)
    }
  },
  created() {
    for (let i = 1; i <= 50; i++) {
      const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      fetch(url)
              .then(res => res.json())
              .then(pokemon => {
                this.pokemonList.push({
                  name: pokemon.name,
                  id: pokemon.id,
                  types: pokemon.types.map(type => type.type.name),
                  image: pokemon.sprites.front_default
                });
              });
    }
  },
  components: {
    PokemonCard
  }
}
</script>
<style scoped lang="scss">
  .home {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 1000px;
    margin: 0 auto;
  }
</style>
