<template>
    <div id="app">
        <!-- <button @click="yyy">uuuu</button> -->
        <router-link to="/"></router-link>
        <router-view></router-view>
    </div>
</template>

<script>
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
