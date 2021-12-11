<template>
	<div>
		<div class='background-content'>
			<v-container class='background-content-container'>
				<h1 class='background-content-header my-8'>Online Test Generator</h1>
				<p class='background-content-paragraph'>
					Платформа для создания тестов<br/>
					Создавать тесты теперь легко и удобно!</p>
			</v-container>
		</div>
		<v-container class='main-content'>
			<v-row>
				<v-col>
					<v-card>
						<v-card-title class="headline">
							Популярные тесты
						</v-card-title>
						<v-card-text>
							<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
						</v-card-text>
					</v-card>
				</v-col>
				<v-col>
					<v-card>
						<v-card-title class="headline">
							Недавние тесты
						</v-card-title>
						<v-card-text>
							<br><br><br><br><br><br><br><br><br><br><br>
						</v-card-text>
						<v-card-actions>
							<v-spacer />
							<v-btn color="primary" @click='api'>
								API
								<v-icon right>{{mdiSwapVerticalBold}}</v-icon>
							</v-btn>
							<v-btn color="primary" nuxt to="/inspire">
								Continue
								<v-icon right>{{mdiChevronRight}}</v-icon>
							</v-btn>
						</v-card-actions>
					</v-card>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>
<script>
import { mdiSwapVerticalBold, mdiChevronRight } from '@mdi/js';

export default {
	data: () => ({
		mdiSwapVerticalBold,
		mdiChevronRight
	}),
	methods: {
		async api() {
			const apiData = await this.$api('test')

			this.$toast(JSON.stringify(apiData))
		}
	}
}
</script>

<style scoped>
.background-content {
	width: 100vw;
	height: 280px;
	background-color: #1C69B2
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