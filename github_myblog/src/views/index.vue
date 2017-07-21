<style scoped>
    .index {
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        text-align: center;
    }

    .index h1 {
        height: 150px;
    }

    .index h1 img {
        height: 100%;
    }

    .index h2 {
        color: #666;
        margin-bottom: 200px;
    }

    .index h2 p {
        margin: 0 0 50px;
    }

    .index .ivu-row-flex {
        height: 100%;
    }
    .index img{
        border-radius: 1000px;
    }

    .index h2{
        margin-top: 40px;
    }
</style>
<template>
    <div class="index">
        <Row type="flex" justify="center" align="middle">
            <Col span="24">
                <h1>
                    <img src="https://github.com/waws80/myblog/blob/master/g.jpeg?raw=true">
                </h1>
                <h2>
                    <p>欢迎来到我的博客</p>
                    <Button type="ghost" @click="handleStart">首页</Button>
                </h2>
            </Col>
        </Row>
    </div>
</template>
<script>




    export default {

        created: function () {
            // `this` 指向 vm 实例
            const self = this;
            setTimeout(function () {
                self.$router.push("/main");
            },5000);


        },

        methods: {

            handleStart() {

                this.$router.push("/main");
//                this.$Modal.info({
//                    title: 'Bravo',
//                    content: 'Now, enjoy the convenience of iView.'
//                });
            }


        }

    };


</script>