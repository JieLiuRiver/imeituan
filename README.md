>  ue2 +vue-router2 + es6 +webpack + vuex 仿美团生活首页

***


>  *本项目地址[github地址](https://github.com/stupidWall/imeituan)
>  * 手机扫一扫


![1512439893.png](https://github.com/stupidWall/imeituan)



### 效果图
***
* 首页展示

![11.gif](http://osbfr39w7.bkt.clouddn.com/mmeituan.gif)




### 安装
***
项目地址：（`git clone`）
```shell
git clone https://github.com/stupidWall/imeituan.git
```
通过`npm`安装本地服务第三方依赖模块(需要已安装[Node.js](https://nodejs.org/))

```
npm install
```

```
npm run dev
```
发布代码

```
npm run build
```

### 适配
```
<script type="text/javascript">
    //根据屏幕大小及dpi调整缩放和大小
    (function() {
        var scale = 1.0;
        var ratio = 1;
        if (window.devicePixelRatio >= 2) {
            scale *= 0.5;
            ratio *= 2;
        }
        var text = '<meta name="viewport" content="initial-scale=' + scale + ', maximum-scale=' + scale +', minimum-scale=' + scale + ', width=device-width, user-scalable=no" />';
        document.write(text);
        document.documentElement.style.fontSize = 50*ratio + "px";
    })();
</script>
```

### vuex
采用状态管理分模块形式，尝试在这个DEMO中体验一下这个API，其中页面尽量不直接使用axios调接口，统一整合到vuex的action中去调用，栗子
```
created() {
	this.getSwiperlist()
	this.getHomelist()
},
```
上面2个方法都从mapActions导出
```
methods: {
	...mapActions([
		'getSwiperlist',
		'getHomelist'
	])
}
```
其中action是定义在home模块下
```
const actions = {
	check({commit, state}, list) {
		console.log('check', '异步')
		commit(types.CHECK)
	},

	async getSwiperlist({commit, state}, params) {
		const res =  await homeInstance.getSwiperlist(params)
		const rows = res.data.rows
		commit(types.ADD_SWIPERLIST, {rows})
	},

	async getHomelist({commit, state}, params) {
		const res =  await homeInstance.getHomelist(params)
		const ad = res.data.homelist.ad
		const like = res.data.homelist.like
		commit(types.ADD_LIKELIST, {like})
		commit(types.ADD_ADLIST, {ad})
	}
}
```
其中引入home-model模型，充当这MVVM中Model角色，负责获取数据，处理数据等等，不涉及到视图相关的工作，
获取到数据后, vuex的mutations充当VM的作用，更改数据，更新视图，调用commit(types.xx, {})
```
const mutations = {
	[types.CHECK](state, {v}){
		state.a - state.b > 0 ? state.flag = true : state.flag = false
	},
	[types.ADD_SWIPERLIST](state, {rows}) {
		const _rows = []
		_rows.push(rows.filter((item, i) => i < 10))
		_rows.push(rows.filter((item, i) => i >= 10 && i <= 20))
		state.swiperlist = _rows || []
	},
	[types.ADD_LIKELIST](state, {like}) {
		state.likelist = like || []
	},
	[types.ADD_ADLIST](state, {ad}) {
		state.adlist = ad || []
	}
}
```

## 字体图标

阿里巴巴矢量图标库很方便管理自己的图标，推荐。

字体文件，用官方已经制作好的
```
@font-face {
	font-family:iconfont;
	src:url('../assets/fonts/iconfont.woff?t=1489462373204') format('woff');
}
@font-face{
	font-family: cate_icon;
	src:url('../assets/fonts/cate4.woff?v7') format('woff');
}

@font-face{
	font-family: base_icon;
	src:url('../assets/fonts/base14.woff') format('woff');
}

.iconfont {
	font-family: iconfont!important;
	font-size: 16px;
	font-style: normal;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale
}

```
注意，这里要把字体下载下来放在项目目录下，直接访问官方链接的话会有跨域问题，特别是打包上线后。