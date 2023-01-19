<template>
<div>
    <v-row>
        <v-col cols="12">
            <h4>lista de planetas:</h4>

                <li v-for="planet in planets" :key="planet.slug">
                    {{ planet.title }}
                </li>
            
        </v-col>
    </v-row>
</div>
</template>
<!-- <script>
export default{
    data () {
        return {
            planets:[],
        }
    },
    async fetch(){
        console.log("fetching data")
        this.planets = await fetch('https://api.nuxtjs.dev/planets').then((res)=>
                res.json()
            )
    },
}
</script> -->


<script setup>
const { data: planets } = await useFetch('https://api.nuxtjs.dev/planets')
</script>