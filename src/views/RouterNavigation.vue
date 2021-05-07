<template>
    <button type="button" @click="getRoute">getRoute</button>
    <button type="button" @click="push">push</button>
    <button type="button" @click="replace">replace</button>
    <button type="button" @click="go">go</button>
    <hr>
    <button type="button" @click="addRoute">addRoute</button>
    <hr>
    <h2> 導航守衛練習 </h2>
    <div>點擊 「登入驗證按鈕」按鈕，更改 meta data。</div>
    <div class="btn-group mt-2">
        <button class="btn btn-outline-primary" type="button" @click="loginAuthenticated">
            登入驗證按鈕</button>
        <button class="btn btn-outline-primary" type="button" @click="gotoLogin">登入</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isAuthenticated: false,
        };
    },
    methods: {
        loginAuthenticated() {
            this.$route.meta.needLogin = true;
        },
        gotoLogin() {
            this.$router.replace({ name: 'Login' });
        },
        push() { // 包含歷史紀錄(會記錄到瀏覽器的行為裡)
            this.$router.push('/newpage/dynamicRouter/fea8be3e64777240');
        },
        replace() { // 沒有歷史
            this.$router.replace({ name: 'About' });
        },
        go() { // 操作歷史紀錄 格式：正數下面頁，複數上面頁
            this.$router.go(-1);
        },
        addRoute() { // 延伸介紹，臨時新增路由表物件
            this.$router.addRoute({
                path: '/newAbout',
                name: 'newAbout',
                component: () => import('./About.vue'),
            });
        },
        getRoute() { // 取得常用參數
            // 取得路由的屬性
            console.log(this.$route);
            // this.$route.fullPath;
            // 呼叫路由的方法
            // this.$router.go(-1);
            console.log(this.$router);
        },
    },
    mounted() {
        this.isAuthenticated = this.$route.meta.needLogin;
    },
};
</script>
