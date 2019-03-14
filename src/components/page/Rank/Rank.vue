<template>
    <div class='phb' ref='phb'> 
    	<div>
        	<ul class="connte" v-for="(ps,index) in song" :key='index'>
        		<li class="conList">
        			<div class="imgList">
	        			<img :src="ps.picUrl" alt="" width="100" height="100"/>
        			</div>
        			<ul class="singerList">
        				<li  v-for="(name,index) in ps.songList" :key='index'>
        					{{index+1}}
        					{{name.songname}}-{{name.singername}}
        				</li>
        			</ul>
        		</li>
        	</ul>
    	</div>
    </div>
</template>
<script>
import Rank from '../../../data/rank'
import BScroll from 'better-scroll';
export default {
   data(){
   	 return{
   	 	song:[]
   	 }
   },
   created(){
		setTimeout(()=>{
			this.song = Rank.data.topList
			console.log(this.song);
		},500)
		setTimeout(()=>{
		   let rj = this.$refs.phb;
		   new BScroll(rj) 
		},20)
	}
}
</script>
<style lang="less" scope>
@import '~style/index.less';
.phb{
	position:fixed;
	.top(88);
	.bottom(0);
	.right(0);
	.left(0);
	overflow:hidden;
	font-size:@font-size-s;
	.connte{
		.conList{
			display: flex;
			.imgList{
				.margin(16,0,0,20)
			}
			.singerList{
				.w(236);
				.h(100);
				background: #333;
				.margin(16,0,0,0)
			}
			li{
				.h(26);
				.l-h(26);
				.padding(0,0,0,10);
			}
		}
	}
}  
</style>