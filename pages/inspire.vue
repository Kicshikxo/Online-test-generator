<template>
	<v-container class="d-flex justify-center">
		<h1>Если вы видите эту страницу, то вы авторизованы</h1>
	</v-container>
</template>
<script>
export default {
	middleware: "auth",
};
</script>