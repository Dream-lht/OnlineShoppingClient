// index.ts
// const app = getApp<IAppOption>()

import {tabsConfig} from "./config";

Page({
  data: {
   active:0,
   tabsConfig:tabsConfig
  },
  
  onLoad() {
    console.log(this.data.tabsConfig)
  },

  /**
   * 处理用户点击事件
   */
})
