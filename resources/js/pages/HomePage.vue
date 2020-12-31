  
<template>  

   <v-app>           
    <v-carousel
        cycle
        height="600"
        hide-delimiter-background
        show-arrows-on-hover
      >
        <v-carousel-item
          v-for="(slide, i) in slides"
          :key="i"
        >
          <v-sheet
            :color="colors[i]"
            height="100%"
          >
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
              <div class="display-3">
                {{ slide }} Slide
              </div>
            </v-row>
          </v-sheet>
        </v-carousel-item>   
      </v-carousel>
      <v-container
      style="width: 60%">
            <v-row>
              <v-col>
                <v-card
                  color="purple"
                  dark
                  height = "300"
                >
                  <div class="d-flex flex-no-wrap ">
                   <v-img src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"></v-img>
                    <v-card-text class="text-right">Services</v-card-text>
                    
                    
                  </div>
                  
                </v-card>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-card
                  color="purple"
                  dark
                  height = "300"
                >
                  <div class="d-flex flex-no-wrap ">
                  
                    <v-card-text class="text-left">Services</v-card-text>
                     <v-img src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"></v-img>
                    
                    
                  </div>
                  
                </v-card>
              </v-col>
            </v-row>
          </v-container> 
    <v-parallax
        height="500"
        src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
      ></v-parallax>
      <template>
      <v-container class="pa-4 text-center">
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <template v-for="(item, i) in items">
            <v-col
              :key="i"
              cols="12"
             
            >
              <v-hover v-slot="{ hover }">
                <v-card
                  :elevation="hover ? 12 : 2"
                  :class="{ 'on-hover': hover }"
                >
                  <v-img
        :aspect-ratio="16/9"
        src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
      >
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
            style="height: 120%;"
          >
            $14.99
          </div>
        </v-expand-transition>
      </v-img>
                   
                  
                </v-card>
              </v-hover>
            </v-col>
          </template>
        </v-row>
      </v-container>
      
    </template>
   </v-app>       
       

</template>
<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}
</style>
<script>
  export default {
    data () {
        
      return {
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
        items: [
        {
          color: '#1F7087',
          src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
          title: 'Supermodel',
          artist: 'Foster the People',
        },
        {
          color: '#952175',
          src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
          title: 'Halcyon Days',
          artist: 'Ellie Goulding',
        },
      ]
      }
    },
  }
</script>

