<template>
	<v-app dark>
		<v-main>
			<v-container v-cloak>
				<Nuxt />
			</v-container>
		</v-main>
	</v-app>
</template>

<style>
[v-cloak] {
	display: none;
}
html {
	overflow: auto !important;
	color-scheme: dark;
}
</style>
