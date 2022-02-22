<template>
  <v-app>
    <v-container class="board-wrap">
      <div class="board-comment" style="margin-top: 100px">
        <v-text-field
          prepend-inner-icon="mdi-search-web"
          label="검색"
          rows="1"
          no-resize
        ></v-text-field>
      </div>
      <vueCustomScrollbar
        @ps-y-reach-end="callCard"
      >
        <template v-for="(data, index) in boardCardList">
          <board-card :key="index" :data="data"></board-card>
        </template>
      </vueCustomScrollbar>
    </v-container>
  </v-app>
</template>

<script>
// 임시로 헤더, 푸터 추가
import ToolBarHeader from "@/components/ToolBarHeader.vue";
import ToolBarFoot from "@/components/ToolBarFoot.vue";
import BoardCard from "./BoardCard.vue";
import axios from 'axios'

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
      boardCardList: new Array(),
      page:0,
      callBool:true
    };
  },
  created(){    
    this.callCard() 
  },
  methods: {
    callCard(){
      if(!this.callBool) return;
      let boardList =  this.boardCardList
      axios  
        .get('/timeline/list',{params: {page:this.page,size:2}}  
      ).then(({data})=>{    

        let {timeline} = data
        timeline.results.forEach(element => {
          boardList.push(element)
        });

        if(boardList.length >= timeline.total)
          this.callBool = false
        this.page++
      }).catch(error => {  
        console.error(error);
      })
    }
  },
};
</script>

<style scoped>
body,
#app,
.v-main,
.container{
  height:100%
}
</style>
