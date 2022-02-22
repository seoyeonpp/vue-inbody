<template>
  <v-app>
    <v-container class="board-wrap">
      <v-card>
        <v-toolbar flat color="blue" dark>
          <v-toolbar-title>후기를 남겨주세요</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-text-field filled label="제목" v-model="title" value="My new post"></v-text-field>
          <v-textarea
            filled
            label="내용"
            v-model="content"
            value=""
            rows="25"
          ></v-textarea>
          <v-divider class="my-2"></v-divider>
          <v-subheader>사진
            <label for="file">
              <v-btn
                class="mx-2"
                color="gray"
                width="20"
                height="20"
                @click="handleFileImport"
              >
                <v-icon dark> mdi-plus </v-icon>
              </v-btn>
            </label>
            <input type="file" ref="uploader" hidden @change="onFileChanged" />

          </v-subheader>
          
          <div style="display: flex; width: 100%">
            <v-container>
              <v-row no-gutters>
                <template v-for="(image, index) in imageFileList">
                  <span class="pa-3" avatar bordered overlap :key="index">
                    <span @click="deleteImg(index)" style="position: absolute; z-index:2;">
                      <v-icon >mdi-minus-circle</v-icon>
                    </span>
                    <v-img :src="image.src" width="64" height="64"></v-img>
                  </span>
                </template>
              </v-row>
            </v-container>
          </div>
          
            
          <v-divider class="my-2"></v-divider>
          <v-item-group multiple>
            <v-subheader>태그</v-subheader>
            <v-item v-for="n in 8" :key="n" v-slot="{ active, toggle }">
              <v-chip
                active-class="purple--text"
                :input-value="active"
                @click="toggle"
              >
                Tag {{ n }}
              </v-chip>
            </v-item>
          </v-item-group>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="success" depressed @click="doBoardWrite()"> 등록하기 </v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
// 임시로 헤더, 푸터 추가
import ToolBarFoot from "@/components/ToolBarFoot.vue";
import ToolBarHeader from "@/components/ToolBarHeader.vue";
import {mapGetters} from "vuex";
import axios from 'axios'
import router from '@/router'

export default {
  components: {
    ToolBarHeader,
    ToolBarFoot,
  },
  data() {
    return {
      isSelecting: false,
      selectedFile: null,
      title: '',
      content: '',
      imageFileList: new Array(),
      pending: true
    };
  },
  methods: {
    ...mapGetters(['getUser']),
    handleFileImport() {
      this.isSelecting = true;
      window.addEventListener(
        "focus",
        () => {
          this.isSelecting = false;
        },
        { once: true }
      );
      this.$refs.uploader.click();
    },
    onFileChanged(e) {
      if(this.imageFileList.length<6){
      this.selectedFile = e.target.files[0];
      this.imageFileList.push({src:URL.createObjectURL(e.target.files[0]), fileOrg:this.selectedFile});
      }else{
        alert(`그림파일은 6개 까지 업로드 할 수 있습니다.`);
      }
    },
    doBoardWrite(){
      if(this.pending){
        this.pending = false;
      }else{
        return;
      }
      const formData = new FormData();
      formData.append("title",this.title)
      formData.append("content",this.content)
      this.imageFileList.forEach((val,idx)=>{
        formData.append("timeLinePhotos",val.fileOrg)
      })
      axios.post('/timeline/',formData, {
        header:{
          'Context-Type': 'multipart/form-data'
        }
      }).then(({data})=>{
        if(data.result=="success"){
          alert('등록 성공')
          router.push('/boardList')
        }
      }).catch((err)=>{
        alert('등록 실패')
      }).then(() => {this.pending = true});    
    },
    deleteImg(key){
      this.imageFileList.splice(key,1)
    }
  },
};
</script>

<style></style>
