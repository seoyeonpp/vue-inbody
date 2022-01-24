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
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: "uiComponents",
    
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