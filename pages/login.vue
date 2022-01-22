<template>
	<div>
		<div class="background-content">
			<v-container class="background-content-container">
				<h1 class="background-content-header my-8">Логин</h1>
			</v-container>
		</div>
		<v-container class="main-content">
			<v-row>
				<v-col>
					<v-card class="login-card">
						<v-card-title class="headline">
							Для входа заполните необходимые поля
						</v-card-title>
						<v-card-text>
							<v-form ref="form" v-model="valid">
								<v-text-field
									solo
									v-model="login"
									:rules="loginRules"
									label="Имя пользователя"
									autocomplete="off"
									spellcheck="false"
									required
								></v-text-field>
								<v-text-field
									solo
									v-model="password"
									:rules="passwordRules"
									type="password"
									label="Пароль"
									autocomplete="off"
									spellcheck="false"
									required
								></v-text-field>
							</v-form>
						</v-card-text>
						<v-card-actions class="ma-2">
							<v-spacer></v-spacer>
							<v-btn
								:disabled="!valid || loading"
								:loading="loading"
								@click="loginRequest"
								color="primary"
							>
								Войти
								<v-icon right>{{ mdiKey }}</v-icon>
							</v-btn>
						</v-card-actions>
					</v-card>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
import { mdiKey } from "@mdi/js";
export default {
	middleware: "notAuth",
	data: () => ({
		mdiKey,
		valid: false,
		login: "",
		loginRules: [(v) => !!v || "Логин обязателен"],
		password: "",
		passwordRules: [(v) => !!v || "Пароль обязателен"],
		loading: false,
	}),
	methods: {
		async loginRequest() {
			if (this.loading) {
				return;
			}

			this.loading = true;

			const result = await this.$api("auth/login", {
				login: this.login,
				password: this.password,
			});

			if (result.success) {
				this.$store.commit("auth/loggedIn", result.user);
				this.$toast("Успешный вход", { type: "success" });
				this.$router.push(result.redirect);
			} else {
				this.$toast("Ошибка входа", { type: "error" });
				setTimeout(() => {
					this.loading = false;
				}, 500);
			}
		},
	},
};
</script>

<style scoped>
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
