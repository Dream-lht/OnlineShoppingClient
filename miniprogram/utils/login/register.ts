/**
 * 注册逻辑
 */
import { register } from "@api/login";
function handleRegister(openid: any, session_key: any) {
    // 需要重新注册
    wx.getUserProfile({
        desc: "获取用户信息",
        success: async (res) => {
            // 发送注册请求
            const registerData = {
                encryptedData: res.encryptedData,
                iv: res.iv,
                rawData: res.rawData,
                signature: res.signature,
                openid: openid,
                session_key: session_key,
            }
            await register(registerData);
            wx.showToast({
                title: "登录成功",
                icon: 'success',
                duration: 1000,
                success: () => {
                    // 返回上一个页面
                    wx.navigateBack({
                        delta:1
                    })
                }
            })
        },
        fail: () => {
            // 取消授权
            wx.showToast({
                title: "登录失败",
                icon: 'none',
                duration: 1000
            })
        }
    })


}

export default handleRegister;