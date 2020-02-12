<!-- @format -->
<template>
	<div>
		<HelloWorld msg="Welcome to Your Vue.js App" />
	</div>
</template>

<script>
	import HelloWorld from "_components/HelloWorld.vue";

	export default {
		name: "Home",
		components: {
			HelloWorld,
		},
	};
</script>
<style lang="scss">
	// @import "~_scss/utils/module.scss";
</style>
