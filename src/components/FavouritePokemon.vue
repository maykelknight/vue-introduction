<template>
    <div class="favourites">
        <h2>Favourites</h2>
        <ul>
            <li v-for="(favourite, index) in favourites" :key="index">
                {{favourite}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "FavouritePokemon",
        props: {
            favourites: {
                type: Array,
                required: true
            }
        }
    }
</script>

<style scoped lang="scss">
    .favourites {
        position: fixed;
        top: 50vh;
        right: 100px;
        width: 300px;
        background: beige;
        padding-bottom: 20px;

        ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
        }
    }
</style>
