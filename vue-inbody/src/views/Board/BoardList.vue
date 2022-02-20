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
import {mapGetters} from 'vuex'

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
  created(){            //created 메소드는 페이지 생성 후 실행되는 메소드, vue 라이프사이클에 맞춰 다양한 메소드들이 준비되있음

    this.getAxios()     //vuex 에 저장된 엑시오스 객체를 불러옴
    .get(               //http method에 맞춰 메소드를 호출, .get .post .put .delete....
      '/timeline/list'  //첫번째 파라미터는 주소
      ,{params: {page:1,size:5}}  //두번째 파라미터는 요청때 넘겨줄 파라미터
      )
    .then((data)=>{     //then은 요청에 성공하면 실행되는 내용
      console.log(data)
      })
    .catch(error => {   //catch는 요청에 실패시 실행되는 내용
      console.error(error);
    })

  },
  methods: {
    ...mapGetters(['getAxios']) //vuex getters에 포함된 메소드 getAxios를 가져옴
  },
};
</script>

<style scoped></style>
