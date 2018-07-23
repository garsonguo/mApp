<template>
    <div class="myInfo">
        <div class="myImg">
            <img src="../../../static/imgs/head.jpg" alt="头像">
        </div>
        <div class="myFunc">
            <div class="info">
                <span class="name">郭晓波</span>
                <span class="func">国土事业部</span>
            </div>
            <div class="tel">
                18627185963
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'MyInfo'
}
</script>

<style scoped lang='less'>
.myInfo{
    height: 400px;
    overflow: hidden;
    margin: 20px;
    border: 1px solid #ddd;/*px*/
    border-radius: 10px;
    position: relative;
    .myImg{
        float: left;
        margin: 40px;
        img{
            width: 200px;
            height: 200px;
            border-radius: 50%;
            border: 1px solid #ddd;/*px*/
        }
    }
    .myFunc{
        position: absolute;
        right: 20px;
        bottom: 20px;
        div{
            height: 80px;
            line-height: 80px;
            font-size: 32px;/*px*/
            span{
                margin: 10px;
            }
        }
    }
}
</style>
