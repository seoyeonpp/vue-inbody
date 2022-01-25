<template>
    <div class="componentLayout">
        <div class="cptTable">
            <table>
                <tr>
                    <th>Text</th>
                </tr>
                <tr>
                    <td>
                        <p style="font-weight:100;font-size:20px;">Hello, World font-weight:100;</p>
                        <p style="font-weight:200;font-size:20px;">Hello, World font-weight:200;</p>
                        <p style="font-weight:300;font-size:20px;">Hello, World font-weight:300;</p>
                        <p style="font-weight:400;font-size:20px;">Hello, World font-weight:400;</p>
                        <p style="font-weight:600;font-size:20px;">Hello, World font-weight:600;</p>
                        <p style="font-weight:800;font-size:20px;">Hello, World font-weight:800;</p>
                        <p style="font-weight:900;font-size:20px;">Hello, World font-weight:900;</p>
                    </td>
                </tr>
                <tr>
                    <th>BUTTON</th>
                </tr>
                <tr>
                    <td>
                        <strong>default</strong>
                        <v-btn elevation="2">BUTTON</v-btn>
                        <br /><br />
                        <strong>X small</strong>
                        <v-btn elevation="2" x-small>BUTTON</v-btn>
                        <br /><br />
                        <strong>small</strong>
                        <v-btn elevation="2" small>BUTTON</v-btn>
                        <br /><br />
                        <strong>large</strong>
                        <v-btn elevation="2" large>BUTTON</v-btn>
                        <br /><br />
                        <strong>X large</strong>
                        <v-btn elevation="2" x-large>BUTTON</v-btn>
                    </td>
                </tr>
                <tr>
                    <th>Design Button</th>
                </tr>
                <tr>
                    <td>
                        <v-btn elevation="2" large>
                            <v-icon color="primary" dense>+ 검사기록</v-icon>
                        </v-btn>
                        &nbsp;&nbsp;
                        <font-awesome-icon icon="running" size="3x" />
                        &nbsp;&nbsp;
                        <font-awesome-icon icon="comments" size="3x" />
                        &nbsp;&nbsp;
                        <font-awesome-icon icon="comment-dots" size="3x" />
                        &nbsp;&nbsp;
                        <font-awesome-icon icon="user" size="3x" />
                        &nbsp;&nbsp;
                        <font-awesome-icon icon="clipboard-list" size="3x" />
                    </td>
                </tr>
                <tr>
                    <th>tabs</th>
                </tr>
                <tr>
                    <td>
                        <v-tabs>
                            <v-tab>Item One</v-tab>
                            <v-tab>Item Two</v-tab>
                            <v-tab>Item Three</v-tab>
                        </v-tabs>
                    </td>
                </tr>
                <tr>
                    <th>Date picker (year only)</th>
                </tr>
                <tr>
                    <td>
                        <v-date-picker type="year">
                        </v-date-picker>
                    </td>
                </tr>
                <tr>
                    <th>Pagination</th>
                </tr>
                <tr>
                    <td>
                        <v-pagination
                            v-model="page"
                            :length="4"
                            circle
                        ></v-pagination>
                    </td>
                </tr>
                <tr>
                    <th>Input</th>
                </tr>
                <tr>
                    <!-- validation input -->
                    <td>
                        <v-text-field :rules="rules"></v-text-field>
                    </td>
                </tr>
                <tr>
                    <th>radio button</th>
                </tr>
                <tr>
                    <td>
                        <v-radio-group
                            v-model="row"
                            row
                            >
                            <v-radio
                                label="여성"
                                value="female"
                            ></v-radio>
                            <v-radio
                                label="남성"
                                value="male"
                            ></v-radio>
                        </v-radio-group>
                    </td>
                </tr>
                <tr>
                    <th>커뮤니티 게시판</th>
                </tr>
                <tr>
                    <td>
                        <v-card>
                            <v-toolbar
                            flat
                            color="blue"
                            dark
                            >
                            <v-toolbar-title>후기를 남겨주세요</v-toolbar-title>
                            </v-toolbar>
                            <v-card-text>
                            <v-text-field
                                filled
                                label="제목"
                                value="My new post"
                            ></v-text-field>
                            <v-textarea
                                filled
                                label="내용"
                                value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse"
                            ></v-textarea>
                            <v-divider class="my-2"></v-divider>
                            <v-item-group multiple>
                                <v-subheader>태그</v-subheader>
                                <v-item
                                v-for="n in 8"
                                :key="n"
                                v-slot="{ active, toggle }"
                                >
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
                            <v-btn
                                color="success"
                                depressed
                            >
                                등록하기
                            </v-btn>
                            </v-card-actions>
                        </v-card>
                    </td>
                </tr>
                <tr>
                    <th>커뮤니티 후기사진 슬라이드</th>
                </tr>
                <tr>
                    <td>
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
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: "uiComponents",
    data () {
        return {
            page: 1,
            rules: [
                value => !!value || 'Required.',
                value => (value || '').length <= 20 || 'Max 20 characters',
                value => {
                const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                return pattern.test(value) || 'Invalid e-mail.'
                },
            ],
            row: null,
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
    },
}
</script>

<style scoped>
.componentLayout {padding:10px 10px 100px;}
.componentLayout table {width:100%;border:1px solid #eee;border-collapse:collapse;}
.componentLayout table th {border:1px solid #dddddd;padding:0.5rem;text-align:center;font-weight:bold;color:#111;}
.componentLayout table td {border:1px solid #dddddd;padding:0.5rem;}
.componentLayout table td > strong {display:inline-block;width:100%;margin:0 0 5px;}
.componentLayout table td button {vertical-align:top;}
.componentbox {display:inline-block;padding:.2rem;color:#ffffff;font-size:12px;background-color:#111111;}
.componentbox.cb1 {background-color:#6d6d6d}
.componengraytbox {display:inline-block;padding:.2rem;color:#ffffff;font-size:12px;background-color:#cccccc;}
.componengraytbox.cb1 {background-color:#a3a3a3}
.componentgreenbox {display:inline-block;padding:.2rem;font-size:12px;background-color:#00a46c;}
.componentgreenbox.cgb1 {background-color:#5dffc8}
.componentgreenbox.cdb1 {background-color:#087d55}
.componentbluebox {display:inline-block;padding:.2rem;font-size:12px;background-color:#3079ff;}
.componentbluebox.cbb1 {background-color:#e8f0ff}
.componentbluebox.cdb1 {background-color:#1c5ed5}
</style>