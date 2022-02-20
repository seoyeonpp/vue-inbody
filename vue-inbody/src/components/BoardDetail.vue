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
                <span>조회 <span class="view-count">{{viewCount}}</span></span>
                <span><span class="post-date">{{postDate}}</span>일전</span>
            </div>
            <div class="board-comment">
                <v-textarea prepend-inner-icon="mdi-comment" label="댓글" rows="1" v-model="comment" placeholder="댓글을 입력해보세요" v-on:keyup.enter="pushComment"></v-textarea>
                <div id="commentList"></div>
            </div>
            <div class="board-edit">
                <v-btn v-if="myBoard">
                    <router-link to="/BoardWrite">
                        수정
                    </router-link>
                </v-btn>
                <v-btn v-if="myBoard" @click="getData"> <!-- 테스트 중 -->
                    삭제
                </v-btn>
            </div>
        </div>
    </v-container>
</template>

<script>
import {mapActions} from 'vuex';
import axios from 'axios';

export default {
    name: "BoardDetail",
    components: {
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
            myBoard: true,
            userName: '',
            boardTitle: '',
            boardTxt: '',
            viewCount: 0,
            postDate: 0,
            comment: ''
        }
    },
    methods: {
        getData() {
            let user = {};
            user.userName = this.userName;

            axios.get(
                'http://18.191.222.197:8080/timeline/2',
                `userNickname=${this.nick}&`
            )
            .then((data)=>{
                console.log(data);
            })
            .catch(error => {
                console.error(error);
            });
        },
        pushComment (){
            if(this.comment.trim() == ''){
                alert('댓글을 입력하세요');
            }else{
                const newComment = document.createElement('p');
                newComment.setAttribute('class','comments-list')
                newComment.innerHTML = this.comment;
                document.getElementById('commentList').appendChild(newComment);
                this.comment = '';
            }
            console.log('댓글등록');
        }
    }
}
</script>