/** @format */
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// lazyload
function loadView(view) {
	return () =>
		import(
			/* webpackChunkName: "view-[request]" */ `_src/js/views/${view}.vue`
		);
}
// loadView('_vista')

const views = new VueRouter({
	linkActiveClass: "active",
	mode: "history",
	routes: [
		{
			path: "/",
			name: "Home",
			component: loadView("_home"),
			meta: {
				title: "_blank | Home",
			},
		},
		{
			path: "/get_started",
			name: "GetStarted",
			component: loadView("_get_started"),
			meta: {
				title: "_blank | Get Started",
			},
		},
		// {
		//     path: '/contact',
		//     component: loadView('_contac')t
		// },
		{
			path: "*",
			redirect: "/404",
		},
		{
			path: "/404",
			name: "404",
			component: loadView("_not_found"),
			meta: {
				title: "_blank | 404",
			},
		},
	],
	mode: "history",
	linkActiveClass: "active-link",
	linkExactActiveClass: "exact-active-link",
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition;
		} else {
			return { x: 0, y: 0 };
		}
	},
});
views.beforeEach((to, from, next) => {
	/* It will change the title when the router is change*/
	document.title = to.meta.title ? to.meta.title : initialState.meta.title; // resets and defaults to stored title if it doesn't have one
	next();
});
export default views;
