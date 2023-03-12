// pages/login/index.ts
import handleRegister from "@utils/login/register";

Page({

    /**
     * 页面的初始数据
     */
    data: {
        openid: '',
        session_key: '',
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(opt: any) {
        //   小程序登录
        this.setData({ openid: opt.openid })
        this.setData({ session_key: opt.sessionKey })
    },
    // 微信注册
    handleRegister() {
        console.log("点击");
        handleRegister(this.data.openid, this.data.session_key);
    }
})