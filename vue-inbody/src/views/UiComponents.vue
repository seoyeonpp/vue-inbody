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
                    <th>Color Chip</th>
                </tr>
                <tr>
                <td>
                    <div class="componentbox">#111111 기본 검정 $blackColor</div>&nbsp;
                    <div class="componentbox cb1">lighten($blackColor, $cPX36)</div>
                    <br />
                    <div class="componengraytbox">#cccccc 기본 회색 $grayColor</div>&nbsp;
                    <div class="componengraytbox cb1">darken($grayColor, $cPX16)</div>
                    <br />
                    <br />
                    <div class="componentgreenbox">#00a46c 기본 녹색 $greenColor</div>&nbsp;
                    <div class="componentgreenbox cgb1">lighten($greenColor, $cPX36)</div>
                    <br />
                    <div class="componentgreenbox cdb1">#087d55 어두운 녹색 $darkGreenColor</div>
                    <br />
                    <br />
                    <div class="componentbluebox">#3079ff 기본 파란색 $blueColor</div>&nbsp;
                    <div class="componentbluebox cbb1">lighten($blueColor, $cPX36)</div>
                    <br />
                    <div class="componentbluebox cdb1">#1c5ed5 어두운 파란색 $darkBlueColor</div>
                    <br />
                    <br />
                    이외의 색상 코드는 각 UI 별로 각각 적용하도록 함
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