<template>
	<v-app>
		<v-app-bar hide-on-scroll color="white" short app flat>
			<!-- <v-app-bar-title><h3 class='font-weight-regular'>Test Maker</h3></v-app-bar-title> -->
			<v-spacer></v-spacer>
			<div class='header-buttons-container d-flex ma-3 mr-0'>
				<v-btn color="primary" outlined large class="px-6" nuxt to='/login'>Войти</v-btn>
				<v-btn color="primary" depressed large class="px-6" nuxt to="/registration">Регистрация</v-btn>
			</div>
		</v-app-bar>
		<v-main>
			<Nuxt />
		</v-main>
	</v-app>
</template>

<style>
* {
	padding: 0;
	margin: 0;
	box-sizing: border-box
}
html {
	overflow: auto !important;
	overflow-x: hidden !important;
	/* color-scheme: dark; */
}
.header-buttons-container {
	gap: 24px;
}
</style>
