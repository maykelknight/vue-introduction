<template>
    <div>
        <h1>Pokemon Details</h1>
        <div class="details-card">
            <h2 class="details-card__name">{{details.name}}</h2>
            <img class="details-card__image" :src="`https://pokeres.bastionbot.org/images/pokemon/${pokemonId}.png`"/>
            <p class="details-card__description">{{description}}</p>
            <div class="details-card__params">
                <p>Weight: {{details.weight}} lbs.</p>
                <p>Height: {{details.height}}'</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PokemonDetails",
        data() {
            return {
                details: {},
                description: '',
                pokemonId: this.$route.params.id
            }
        },
        methods: {
            getPokemonDetails(id) {
                const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
                fetch(url)
                    .then(res => res.json())
                    .then(pokemon => {
                        this.details = {
                            name: pokemon.name,
                            weight: pokemon.weight,
                            height: pokemon.height,
                            types: pokemon.types.map(type => type.type),
                        };
                    });
            },
            getPokemonDescription(id) {
                const url = `https://pokeapi.co/api/v2/pokemon-species/${id}`;
                fetch(url)
                    .then(res => res.json())
                    .then(pokemon => {
                        this.description = pokemon.flavor_text_entries[0].flavor_text;
                    });
            }
        },
        mounted() {
            this.getPokemonDetails(this.pokemonId);
            this.getPokemonDescription(this.pokemonId);
        }
    }
</script>

<style scoped lang="scss">
    .details-card {
        background: #eeee;
        max-width: 400px;
        min-height: 700px;
        margin: 0 auto;
        border-radius: 10px;
        padding: 20px 80px;

        &__name {
            font-size: 30px;
            text-transform: uppercase;
            margin-bottom: 60px;
        }

        &__image {
            max-width: 300px;
        }

        &__params {
            margin: 60px 0 0;
        }

        &__description {
            padding: 20px 0;
            border-top: 1px solid gray;
            border-bottom: 1px solid gray;
        }
    }
</style>
