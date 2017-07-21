<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-logo{
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
        font-size: 16px;
        text-align: center;
        line-height: 30px;
        color: aliceblue;
    }
    .layout-header{
        height: 60px;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        background-color: #f5f7f9;
        margin-top: 20px;
        color: #9ea7b4;
    }
    .layout-ceiling{
        background: #464c5b;
        padding: 10px 0;
        overflow: hidden;
    }
    .layout-ceiling-main{
        float: left;
        text-align: center;
    }
    .layout-ceiling-main a{
        color: #FFFFFF;
        margin-left: 15px;
        font-size: 18px;
    }
    .layout-content{
        background-color: #fff;
        padding-top: 20px;
        padding-bottom: 20px;
    }
    .resume-icon{
        position: absolute;
        width: 170px;
        height: 200px;
        background-size: 100% 100%;
        background-image: url("../img/noicon.png");
    }
    .resume-name{
        position: absolute;
        left: 190px;
        top: 10px;
        color: dimgray;
        font-size: 35px;
        font-weight: 600;
    }
    .resume-name span{
        font-size: 20px;
        font-weight: 600;
    }
    .resume-baseinfo{
        position: absolute;
        left: 190px;
        top: 80px;
        color: dimgray;
        font-size: 20px;
        font-weight: 600;
    }
    .resume-baseinfo-line{
        width: 100%;
        height: 2px;
        position: absolute;
        top: 240px;
        background-color: #464c5b;
    }
    .resume-timeline{
        position: absolute;
        top: 300px;
        left: 190px;
    }
    .content{
        font-size: 20px;
        color: dimgray;
    }
    .timeline-one-title{
        position: absolute;
        top: 290px;
        left: 10px;
        font-size: 20px;
        color: dimgray;
        font-weight: 600;
        color: #347DE3;
    }
    .timeline-two-title{
        position: absolute;
        top: 350px;
        left: 10px;
        font-size: 20px;
        color: dimgray;
        font-weight: 600;
        color: #347DE3;
    }
    .timeline-three-title{
        position: absolute;
        top: 400px;
        left: 10px;
        font-size: 20px;
        color: dimgray;
        font-weight: 600;
        color: #347DE3;
    }
    .timeline-four-title{
        position: absolute;
        top: 450px;
        left: 10px;
        font-size: 20px;
        color: dimgray;
        font-weight: 600;
        color: #347DE3;
    }
    .timeline-five-title{
        position: absolute;
        top: 500px;
        left: 10px;
        font-size: 20px;
        color: dimgray;
        font-weight: 600;
        color: #347DE3;
    }

    .timeline-six-title{
        position: absolute;
        top: 560px;
        left: 10px;
        font-size: 20px;
        color: dimgray;
        font-weight: 600;
        color: #347DE3;
    }

</style>
<template style="background-color: #FFFFFF">
    <div class="layout">
        <div class="layout-ceiling">
            <div class="layout-ceiling-main">
                <a @click="goBack()"><Icon type="chevron-left" size="18" color="#FFF"></Icon>&nbsp;文章列表</a>
            </div>
        </div>
        <div class="layout-header">
            <div class="layout-logo">{{title}}</div>
        </div>
        <!--内容区域-->
        <div class="layout-content">
            <!--简历区域-->
            <Card style="width:80%; margin-left: 10%;margin-bottom: 40px; padding: 15px 10px;">
                    <div style="position: relative; height: 900px; background-color: #FFF" >
                        <!--头像-->
                        <img class="resume-icon" src='https://github.com/waws80/myblog/blob/master/g.jpeg?raw=true'>
                        <span class="resume-name">我的名字&nbsp;&nbsp;<span>一句话介绍你自己</span></span>
                        <span class="resume-baseinfo">生日&nbsp;|&nbsp;所在城市&nbsp;|&nbsp;联系电话&nbsp;|&nbsp;电子邮箱</span>
                        <span class="resume-baseinfo-line"></span>

                        <Timeline class="resume-timeline">
                            <Timeline-item>
                                <Icon type="ios-personadd" slot="dot" size="35"></Icon>
                                <p class="time">&nbsp;</p>
                                <p class="content">Apple I 问世</p>
                            </Timeline-item>
                            <Timeline-item>
                                <Icon type="university" slot="dot" size="35"></Icon>
                                <p class="time">&nbsp;</p>
                                <p class="content">发布 Macintosh</p>
                            </Timeline-item>
                            <Timeline-item>
                                <Icon type="settings" slot="dot" size="35"></Icon>
                                <p class="time">&nbsp;</p>
                                <p class="content">发布 iPhone</p>
                            </Timeline-item>
                            <Timeline-item>
                                <Icon type="briefcase"  slot="dot" size="35"></Icon>
                                <p class="time">&nbsp;</p>
                                <p class="content">发布 iPad</p>
                            </Timeline-item>
                            <Timeline-item>
                                <Icon type="ios-heart" slot="dot" size="35"></Icon>
                                <p class="time">&nbsp;</p>
                                <p class="content">史蒂夫·乔布斯去世</p>
                            </Timeline-item>
                            <Timeline-item>
                                <Icon type="ios-compose" slot="dot" size="35"></Icon>
                                <p class="time">&nbsp;</p>
                                <p class="content">史蒂夫·乔布斯去世</p>
                            </Timeline-item>
                        </Timeline>

                        <span class="timeline-one-title">求职意向</span>
                        <span class="timeline-two-title">教育背景</span>
                        <span class="timeline-three-title">技能特长</span>
                        <span class="timeline-four-title">工作经验</span>
                        <span class="timeline-five-title">兴趣爱好</span>
                        <span class="timeline-six-title">自我评价</span>

                    </div>
            </Card>

        </div>
        <div class="layout-copy">
            Copyright &copy; 2017-2018 &nbsp; &nbsp; 陕ICP备17003857号
        </div>
    </div>
</template>
<script>

    export default {

        data () {
            return {
                spanLeft: 5,
                spanRight: 19,
                title: '我的简历'
            }
        },
        computed: {
            iconSize () {
                return this.spanLeft === 5 ? 14 : 24;
            },
            content_height () {
                return innerHeight-115-40;
            }

        },
        created: function () {
            this.$Notice.open({
                title: '朋友你好！',
                desc: "欢迎您的到来，阅读后想成为同事请联系我。我的邮箱是523928638@qq.com",
                duration: 0
            });
        },
        methods: {
            goBack () {
                this.$router.back()
            }
        }
    }
</script>
