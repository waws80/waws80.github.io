<style scoped>

    *{
        margin: 0;
        padding: 0;
    }
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-breadcrumb{
        padding: 10px 15px 0;
    }
    .layout-content{
        width: 100%;
        min-height: 200px;
        margin: 15px 15px;
        padding: 20px 20px;
        overflow: scroll;
        background: #fff;
        border-radius: 4px;
    }
    .layout-content-main{
        padding: 10px;
        float: left;
        width: 90%;
        overflow-y: scroll;
        z-index: 1000;
    }
    .item{
        width: 95%;
        margin: 20px 20px;
    }

    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
    .layout-menu-left{
        background: #464c5b;
    }
    .layout-header{
        height: 60px;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 100%;
        height: 30px;
        text-align: center;
        color: aliceblue;
        line-height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
    .layout-ceiling-main a{
        color: #9ba7b5;
    }
    .layout-hide-text .layout-text{
        display: none;
    }
    .ivu-col{
        transition: width .2s ease-in-out;
    }
</style>
<template>
    <div class="layout" :class="{'layout-hide-text': spanLeft < 5}">
        <Row type="flex">
            <i-col :span="spanLeft" class="layout-menu-left">
                <Menu active-name="1" theme="dark" width="auto">
                    <div class="layout-logo-left">菜单栏</div>
                    <Menu-item name="1">
                        <Icon type="document-text" :size="iconSize"></Icon>
                        <span class="layout-text" @click="addText">文章列表</span>
                    </Menu-item>
                    <Menu-item name="2">
                        <Icon type="plus-circled" :size="iconSize"></Icon>
                        <span class="layout-text" @click="addText">添加文章</span>
                    </Menu-item>
                    <Menu-item name="3">
                        <Icon type="person" :size="iconSize"></Icon>
                        <span class="layout-text" @click="goResume">个人简历</span>
                    </Menu-item>
                    <Menu-item name="4">
                        <Icon type="android-send" :size="iconSize"></Icon>
                        <span class="layout-text" @click="goCSDN">CSDN</span>
                    </Menu-item>
                </Menu>
            </i-col>
            <i-col :span="spanRight">
                <div class="layout-header">
                    <i-button type="text" @click="toggleClick">
                        <Icon type="navicon" size="32"></Icon>
                    </i-button>
                </div>
                <div class="layout-breadcrumb">
                    <Breadcrumb>
                        <Breadcrumb-item >文章区域</Breadcrumb-item>
                    </Breadcrumb>
                </div>
                <div class="layout-content" v-bind:style="{height: content_height+'px'}">
                    <div class="layout-content-main">

                        <li v-for="item in content_data">
                            <Card class="item">
                                <p slot="title">
                                    <Icon type="pricetags"></Icon>
                                    {{item.title}}
                                </p>
                                <a slot="extra" @click="showMsg">
                                    <Icon type="bookmark"></Icon>
                                    {{item.labels[0] == undefined ? "个人" : item.labels[0].name}}
                                </a>
                                <ul>
                                    <a :href="item.html_url" style="word-wrap:break-word;">{{item.body.length >80 ? item.body.substr(0,70)+"..." : item.body}}</a>

                                </ul>
                            </Card>

                        </li>




                    </div>
                </div>
                <div class="layout-copy">
                    Copyright &copy; 2017-2018 &nbsp; &nbsp; 陕ICP备17003857号
                </div>
            </i-col>
        </Row>
    </div>
</template>
<script>
    //https://api.github.com/search/issues?q=user:waws80+state:open&sort=created&order=asc
const  path = 'issues?q=user:waws80+state:open&sort=created&order=asc';

    export default {
        data () {
            return {
                spanLeft: 5,
                spanRight: 19,
                content_data: ""
            }
        },
        computed: {
            iconSize () {
                return this.spanLeft === 5 ? 14 : 24;
            },
            content_height () {
                return innerHeight-92-80;
            }

        },
        created: function () {
            const context = this;

            this.$Notice.open({
                title: '朋友你好！',
                desc: "欢迎您的到来，阅读后有什么建议请联系我。我的邮箱是523928638@qq.com",
                duration: 0
            });

            this.$http.get(path).then(function (response) {
                context.content_data =  response.data.items
            })

        },
        methods: {
            toggleClick () {
                if (this.spanLeft === 5) {
                    this.spanLeft = 2;
                    this.spanRight = 22;
                } else {
                    this.spanLeft = 5;
                    this.spanRight = 19;
                }
            },

            goCSDN () {
                location.href = "http://blog.csdn.net/qq_16070781"
            },

            addText () {
                location.href = "https://github.com/waws80/myblog/issues"
            },

            goResume () {
                this.$router.push("/resume")
            },

            showMsg () {
                this.$Message.info('我是一个标签');
            }
        }
    }
</script>