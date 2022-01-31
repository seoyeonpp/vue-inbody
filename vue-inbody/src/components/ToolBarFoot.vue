<template>
    <v-bottom-navigation
        v-model="value"
        :background-color="color"
        dark
        shift
        absolute
     >
        <v-btn>
            <span>헬스리포트</span>
            <v-icon>mdi-format-list-bulleted-square</v-icon>
        </v-btn>

        <v-btn>
            <span>커뮤니티</span>
            <v-icon>mdi-message-text</v-icon>
        </v-btn>

        <v-btn>
            <span>더보기</span>
            <v-icon>mdi-dialpad</v-icon>
        </v-btn>
    </v-bottom-navigation>
</template>

<script>
export default {
    data: () => ({ value: 1 }),
    computed: {
      color () {
        switch (this.value) {
          case 0: return 'indigo'
          case 1: return 'teal'
          case 2: return 'brown'
          default: return 'indigo'
        }
      },
    },
}
</script>

<style>

</style>