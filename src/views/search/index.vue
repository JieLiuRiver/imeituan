<template>
  <div class="search-wrapper">
      <app-header mode="back" title="搜索" :iconlist="iconlist"></app-header>
      <div>
          <form class="search-form">
            <div class="box-search f-flex f-jcc f-aic">
                <i class="icon-search f-b ion-ios-search-strong f-tc"></i>
                <input type="text" class="f-b" name="w" @keyup="searchKeyup" placeholder="输入商家名、品类或商圈" ref="searchInput" autocomplete="off" v-model="searchKey">
                <i class="btn-reset f-b ion-close-circled f-tc" @click="resetAction" v-show="!!searchKey.length"></i>
            </div>
            <button type="submit" class="submit-btn btn" :class="[{highlight: !!searchKey.length}, {nohighlight: !searchKey.length}]">搜索</button>
        </form>
      </div>
    
    <div class="hot-list" v-show="!(searchlist.length && !choseSuggestFlag)">
        <h2>热门搜索</h2>
        <ul class="icon-list f-flex f-jcs f-aic f-wrap">
            <li class="icon">
            <a class="hot-link react" gaevent="imt/search/hot/堂会" href="/s/guangzhou-堂会">堂会</a></li>     
            <li class="icon">
            <a class="hot-link react" gaevent="imt/search/hot/KTV自助餐" href="/s/guangzhou-KTV自助餐">KTV自助餐</a></li>     
            <li class="icon">
            <a class="hot-link react" gaevent="imt/search/hot/蒙肥羊" href="/s/guangzhou-蒙肥羊">蒙肥羊</a></li>     
            <li class="icon">
            <a class="hot-link react" gaevent="imt/search/hot/巴喜阳光BBQ自助餐厅" href="/s/guangzhou-巴喜阳光BBQ自助餐厅">巴喜阳光BBQ自助餐厅</a></li>     
            <li class="icon">
            <a class="hot-link react" gaevent="imt/search/hot/新派KTV" href="/s/guangzhou-新派KTV">新派KTV</a></li>     
            <li class="icon">
            <a class="hot-link react" gaevent="imt/search/hot/盈点V-PARTY" href="/s/guangzhou-盈点V-PARTY">盈点V-PARTY</a></li>     
            <li class="icon">
            <a class="hot-link react" gaevent="imt/search/hot/幸福西饼生日蛋糕" href="/s/guangzhou-幸福西饼生日蛋糕">幸福西饼生日蛋糕</a></li>     
            <li class="icon">
            <a class="hot-link react" gaevent="imt/search/hot/广州长隆野生动物世界" href="/s/guangzhou-广州长隆野生动物世界">广州长隆野生动物世界</a></li>     
            <li class="icon">
            <a class="hot-link react" gaevent="imt/search/hot/四海一家" href="/s/guangzhou-四海一家">四海一家</a></li>     
        </ul>
    </div>


      <div class="search-info">
        <ul class="search-list" v-show="searchlist.length && !choseSuggestFlag">
            <li class="search-item vmc-1px-b-ccc" v-for="(o, i) in searchlist" :key="i">
                <a href="javascript:;" class="f-b f-wf f-hf link f-flex f-jcb f-aic" @click="choseSuggest(o.word)">
                    <span class="f-b"><i class="ion-ios-search-strong"></i><span class="text f-pr">{{o.word}}</span></span>
                    <span class="f-b">约{{o.dealCount}}个团购</span>
                </a>
            </li>
        </ul>
      </div>
      <app-footer></app-footer>
  </div>
</template>

<script>
	import AppHeader from '@/components/app-header'
    import AppFooter from '@/components/app-footer'
    import { mapGetters, mapActions } from 'vuex'
    export default {
        data() {
            return {
                searchKey: '',
                choseSuggestFlag: false,
                iconlist: [
					{
						name: '主页',
						type: '⟰',
						routename: 'home'
					}
				]
            }
        },
        methods: {
            ...mapActions(['searchAction']),
            resetAction() {
               this.searchKey = ''
               this.$refs.searchInput.focus()
            },
            searchKeyup() {
                if (this.searchlist.length) {
                    this.choseSuggestFlag = false;
                    return;
                }
                this.searchAction({
                    keyword: this.searchKey
                })
            },
            choseSuggest(word) {
                this.searchKey = word
                this.choseSuggestFlag = true
            }
        },
        computed: {
            ...mapGetters(['searchlist'])
        },
        components: {
            AppFooter,
            AppHeader
        }
    }
</script>

<style lang="less" scoped>
    .search-wrapper{
        .search-form{
            margin-top: .2rem;
            margin-bottom: .2rem;
            height: .8rem;
            position: relative;
            padding: 0 0.2rem;
            .box-search{
                vertical-align: middle;
                position: relative;
                margin-right: 1.4rem;
                border-radius: .06rem;
                border: 1px #CCC solid;
                background: #FFF;
                height: .8rem;
                line-height: .8rem;
                box-sizing: border-box;
                -webkit-box-sizing: border-box;
            }
            input[type='text']{
                width: 100%;
                border: none;
                background: rgba(255, 255, 255, 0);
                outline-style: none;
                display: block;
                line-height: .4rem;
                height: 100%;
                font-size: .28rem;
                padding: 0;
                flex:1;
            }
            button{
                position: absolute;
                right: 0.2rem;
                top: 0;
                width: 1.2rem;
                height: 100%;
            }
            .icon-search,
            .btn-reset{
                flex: 0 0 0.7rem;
                font-size: 0.38rem;
                color: #999;
            }
            .submit-btn{
                &.highlight{
                    background-color: #06c1ae;
                    color: #fff;
                }   
                &.nohighlight{
                   background-color: #dcdcdc;
                   color: #999; 
                } 
            }
        }
        .search-info{
            min-height: 6rem;
            background-color: #fff;
            .search-item{
                height: 0.8rem;
                line-height: 0.8rem;
                padding: 0 0.28rem;
                background-color: #FDFDFC;
                color: #999999;
                .link{
                    color: #999999;
                    i{
                        position: relative;
                        font-size: 0.4rem;
                        padding: 0 0.1rem; 
                        top: 0.05rem;
                    }
                    .text{

                    }
                }
            }
        }
        .hot-list{
            padding: 0.1rem 0.28rem 0.2rem;
            background-color: #fff;
            margin-bottom: 0.2rem;
            h2{
                color: #fdb338;
            }
            .icon-list{
                li{
                    flex: 0 0 25%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    padding: 0.14rem 0.1rem;
                }
            }
        }
    }
</style>
