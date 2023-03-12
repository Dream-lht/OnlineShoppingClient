/**
 * 处理登录操作
 */
import { login } from "@api/login";
import { getUserInfo } from "@api/user"
function handleLogin() {
    // 登录

    wx.login({
        success: async (res) => {
            // 发送 res.code 到后台换取 openId, sessionKey, unionId
            const loginInfo = await login({ code: res.code });
            // 将token保存到缓存当中
            const { token, openid, session_key } = loginInfo.data[0];
            wx.setStorageSync('token', token);
            console.log(loginInfo);
            // 判断用户是否需要注册
            if (!loginInfo.data[0].isRegister) {
                console.log("跳转");
                // 需要注册，跳转登录页面
                wx.navigateTo({
                    'url': `/pages/login/index?openid=${openid}&sessionKey=${session_key}`,
                    fail:(err) => {
                        console.log(err);
                    }
                })
            } else {
                // 不需要注册，直接获取用户信息
                const userInfo = await getUserInfo(openid);
                console.log(userInfo);
            }

        },
        fail: (err) => {
            console.log(err);
        }
    })
}

export default handleLogin;

