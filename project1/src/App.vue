<template>
    <div id="app">
        <!-- <button @click="yyy">uuuu</button> -->
        <router-link to="/allorders"></router-link>
        <router-view></router-view>
    </div>
</template>

<script>
// import home from '/Users/bernice1357689/Desktop/fabcar_vue_ui/project1/src/views/Home.vue';
export default {
    name: "app",
    data(){
        return{
            user_name: "User",
            page_name: "yyyy"
        }
    },
}
</script>
