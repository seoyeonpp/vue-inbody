<template>
  <v-card class="mx-auto my-3" max-width="374">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>
    <v-carousel
      cycle
      height="250"
      hide-delimiter-background
      show-arrows-on-hover
      style="margin-top: 5px"
    >
      <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src">
      </v-carousel-item>
    </v-carousel>

    <v-card-title>{{data.title}}</v-card-title>

    <v-card-text>
      <v-row align="center" class="mx-0"> </v-row>

      <div class="my-4 text-subtitle-1">{{data.member.userNickname}}</div>

      <div>{{data.content}}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-text>
      <v-chip-group
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>tag1</v-chip>
        <v-chip>tag2</v-chip>
        <v-chip>tag3</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn color="deep-purple lighten-2" text> Read </v-btn>

      <v-spacer></v-spacer>
      <v-icon>mdi-thumb-up</v-icon>
      <span>0</span>
      <v-icon> mdi-message-processing</v-icon>
      <span>0</span>
    </v-card-actions>
  </v-card>
</template>

<script>
import axios from "axios";

export default {
  props: ['data'],
  data() {
    return {
      items: [
        {
          src: "https://images.pexels.com/photos/6551070/pexels-photo-6551070.jpeg?cs=srgb&dl=pexels-andres-ayrton-6551070.jpg&fm=jpg",
        },
        {
          src: "https://images.pexels.com/photos/6975488/pexels-photo-6975488.jpeg?cs=srgb&dl=pexels-shvets-production-6975488.jpg&fm=jpg",
        },
        {
          src: "https://images.pexels.com/photos/7801526/pexels-photo-7801526.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
        {
          src: "https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
      ],
    };
  },
  created() {
    let url = `${axios.defaults.baseURL}`
    this.items = this.data.timeLinePhotos.map(({fileName})=>{
      return {src:`${url}file/${fileName}`}
    })
    console.log(this.items)
  },
};
</script>

<style></style>
