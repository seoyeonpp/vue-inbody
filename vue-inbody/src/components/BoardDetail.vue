<template>
  <div id = "">
    <v-carousel
        cycle
        height="400"
        hide-delimiter-background
        show-arrows-on-hover
        >
        <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        >
        </v-carousel-item>
    </v-carousel>
    <!-- 미완성.... -->
    <p>닉네임</p>
    <div> 게시판 타이틀</div>
    <div>
        내용
    </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            items: [
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
                },
                {
                    src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
                },
            ],

        }
    }
}
</script>

<style scoped>

</style>