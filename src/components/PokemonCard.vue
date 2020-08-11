<template>
    <div class="card">
        <img :src="details.image" class="card__image"/>
        <p class="card__name">{{details.name}}</p>
        <p class="card__id">#{{details.id}}</p>
        <ul class="card__types">
            <li v-for="type in details.types">
                {{type}}
            </li>
        </ul>
        <button class="card__btn" @click="goToDetailsPage()">Details</button>
        <button class="card__btn" @click="toggleFavourite()">Toggle favourite</button>
    </div>
</template>

<script>
    export default {
        name: "PokemonCard.vue",
        props: {
            details: {
                type: Object,
                required: true
            }
        },
        methods: {
            goToDetailsPage() {
                this.$router.push(`/details/${this.details.id}`)
            },
            toggleFavourite() {
                this.$emit('toggleFavourite', this.details);
            }
        }
    }
</script>

<style scoped lang="scss">
    .card {
        width: 200px;
        height: 300px;
        border-radius: 10px;
        margin-right: 20px;
        margin-bottom: 20px;
        background: #eee;

        &__name {
            text-transform: capitalize;
            font-size: 20px;
            margin-top: -10px;
        }

        &__id {
            margin-bottom: 5px;
            margin-top: 25px;
        }

        &__types {
            list-style-type: none;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;

            li {
                padding: 5px 10px;
                background: burlywood;
                margin: 5px;
                border-radius: 5px;
                font-size: 12px;
            }
        }

        &__btn {
            margin: 10px auto 0;
            border: 1px solid black;
            border-radius: 5px;
            padding: 5px 10px;
            cursor: pointer;
            display: block;
        }
    }
</style>
