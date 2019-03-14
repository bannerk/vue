<template>
	<div class="m-header">
		Chicken Music
	</div>
</template>

<script>
	export default{
		name:'MHeader'
		}
</script>
<style lang='less'>
@import '~style/index.less';
.m-header{
	background:#222;
	.h(44);
	.w(375);
	color:@header-color;
	text-align: center;
	.l-h(44);
	font-size:@font-size-ms;
}
</style>