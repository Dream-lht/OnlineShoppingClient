/// <reference path="./types/index.d.ts" />

interface IAppOption {
  globalData: {
    userInfo?: WechatMiniprogram.UserInfo,
    navBarHeight?:number | undefined,
    menuRight?:number | undefined,
    contentHeight:number,
    menuTop?:number | undefined,
    menuHeight?:number | undefined,
    menuWidth?:number | undefined
  }
  userInfoReadyCallback?: WechatMiniprogram.GetUserInfoSuccessCallback,
}