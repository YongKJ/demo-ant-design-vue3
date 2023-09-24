import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import VueCookies from 'vue3-cookies'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import 'element-plus/dist/index.css';
import {ElementUI} from "@/common/config/ElementUI";
import 'ant-design-vue/dist/reset.css';
import {AntDesign} from "@/common/config/AntDesign";

NProgress.configure({easing: 'ease', speed: 500, showSpinner: false});

router.beforeEach((to, from, next) => {
  NProgress.start();
  switch (to.path) {
    case "/test":
    case "/demo":
    case "/design":
      document.title = (<Record<string, any>>to.meta).title;
      next();
      break;
    case "/":
      next();
      break;
    default:
      next({path: "/"});
  }
});

router.afterEach(() => {
  NProgress.done();
});

createApp(App)
    .use(router)
    .use(ElementUI)
    .use(AntDesign)
    .use(VueCookies)
    .mount('#app')
