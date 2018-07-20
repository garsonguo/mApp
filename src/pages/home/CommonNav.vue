<template>
    <div class="commonNav">
        <div class="header">
            常用
        </div>
        <div class="body">
            <div class="panel">
                <div class="item">
                    <div class="logo green">
                        <i class="iconfont icon-daiban"></i>
                    </div>
                    <div class="logoName">
                        待办案卷
                    </div>
                </div>
            </div>
            <div class="panel">
                <div class="item">
                    <div class="logo blue">
                        <i class="iconfont icon-shouwen"></i>
                    </div>
                    <div class="logoName">
                        公文收文
                    </div>
                </div>
            </div>
            <div class="panel">
                <div class="item">
                    <div class="logo red">
                        <i class="iconfont icon-fawen"></i>
                    </div>
                    <div class="logoName">
                        公文发文
                    </div>
                </div>
            </div>
            <div class="panel">
                <div class="item">
                    <div class="logo yellow">
                        <i class="iconfont icon-yuewen"></i>
                    </div>
                    <div class="logoName">
                        公共阅文
                    </div>
                </div>
            </div>
            <div class="panel">
                <div class="item">
                    <div class="logo red">
                        <i class="iconfont icon-youxiang"></i>
                    </div>
                    <div class="logoName">
                        内部邮件
                    </div>
                </div>
            </div>
            <div class="panel">
                <div class="item">
                    <div class="logo yellow">
                        <i class="iconfont icon-jingdianwanfa"></i>
                    </div>
                    <div class="logoName">
                        政务信息
                    </div>
                </div>
            </div>
            <div class="panel"></div>
            <div class="panel"></div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style scoped lang='less'>
.commonNav{
    .header{
        height: 82px;
        line-height: 82px;
        border-bottom: 1px solid #ddd;
        padding-left: 20px;
        font-size: 32px; /*px*/
    }
    .body{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        text-align: center;
        .panel{
            position: relative;
            width: 25%;
            box-sizing: border-box;
            height: 208px;
            border-right: 1px solid #ddd;
            border-bottom: 1px solid #ddd;
            &:nth-child(4n){
                border-right: 0;
            }
            .item{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
                .logo{
                    height: 100px;
                    line-height: 100px;
                    width: 100px;
                    margin: auto;
                    margin-bottom: 20px;
                    border-radius: 10px;
                    .iconfont{
                        font-size: 58px;
                        color: #fff;
                    }
                }
            }
        }
    }
}
</style>
