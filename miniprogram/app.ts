import handleLogin from "./utils/login/login"

// app.ts
App<IAppOption>({
    globalData: {
        contentHeight: 44,
        navBarHeight: 0, // 导航栏高度
        menuRight: 0, // 胶囊距右方间距（方保持左、右间距一致）
        menuTop: 0, // 胶囊距底部间距（保持底部间距一致）
        menuHeight: 0, // 胶囊高度（自定义内容可与胶囊高度保证一致）
        menuWidth: 0, //胶囊宽度
    },
    onLaunch() {

        const that = this;
        this.globalData
        wx.getSystemInfo({
            success: (systemInfo) => {
                const menuButtonInfo = wx.getMenuButtonBoundingClientRect();

                // 获取导航栏位置信息
                that.globalData.navBarHeight = systemInfo.statusBarHeight + that.globalData.contentHeight;
                that.globalData.menuRight = systemInfo.screenWidth - menuButtonInfo.right;
                that.globalData.menuTop = menuButtonInfo.top;
                that.globalData.menuHeight = menuButtonInfo.height;
                that.globalData.menuWidth = menuButtonInfo.width;
                console.log(systemInfo.statusBarHeight);
            }
        });
        // 登录
        handleLogin()
    },
})