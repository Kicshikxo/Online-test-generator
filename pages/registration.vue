<template>
	<div>
		<div class="background-content">
			<v-container class="background-content-container">
				<h1 class="background-content-header my-8">Регистрация</h1>
			</v-container>
		</div>
		<v-container class="main-content">
			<v-row>
				<v-col>
					<v-card class="registration-card">
						<v-card-title class="headline">
							Регистрация временно не доступна
						</v-card-title>
						<v-card-text></v-card-text>
					</v-card>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
.registration-card {
	height: 50vh;
}

.background-content {
	width: 100vw;
	height: 280px;
	background-color: #00202d;
}
.background-content-container {
	max-width: 1150px;
}
.background-content-header {
	color: white;
	font-size: 48px;
}
.background-content-paragraph {
	color: white;
	font-size: 28px;
	font-weight: bold;
}
.main-content {
	transform: translateY(-126px);
	max-width: 1150px;
}
</style>