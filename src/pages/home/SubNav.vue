<template>
    <div class="subNav">
        <div class="panel">
            <div class="logo">10</div>
            <div class="logoName">
                待我办理
            </div>
        </div>
        <div class="panel">
            <div class="logo">4</div>
            <div class="logoName">
                新邮件
            </div>
        </div>
        <div class="panel">
            <div class="logo">
                <i class="iconfont icon-shijian"></i>
            </div>
            <div class="logoName">
                登录时间
            </div>
        </div>
        <div class="panel">
            <div class="logo">
                <i class="iconfont icon-rili"></i>
            </div>
            <div class="logoName">
                日程安排
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'SubNav'
}
</script>

<style scoped lang='less'>
.subNav{
    display: flex;
    height: 202px;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    border-bottom: 1px solid #ddd;
    border-top: 1px solid #ddd;
    margin-top: 10px;
    .panel{
        flex: 1;
        border-right: 1px solid #ddd;
        &:last-child{
            border-right: 0;
        }
        .logo{
            //转换为rem会导致radius时边框糊掉
            border: 1px solid #ddd;/*px*/
            height: 80px;
            width: 80px;
            line-height: 80px;
            margin: auto;
            margin-bottom: 20px;
            border-radius: 10px;
            font-size: 56px;
            color: #101010;
            .iconfont{
                display: block;
            }
        }
        .logoName{
            color: #666666;
        }
    }
}
</style>
