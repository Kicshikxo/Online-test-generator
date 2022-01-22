<template>
	<v-container class="d-flex justify-center">
		<h1>Добро пожаловать, {{ $store.state.auth.user.username }}</h1>
	</v-container>
</template>

<script>
export default {
	middleware: "auth",
};
</script>

<style>
</style>