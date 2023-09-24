<template>
  <wallpaper-plus color="208,233,242" type="snow">
    <el-button
        style="position: relative"
        @click="testDemoService.handleButtonClick()">
      测试
    </el-button>

    <el-form class="login-container" label-position="left" label-width="0px">
      <h3 class="login_title">袖珍网盘吧</h3>
      <el-form-item style="user-select: none;">
        <el-upload
            drag
            multiple
            ref="upload"
            :auto-upload="false"
            :action="testDemoService.url"
            :file-list="testDemoService.files"
            :on-change="testDemoService.changeFiles"
            :http-request="testDemoService.uploadFiles"
        >
          <i class="el-icon-upload avatar-uploader-icon-computer"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        </el-upload>
      </el-form-item>

      <el-form-item style="user-select: none;">
        <el-input type="text" v-model="testDemoService.userName" placeholder="请输入邮箱地址或用户名..."></el-input>
      </el-form-item>

      <el-form-item style="user-select: none;">
        <el-input type="password" v-model="testDemoService.password" placeholder="请输入密码..."></el-input>
      </el-form-item>

      <el-form-item style="user-select: none;">
        <el-input
            placeholder="请输入验证码..."
            style="width: 58%" type="text"
            v-model="testDemoService.validCode"
            @keyup.enter.native="testDemoService.judgeCode()"
        ></el-input>
        <valid-code
            ref="validCode"
            style="margin-left: auto;background-color: #f8f9fa;border-radius: 5px;"
        ></valid-code>
      </el-form-item>

      <el-form-item style="width: 100%">
        <el-button type="primary" style="width: 100%;background: #4169E1;border: none"
                   @click="testDemoService.connect()">连接websocket
        </el-button>
      </el-form-item>

      <el-form-item style="width: 100%">
        <el-button type="primary" style="width: 100%;background: #4169E1;border: none"
                   @click="testDemoService.disconnect()">关闭websocket
        </el-button>
      </el-form-item>

      <el-form-item style="width: 100%">
        <el-button type="primary" style="width: 100%;background: #4169E1;border: none" @click="testDemoService.login()">
          登录
        </el-button>
      </el-form-item>

      <el-form-item style="width: 100%">
        <el-button type="primary" class="button-border" @click="testDemoService.register()">还没有账号？</el-button>
      </el-form-item>

      <el-form-item style="width: 100%">
        <el-button type="primary" class="button-border-red" @click="testDemoService.reset()">忘记密码？</el-button>
      </el-form-item>

      <el-form-item style="width: 100%">
        <el-pagination
            @size-change="testDemoService.pageSizeChange"
            :page-size="testDemoService.pageSize"
            :total="testDemoService.totalRecord"
            @current-change="testDemoService.pageNumberChange"
            :current-page="testDemoService.pageNumber"
            layout="prev, pager, next"
            :pager-count="5"
            ref="pagination"
        ></el-pagination>
      </el-form-item>
    </el-form>
  </wallpaper-plus>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import ValidCode from "@/components/ValidCode.vue";
import WallpaperPlus from "@/components/WallpaperPlus.vue";
import {TestDemoService} from "@/common/service/TestDemoService";

export default defineComponent({
  name: "DemoTest",
  data() {
    return {
      testDemoService: new TestDemoService(this)
    }
  },
  mounted() {
    this.testDemoService.initData();
  },
  components: {
    ValidCode,
    WallpaperPlus,
  }
});
</script>

<style scoped>

:deep(.el-input--large .el-input__wrapper) {
  padding: 1px 0;
}

:deep(.el-input__inner) {
  padding: 0 15px;
  border-radius: 4px;
}

:deep(.el-input--large .el-input__wrapper) {
  padding: 1px 0;
}

:deep(.el-input__inner) {
  padding: 0 15px;
  border-radius: 4px;
}

/deep/ .el-upload-list__item-name:hover {
  color: #606266;
}

/deep/ .el-upload-list__item-name {
  color: white;
}

/deep/ .el-upload-dragger {
  width: 330px;
}

.button {
  width: 100px;
  height: 20px;
  position: relative;
}

.login-container {
  width: 330px;
  margin: 90px auto;
  position: relative;
  border-radius: 15px;
  border: 1px solid #eaeaea;
  padding: 35px 35px 15px 35px;
  background-clip: padding-box;
  background: rgba(0, 0, 0, 0.4);
  box-shadow: 0 0 25px rgba(155, 89, 182, .5);
}

.login_title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #f3f9f1;
  user-select: none;
  font-size: 32px;
  font-weight: 500;
}

.button-border {
  width: 100%;
  background: rgba(45, 45, 45, 0.33);
  /*   border: none; */
  border: 1px solid #40E0D0;
  /*   box-shadow: 0 0 25px rgba(155,89,182,.5); */
  /*   box-shadow: 0 0 25px rgba(64,224,208,.5); */
}

.button-border:hover {
  width: 100%;
  background: rgba(45, 45, 45, 0.33);
  /*   border: none; */
  border: 1px solid #40E0D0;
  /*   box-shadow: 0 0 25px rgba(155,89,182,.5); */
  box-shadow: 0 0 25px rgba(64, 224, 208, .5);
}

.button-border-red {
  width: 100%;
  background: rgba(45, 45, 45, 0.33);
  border: 1px solid #E74C3C;
}

.button-border-red:hover {
  width: 100%;
  background: rgba(45, 45, 45, 0.33);
  border: 1px solid #E74C3C;
  box-shadow: 0 0 25px rgba(236, 112, 99, .5);
}
</style>