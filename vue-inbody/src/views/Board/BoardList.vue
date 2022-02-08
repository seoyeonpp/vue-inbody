<template>
  <v-app>
    <v-container class="board-wrap">
      <tool-bar-header></tool-bar-header>
      <div class="board-comment" style="margin-top: 100px">
        <v-text-field
          prepend-inner-icon="mdi-search-web"
          label="검색"
          rows="1"
          no-resize
        ></v-text-field>
      </div>
      <vueCustomScrollbar
        style="height: 73%; overflow-y: auto; overflow-x: hidden"
      >
        <board-card></board-card>
        <board-card></board-card>
        <board-card></board-card>
        <board-card></board-card>
      </vueCustomScrollbar>
      <tool-bar-foot></tool-bar-foot>
    </v-container>
  </v-app>
</template>

<script>
// 임시로 헤더, 푸터 추가
import ToolBarHeader from "@/components/ToolBarHeader.vue";
import ToolBarFoot from "@/components/ToolBarFoot.vue";
import BoardCard from "./BoardCard.vue";

import vueCustomScrollbar from "vue-custom-scrollbar";
import "vue-custom-scrollbar/dist/vueScrollbar.css";

export default {
  components: {
    ToolBarHeader,
    ToolBarFoot,
    BoardCard,
    vueCustomScrollbar,
  },
  data() {
    return {
      myBoard: true,
      userName: "작성자",
      boardTitle: "커뮤니티 제목",
      boardTxt: "어쩌구저쩌구 내용",
    };
  },
};
</script>

<style scoped></style>
