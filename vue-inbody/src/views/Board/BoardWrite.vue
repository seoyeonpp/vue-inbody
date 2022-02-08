<template>
  <v-app>
    <v-container class="board-wrap">
      <tool-bar-header></tool-bar-header>
      <v-card style="margin-top: 110px; height: 80%">
        <v-toolbar flat color="blue" dark>
          <v-toolbar-title>후기를 남겨주세요</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-text-field filled label="제목" value="My new post"></v-text-field>
          <v-textarea
            filled
            label="내용"
            value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse"
          ></v-textarea>
          <v-divider class="my-2"></v-divider>
          <v-subheader>사진</v-subheader>
          <div style="display: flex; width: 100%">
            <template v-for="(image, index) in imageFileList">
              <div class="mx-1" :key="index"></div>
              <v-badge avatar bordered overlap :key="index">
                <template v-slot:badge>
                  <v-avatar>
                    <v-img
                      src="https://cdn.vuetifyjs.com/images/logos/v.png"
                    ></v-img>
                  </v-avatar>
                </template>
                <v-img :src="image" width="64" height="64"></v-img>
              </v-badge>
            </template>
            <label for="file">
              <v-btn
                class="mx-2"
                color="gray"
                width="64"
                height="64"
                @click="handleFileImport"
              >
                <v-icon dark> mdi-plus </v-icon>
              </v-btn>
            </label>
            <input type="file" ref="uploader" hidden @change="onFileChanged" />
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
          <v-btn color="success" depressed> 등록하기 </v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
    <tool-bar-foot></tool-bar-foot>
  </v-app>
</template>

<script>
// 임시로 헤더, 푸터 추가
import ToolBarFoot from "@/components/ToolBarFoot.vue";
import ToolBarHeader from "@/components/ToolBarHeader.vue";
export default {
  components: {
    ToolBarHeader,
    ToolBarFoot,
  },
  data() {
    return {
      isSelecting: false,
      selectedFile: null,
      imageFileList: [],
    };
  },
  methods: {
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
      this.selectedFile = e.target.files[0];
      this.imageFileList.push(URL.createObjectURL(e.target.files[0]));
    },
  },
};
</script>

<style></style>
