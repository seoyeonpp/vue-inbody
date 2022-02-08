<template>
  <!-- <v-card elevation="2" outlined>
    <v-banner>배너</v-banner>
    <div style="display: flex">
      <v-img
        v-for="(item, index) in items"
        :key="index"
        :src="item.src"
        max-height="80"
        max-width="80"
      ></v-img>
    </div>
    <v-card-title>게시물 리스트 테스트</v-card-title>
    <v-card-text> 게시물 작성 본문 </v-card-text>
    <v-divider></v-divider>
    <v-card-subtitle>
      <v-card-actions>
        <v-avatar color="brown" size="48">
          <span class="white--text text-h5">서도하</span>
        </v-avatar>
        <v-spacer></v-spacer>
        <v-btn class="elevation-0" fab outlined color="teal">추천</v-btn>
        <v-btn class="elevation-0" fab outlined color="indigo">댓글</v-btn>
      </v-card-actions>
    </v-card-subtitle>
  </v-card> -->
  <v-card :loading="loading" class="mx-auto my-3" max-width="374">
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

    <v-card-title>제목</v-card-title>

    <v-card-text>
      <v-row align="center" class="mx-0"> </v-row>

      <div class="my-4 text-subtitle-1">서도하</div>

      <div>본문 내용</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>tag1</v-chip>
        <v-chip>tag2</v-chip>
        <v-chip>tag3</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn color="deep-purple lighten-2" text @click="reserve"> Read </v-btn>

      <v-spacer></v-spacer>
      <v-icon>mdi-thumb-up</v-icon>
      <span>0</span>
      <v-icon> mdi-message-processing</v-icon>
      <span>0</span>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
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
};
</script>

<style></style>
