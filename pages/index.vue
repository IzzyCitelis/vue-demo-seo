<template>
  <v-app id="inspire">
    <v-app-bar
      app
      extended
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn> -->
      <v-btn to="/checkout">
        <v-icon>mdi-dots-vertical</v-icon>holox
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        
      <v-row>
          <v-col
            v-for="n in 30"
            :key="n"
            cols="4"
          >
              <!-- <v-card height="200"></v-card> -->
          <v-img
              class="bg-white"
              width="300"
              :aspect-ratio="1"
              :src="'https://picsum.photos/id/'+n+'/200/300'"
              lazy-src="https://picsum.photos/200/300.webp"
              cover
          ></v-img> 
  
          </v-col>
      </v-row>

      <br>
        <h4>planetas lista</h4>


        <v-btn @click="showPlanets">
          show planets
        </v-btn >
        <div v-if="show">
            <LazyPlanetList/> 
           <!--  <PlanetList/> -->
        </div>



      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  export default {
  methods: {
    showPlanets(){
      this.show = true
    }
  },
  data () {
    return {
      show :false
    }
  },
    //
  }
</script>