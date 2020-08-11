<template>
    <section>
        <h1>Pokemon List</h1>
        <div class="pokemon-list">
            <PokemonCard :details="pokemon"
                         v-for="pokemon in sortedList"
                         :key="pokemon.id"
            >
                <img :src="pokemon.image" alt="pokemon-image" />
            </PokemonCard>
        </div>
    </section>
</template>

<script>
import PokemonCard from "@/components/PokemonCard.vue"

export default {
    name: 'List',
    data() {
        return {
            pokemonList: []
        }
    },
    computed: {
        sortedList() {
            return this.pokemonList.sort((a, b) => a.id - b.id)
        }
    },
    created() {
        for (let i = 1; i <= 151; i++) {
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
    .pokemon-list {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        max-width: 1000px;
        margin: 0 auto;
    }
</style>
