<template>
	<v-app>
		<v-app-bar
			color="white"
			height="64"
			app
			flat
			elevate-on-scroll
			elevation="1"
			scroll-target=".nuxt-wrap"
		>
			<!-- <v-app-bar-title
				><h3 class="font-weight-regular">
					{{ $store.state.auth.isLoggedIn }}
				</h3></v-app-bar-title
			> -->
			<v-spacer></v-spacer>
			<div class="header-buttons-container d-flex align-center">
				<transition name="text-slide-down" mode="out-in">
					<div
						:key="$store.state.auth.isLoggedIn"
						class="header-buttons d-flex mr-0"
					>
						<template v-if="$store.state.auth.isLoggedIn">
							<v-btn
								color="primary"
								depressed
								large
								class="px-6"
								to="/auth"
								>Аккаунт</v-btn
							>
							<v-btn
								color="primary"
								outlined
								large
								class="px-6"
								@click="logout"
								>Выйти</v-btn
							>
						</template>
						<template v-else>
							<v-btn
								color="primary"
								outlined
								large
								class="px-6"
								@click="login"
								>Войти</v-btn
							>
							<v-btn
								color="primary"
								depressed
								large
								class="px-6"
								@click="registration"
								>Регистрация</v-btn
							>
						</template>
					</div>
				</transition>
			</div>
		</v-app-bar>
		<v-main>
			<div class="nuxt-wrap">
				<Nuxt class="nuxt" />
			</div>
		</v-main>
	</v-app>
</template>
<script>
export default {
	methods: {
		login() {
			this.$router.push("/login");
		},
		registration() {
			this.$router.push("/registration");
		},
		async logout() {
			const result = await this.$api("auth/logout");
			if (result.success) {
				this.$store.dispatch("auth/logout");
				this.$toast("Успешный выход", {
					type: "success",
				});
				this.$router.push("/");
			} else {
				this.$toast("Вы не залогинены", {
					type: "error",
				});
			}
		},
	},
};
</script>
<style>
.text-slide-down-enter-active,
.text-slide-down-leave-active {
	transition: transform 0.35s ease-in-out, opacity 0.35s ease-in-out;
}

.text-slide-down-enter {
	opacity: 0;
	transform: translateY(-100%);
}
.text-slide-down-leave-to {
	opacity: 0;
	transform: translateY(100%);
}
* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}
html {
	overflow: hidden !important;
	/* color-scheme: dark; */
}
.nuxt-wrap {
	width: 100%;
	height: 100%;
	position: relative;
	overflow-y: auto;
	overflow-x: hidden;
}
.nuxt-wrap .nuxt {
	width: 100%;
	height: 100%;
	position: absolute;
}
.v-toolbar__content,
.v-toolbar__extension {
	padding: 0 16px;
}
.header-buttons-container {
	overflow: hidden;
	height: 100%;
}
.header-buttons-container .header-buttons {
	gap: 24px;
}
</style>
