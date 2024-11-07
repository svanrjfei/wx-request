# wx-requset
> 突破小程序网络请求限制黑科技
> 让你更自由地请求任意网站数据


## 简介
**该项目适用于：ip访问、http 80端口访问、自定义端口访问、未备案域名等场景**

## 安装
### 部署云函数

项目分为两部分，一个是我们的云函数代码  
首先需要注册一个腾讯云的账号，然后搜索云函数，新用户会免费送三个月。  

选择函数服务 ==> 新建 ==> 函数名称随意运行环境选择nodejs16 ==> 选择本地上传zip包将本项目上传即可（可以选择启用日志）

![](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/0aee0b54d51fb288b9b92f1391c9a15f1feed534.png)


新建完成后记得查看访问路径


![](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/400fe6bede5c9d9a1fe4d6f73a7e25cbae8f9e9c.png)

### 部署客户端

另一个文件，就是主目录下的`wx-request.js`文件，这个是运行在我们小程序里的SDK客户端文件。    
我们把它放入小程序的目录，如`utils/`目录中，然后在`app.js`文件中进行`require`加载即可：

![](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/b845802f00ac31649fbca44586b318bee624f6df.png)


此处URL需改为自己云函数的访问路径


![](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/4a7d73da1f1ecec2b9dc1a530326a61a04d00a54.png)

## 使用

通过上边的部署，我们已经可以在小程序的任意位置进行使用我们的`wx-request`黑科技了！    
使用方法很简单，和[wx.request](https://developers.weixin.qq.com/miniprogram/dev/api/wx.request.html)官方API的用法基本保持一致    
我们只需要把原来的`wx.request`改成`wx.wxrequest`即可。

### GET请求例子


```js    
wx.wxrequest({
  url: 'https://mssnn.cn',
  success: res => {
    console.log(res.data);
  }
})
```

返回的数据：

![](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/a3c6e336943022d05b5922fe08ea7110f319c97d.png)

### POST请求例子

``` js
 wx.wxrequest({
      url: '',
      data: {type:"全部"},
      dataType: 'json',
      method: 'POST',
      header: {
        'Content-Type': 'application/json'
          },
      success: res => {
        console.log(res.data);
      }
    })
```

返回的数据：

![](https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/85da3822ad36ed077b4519276b3653ac4ccd867c.png)

## 其他说明

代码仅供学习，请勿滥用或用于非法用途。    
本方法思路源于 古人云小程序](https://mssnn.cn) 的项目
