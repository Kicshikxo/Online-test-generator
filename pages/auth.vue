<template>
	<v-container fluid>
		<div>Если эта страница открывается, то вы авторизованы</div>
	</v-container>
</template>

<script>
export default {
	middleware: "auth",
};
</script>

<style>
</style>