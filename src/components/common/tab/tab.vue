<template>
	<div class="tab">
		<router-link tag='div' to='/recommend' active-class='selected'>
			<span class="item">推荐</span>
		</router-link>
		<router-link tag='div' to='/singer' active-class='selected'>
			<span class="item">歌手</span>
		</router-link>
		<router-link tag='div' to='/rank' active-class='selected'>
			<span class="item">排行</span>
		</router-link>
		<router-link tag='div' to='/search' active-class='selected'>
			<span class="item">搜索</span>
		</router-link>
	</div>
</template>
<script>
	export default{
		
	}
</script>
<style lang='less'>
@import '~style/index.less';
.tab{
	display: flex;
	.h(44);
	.w(375);
	div{
		font-size:@font-size-ms;
		flex: 1;
		text-align: center;
		.l-h(44);
		color:@color-tab;
		.item{
			padding-bottom: 5px;
		}	
	}
	.selected{
		color:@header-color;
		.item{
			border-bottom: 2px solid @header-color;
		}
	}
}
</style>