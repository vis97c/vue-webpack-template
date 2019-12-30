<template>
	<div id="appex">
		<img alt="Vue logo" src="./../assets/logo.png">
		<transition name="fade">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>

	import '../scss/main.scss'
	// import miComponente from '_components/mi_componente.vue'

	export default {
		name: 'App',
		components: {
			// miComponente
		},
		data() {
			return {
				// variable: 'valor';
			}
		},
		methods: {
			// metodo: function(section) {
			// 	let _this = this;
			// 	//tu funcion
			// 	return
			// },
		},
		computed: {
			// computado(){
			// 	//contenido
			// },
		},
		// INICIA LIFEHOOKS
		// para mas detalles revise la documentacion de vue.js 2.0
		beforeCreate(){},
		created() {
			// el contenido ha sido creado y ahora hace parte del virtualDOM
			// free land
		},
		beforeMount(){},
		mounted() {
			// La plantilla a sido montada en el DOM
		},
		beforeUpdate() {},
		updated() {},
		beforeDestroy() {
			// window.removeEventListener('scroll');
		},
		destroyed() {}
		// TERMINA LIFEHOOKS
	}
</script>

<style lang="scss" scoped>
	@import '../scss/base/vue.scss';
	#appex{
		position:relative;
		margin:0;
		min-height:100vh;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-ms-flex-flow: column nowrap;
		flex-flow: column nowrap;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
	}
	img{
		width: auto;
		margin: 0 auto;
	}
</style>