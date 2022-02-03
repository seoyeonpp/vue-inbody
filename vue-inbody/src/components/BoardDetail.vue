<template>
    <div class="board-wrap">
        <tool-bar-header></tool-bar-header>
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
        <div class="board-conts">
            <p class="board-writer">닉네임</p>
            <h3 class="board-title">게시판 타이틀</h3>
            <div class="board-txt">
                내용
            </div>
        </div>
        <tool-bar-foot></tool-bar-foot>
    </div>
</template>

<script>
// 임시로 헤더, 푸터 추가
import ToolBarHeader from '@/components/ToolBarHeader.vue';
import ToolBarFoot from '@/components/ToolBarFoot.vue';

export default {
    components: {
        ToolBarHeader,
        ToolBarFoot
    },
    data () {
        return {
            items: [
                {
                    src: 'https://images.pexels.com/photos/6551070/pexels-photo-6551070.jpeg?cs=srgb&dl=pexels-andres-ayrton-6551070.jpg&fm=jpg',
                },
                {
                    src: 'https://images.pexels.com/photos/6975488/pexels-photo-6975488.jpeg?cs=srgb&dl=pexels-shvets-production-6975488.jpg&fm=jpg',
                },
                {
                    src: 'https://images.pexels.com/photos/7801526/pexels-photo-7801526.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                },
                {
                    src: 'https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                },
            ],

        }
    }
}
</script>

<style scoped>

</style>