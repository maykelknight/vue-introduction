<template>
    <div>
        <h1>Pokemon List</h1>
        <div class="pokemon">
            <div class="pokemon__list">
                <div class="pokemon__list__filter">
                    Filter: <input type="text" v-model="filter" placeholder="Name">
                </div>
                <div class="pokemon__list__cards">
                    <PokemonCard :details="pokemon"
                                 v-for="pokemon in filteredList"
                                 :key="pokemon.id"
                                 @toggleFavourite="onFavouriteToggle($event)"
                    ></PokemonCard>
                </div>
            </div>
            <FavouritePokemon :favourites="favourites"></FavouritePokemon>
        </div>
    </div>
</template>

<script>
    import PokemonCard from "@/components/PokemonCard.vue"
    import FavouritePokemon from "../components/FavouritePokemon";

    export default {
        name: 'List',
        data() {
            return {
                pokemonList: [],
                favourites: [],
                filter: ''
            }
        },
        computed: {
            sortedList() {
                return this.pokemonList.sort((a, b) => a.id - b.id)
            },
            filteredList() {
                return this.sortedList.filter(pokemon => pokemon.name.startsWith(this.filter))
            }
        },
        methods: {
            onFavouriteToggle(pokemon) {
                if (this.favourites.includes(pokemon.name)) {
                    return this.favourites = this.favourites.filter(favourite => favourite !== pokemon.name)
                }
                this.favourites.push(pokemon.name);
            }
        },
        created() {
            for (let i = 1; i <= 150; i++) {
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
            FavouritePokemon,
            PokemonCard
        }
    }
</script>
<style scoped lang="scss">
    .pokemon {
        &__list {
            &__cards {
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                justify-content: center;
                max-width: 1000px;
                margin: 0 auto;
            }

            &__filter {
                margin-bottom: 30px;
            }
        }
    }

</style>
