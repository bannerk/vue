<template>
    <div class='singer wrapper'> 
       <div class="scrolList content">
       	   <ul class="group">
	       	   	<li v-for="(group,index) in list" :key='index' class="sing-item">
	       	   		<span class="title" :ref='group.title'>{{group.title}}</span>
	       	   		<ul class="singer-item">
	       	   			<li v-for="(item,index) in group.items" :key='index'>
	       	   				<img :src="item.header" width="50" height="50"/>
	       	   				<p class="singer-name">{{item.name}}</p>
	       	   			</li>
	       	   		</ul>
	       	   	</li>
       	   </ul> 
       </div> 
       <div class="slider">
         <ul  
         	  @touchstart ='touchBegin'
         	  @touchmove = 'touchMove'
         	  >
         	<li v-for="(item,index) in sliderData" :key='index'
         		:class="{select:index==num}">
         		{{item}}
         	</li>
         </ul>
       </div>
    </div>
</template>
<script>
import Singer from '../../../data/singer'
import BScroll from 'better-scroll';
export default {
	data(){
		return{
			list:[],
			num:0
		}
	},
	computed:{
		sliderData(){
			return this.list.map((item)=>{
				if(item.title==='热门'){
					return '热'
				}else{
					return item.title
				}
			})
		}	
	},
	methods:{
		touchBegin(e){
			let targe = e.target.innerText=='热'?'热门':e.target.innerText
			console.log(targe)
			//获取点击的坐标  
			this.touchindex = this.sliderData.indexOf(e.target.innerText);																															 
			this.touchStarY = e.touches[0].clientY
			this.style.color = 'red'
			let element = this.$refs[targe][0];
			this.scroll.scrollToElement(element);
//			console.log(element)	
            this.num = this.touchindex;
		},
        touchMove(e){
        	//移动的距离差
        	let moveY =  e.touches[0].clientY -this.touchStarY 
//      	console.log(moveY)
            let index = parseInt(moveY/17) + this.touchindex
            let targe = this.sliderData[index]=='热'?'热门':this.sliderData[index];
        	let element = this.$refs[targe][0];
			this.scroll.scrollToElement(element);
			this.num = index
        },
        // 固定吸顶效果
        handleScroll () {
		  var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
		  console.log(scrollTop)
		},
		 normalData(data){
		 	let lists={
		 		'hot':{
		 			title:'热门',
		 			items:[]	
		 		},
		 		'A':{
		 			title:'A',
		 			items:[]
		 		}
		 	}
			for(let index=0;index<data.length;index++){
	    	    let img = `https://y.gtimg.cn/music/photo_new/T001R300x300M000${data[index].Fsinger_mid}.jpg?max_age=2592000`
			    if(index<10){
			    	lists.hot.items.push({
			    		name:data[index].Fsinger_name,
			    		id:data[index].Fsinger_id,
			    		header:img
			    	})
			    }  
			    if(!lists[data[index].Findex]){
			    	
			    	lists[data[index].Findex]={
			    		title:data[index].Findex,
			    		items:[{
			    			name:data[index].Fsinger_name,
			    			id:data[index].Fsinger_id,
			    			header:img
			    		}]
			    	}
			    }else{
			    	
			    	lists[data[index].Findex].items.push({
				    	name:data[index].Fsinger_name,
				    	id:data[index].Fsinger_id,
				    	header:img
			    	})
			    }
			}
//			console.log(lists)
			let hot = [];
			let arr = [];
			for(const key in lists){
				if(key === 'hot'){
					hot.push(lists[key])
				}else{
					// match匹配
					if(key.match(/[a-zA-Z]/)){
						arr.push(lists[key])
					}
				}
			}
			arr.sort((a,b)=>{
				return a.title.charCodeAt(0)-b.title.charCodeAt(0)
			})
			this.list = hot.concat(arr)	
//			console.log(this.list)
		 }
	},
	created(){
		this.touchStartY = 0;
		setTimeout(()=>{
			let data = Singer.data.list;
			this.normalData(data)
//			console.log(data);
		},500)
		setTimeout(()=>{
			this.scroll = new BScroll('.wrapper') 
		},20)
	}
// 	mounted () {
// 	  window.addEventListener('this.scroll', this.handleScroll)
// 	},
// 	destroyed(){
// 	  window.removeEventListener('this.scroll', this.handleScroll);
// 	}
}
</script>
<style lang="less">
@import '~style/index.less';
.wrapper{
	position: fixed;
	.top(88);
	.bottom(0);
	.right(0);
	.left(0);
	overflow:hidden;
	.content{
		.group{
			font-size: 0px;
			.sing-item{
				.margin(0,0,10,0)
			}
		}
		.title{
			.w(375);
            .h(30);
            display: inline-block;
            .l-h(30);
            background: #333;
            color:@color-tab;
            font-size: @font-size-ms;
            .padding(0,0,0,20);
		}
		.singer-item{
			li{
				.h(70);
				display:flex;
				.padding(20,0,0,30);
				 box-sizing: border-box;
				 color:@color-tab;
				img{
					border-radius:50%
				}
			}
			.singer-name{
				font-size:@font-size-ms;
				color:@color-tab;
				flex: 1;
				.l-h(50);
				.h(50);
				.padding(0,0,0,20);
			}
		}
	}
	.slider{
		.w(20);
		position: absolute;
		right:0;
		top:50%;
		transform: translateY(-50%);
		background: @singer-color;
		font-size: @font-size-s;
		color: @color-tab;
		border-radius: 5px;
		text-align: center;	
	}	
	.select{
		color:@header-color
	}
}    
</style>