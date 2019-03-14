<template>
<div class="wrapper" ref='wrapper'>
    <div class="content">
        <div class="swiper-container">
		    <div class="swiper-wrapper">
		        <div class="swiper-slide" v-for="item in sort">
		        	<img :src="item.picUrl" width="100%" height="100%"/>
		        </div>
		    </div>
        </div>
        <h4>热门推荐</h4>
        <ul class='recomList'>
			
			<li :key='index' v-for='(item,index) in list'>
					<div class='icon'>
						<img width='60' height='60' v-lazy='item.imgurl' alt="">
					</div>
					<div class='text'>
						<p class='name'>{{item.creator.name}}</p>
						<p class='diss'>{{item.dissname}}</p>
					</div>	
			</li>
        </ul>
    </div>
    <router-view></router-view>
</div>
</template>
<script>
import BScroll from 'better-scroll';
import Swiper from 'swiper'

export default {
   data(){
       return{
           list:[],
           sort:[]
       }
   },
    methods: {
        initBanner(){
            var mySwiper = new Swiper ('.swiper-container', {
                loop: true,
                pagination: {
                  el: '.swiper-pagination',
                },
                navigation: {
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                },
                autoplay: {
                disableOnInteraction: false,
              },
            })
        }
    },
   created(){
   	let url = '/hy/music/api/getDiscList?g_tk=1928093487&inCharset=utf-8&outCharset=utf-8&notice=0&format=json&platform=yqq&hostUin=0&sin=0&ein=29&sortId=5&needNewCode=0&categoryId=10000000&rnd=0.42271013805576896'
    this.$axios.get(url)
    .then(res=>{
    	//获取数据
  	console.log(res)
    	this.list = res.data.list
    })
    
    let img = '/he/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?_=1551751562837&g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1'
    this.$axios.get(img)
    .then(res=>{
    	console.log(res);
    	this.sort = res.data.slider
    	// console.log(sort)
    	 this.$nextTick(()=>{
            this.initBanner()
         })
    })
   },
   mounted(){
   	  let  elobj=this.$refs.wrapper
      new BScroll(elobj)
   }
}
</script>
<style lang="less" scope>
@import url('../../../../node_modules/swiper/dist/css/swiper.min.css');
@import '~style/index.less';
.wrapper{
	.swiper-container{
		.w(375);
		.h(150);
		background:#fff;
	}
	h4{
        color:@header-color;
        font-size: @font-size-ms;
        text-align: center;
        .padding(15,0,15,0);
    }
    position:fixed;
    .top(88);
    .bottom(0);
    .left(0);
    .right(0);
    overflow:hidden;
   
    .recomList{
    	li{
    		display: flex;
    		font-size: @font-size-s;
    		.padding(0,20,20,20);
    		.icon{
				.w(100);
    			.padding(0,10,0,0)
    		}
    		.name{
    			.padding(10,0,5,0);
    			 color: white;
    		}
    		.diss{
    			color:@color-tab ;
    		}
    	}
    }
}
</style>