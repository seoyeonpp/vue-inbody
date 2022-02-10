<template>
    <v-container class="board-wrap">
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
            <p class="board-user">{{userName}}</p>
            <h3 class="board-title">{{boardTitle}}</h3>
            <div class="board-txt">
                {{boardTxt}}
            </div>
            <div class="board-info">
                <span>조회 <span class="view-count">9</span></span>
                <span><span class="post-date">1</span>일전</span>
            </div>
            <div class="board-comment">
                <v-textarea prepend-inner-icon="mdi-comment" label="댓글" rows="1"></v-textarea>
            </div>
            <div class="board-edit">
                <v-btn v-if="myBoard">
                    <router-link to="/BoardWrite">
                        수정
                    </router-link>
                </v-btn>
                <v-btn v-if="myBoard">
                    삭제
                </v-btn>
            </div>
        </div>
    </v-container>
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
            myBoard : true,
            userName : '작성자',
            boardTitle : '커뮤니티 제목',
            boardTxt : '어쩌구저쩌구 내용',
        }
    }
}
</script>

<style scoped>

</style>