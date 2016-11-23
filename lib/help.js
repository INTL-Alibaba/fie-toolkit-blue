'use strict';

var chalk = require('chalk');

module.exports = function(fie) {

  var help = `
    fie-toolkit-blue 使用帮助:

      $ fie start               开启本地服务器,进行开发调试
      $ fie start [name]        针对单个页面开启本地服务,可提升编译效率
      $ fie build               打包代码
      $ fie build [name]        针对单个页面进行打包,可提升编译效率
      $ fie publish             项目发布到CDN环境
      $ fie publish d           项目发布到daily环境

      $ fie add sp [name]       添加简单页面
      $ fie add lp [name]       添加带 layout 的简单页面
      $ fie add rd [name]       添加带 layout 及 redux 的简单页面
      $ fie add rp [name]       添加带 layout 及 redux、router 的复杂页面
      $ fie add rrp [topPageName]/[subPageName]    添加带复杂页面的子页面
      $ fie add data [name]     添加本地数据接口
      $ fie add c [name]        添加组件

      $ fie upgrade             将项目升级到最新的套件版本,解决大版本跨度大的问题
      $ fie open                打开项目地址
      $ fie help                显示套件帮助信息

  `;
  process.stdout.write( chalk.green(help) );
};
