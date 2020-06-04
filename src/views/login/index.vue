<template>
  <div id="login">
    <img
      alt=""
      class="login-backgroud-img"
      src="../../assets/images/login-backgroud-image.jpg"
    />
    <div class="login-from">
      <a-form-model
        :layout="form.layout"
        :model="form"
        class="form-model"
        v-bind="formItemLayout"
      >
<!--        <h1>登录</h1>-->
        <div class="icon-list">
          <a>
            <a-icon
              :style="{ fontSize: style.iconfontSize }"
              theme="filled"
              type="qq-circle"
            />
          </a>
          <a>
            <a-icon
              :style="{ fontSize: style.iconfontSize }"
              theme="filled"
              type="wechat"
            />
          </a>
          <a>
            <a-icon
              :style="{ fontSize: style.iconfontSize }"
              theme="filled"
              type="github"
            />
          </a>
        </div>
        <p class="hint-text">选择以上方式登录或使用您的账号</p>
        <a-input placeholder="请输入用户名" autocomplete="new-password" v-model="form.username">
          <a-icon slot="prefix" type="user" />
        </a-input>
        <a-input-password placeholder="请输入密码" autocomplete="new-password" v-model="form.password">
          <a-icon slot="prefix" type="user" />
        </a-input-password>
        <a-button type="primary">
          登录
        </a-button>
      </a-form-model>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      style: {
        iconfontSize: "32px"
      },

      form: {
        layout: "horizontal",
        username: "",
        password: ""
      },
      userName: ""
    };
  },
  computed: {
    formItemLayout() {
      const { layout } = this.form;
      return layout === "horizontal"
        ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 }
          }
        : {};
    },
    buttonItemLayout() {
      const { layout } = this.form;
      return layout === "horizontal"
        ? {
            wrapperCol: { span: 14, offset: 4 }
          }
        : {};
    }
  },
  methods: {
    emitEmpty() {
      this.$refs.userNameInput.focus();
      this.userName = "";
    }
  }
};
</script>

<style lang="less" scoped>
#login {
  font-family: Arial, Helvetica, sans-serif;
  background: #f6f5f7;
  display: flex;
  /*让元素沿垂直主轴从上到下垂直排列*/
  flex-direction: column;
  /*元素不换行*/
  flex-wrap: nowrap;
  /*元素在主轴（页面）上居中排列*/
  justify-content: center;
  /*元素居中对齐*/
  align-items: center;
  height: 100vh;
}

.login-backgroud-img {
  position: absolute;
  width: 100%;
  height: 100%;
}

.login-from {
  border-radius: 5%;
  width: 384px;
  height: 480px;
  background-color: rgba(255, 254, 249, 0.6);
  z-index: 2;
  .hint-text{
    font-size: 15px;
    font-weight: 900;
    font-family: inherit;
  }
  button {
    width: 100%;
    margin: 5px 0;
  }
  /*&:hover {*/
  /*  background: rgba(39, 60, 125, 0.5);*/
  /*}*/
  .form-model {
    span {
      margin: 5px 0;
    }

    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    text-align: center;
    flex-direction: column;
    padding: 0 30px;

    .icon-list {
      margin: 5px 0;
    }

    a {
      color: @main-color;
      margin: 0 5px;
    }

    a:hover {
      color: #1890ff;
    }

    h1 {
      font-size: 25px;
      font-weight: 900;
      margin: 10px 0;
    }
  }
}
</style>
