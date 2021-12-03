<template>
	<v-container fluid fill-height align-start class='pb-0'>
		<v-row class='main-block'>
			<v-col cols class='pb-0 pe-0'>
				<v-card class='d-flex flex-column'>
					<v-card-title class='headline'>
						Разметка
					</v-card-title>
					<v-card-text>
						<v-textarea v-model='code.javascript' label='javascript' outlined no-resize color='white' />
						<v-textarea v-model='code.python' label='python' outlined no-resize color='white' />
					</v-card-text>
					<v-spacer />
					<v-card-actions>
						<v-spacer />
						<v-btn class='ma-2' @click='showToast'>
							ОК
							<v-icon right>
								{{ mdiCheckboxMarkedCircle }}
							</v-icon>
						</v-btn>
					</v-card-actions>
				</v-card>
			</v-col>
			<v-col cols='auto' class='pb-0'>
				<v-card width='500' class='d-flex flex-column'>
					<v-card-title class='headline pb-0'>
						<span>Код</span>
						<v-spacer />

						<v-menu transition='scroll-y-transition' close-on-content-click>
							<template #activator='{ on, attrs }'>
								<v-btn small icon v-bind='attrs' v-on='on'>
									<v-icon>{{ mdiDotsVertical }}</v-icon>
								</v-btn>
							</template>
							<v-card class='pa-0'>
								<v-btn v-for='action in codeActions' :key='action.title' text color='white' @click='action.handler'>
									{{ action.title }}
									<v-icon right>
										{{ action.icon }}
									</v-icon>
								</v-btn>
							</v-card>
						</v-menu>
					</v-card-title>
					<v-card-title class='pa-0'>
						<v-tabs v-model='currentTab' color='white' grow>
							<v-tab>javascript</v-tab>
							<v-tab>python</v-tab>
						</v-tabs>
					</v-card-title>

					<v-tabs-items v-model='currentTab' class='flex-fill full-height-tab'>
						<v-tab-item>
							<output-code :code='code.javascript' language='javascript' />
						</v-tab-item>
						<v-tab-item>
							<output-code :code='code.python' language='python' />
						</v-tab-item>
					</v-tabs-items>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>
<script>
import { mdiCheckboxMarkedCircle, mdiChevronDown, mdiContentCopy, mdiDotsVertical } from '@mdi/js'

export default {
	data: () => ({
		mdiCheckboxMarkedCircle,
		mdiDotsVertical,
		mdiChevronDown,
		mdiContentCopy,
		currentTab: 0,
		code: {
			javascript: 'console.log(1)',
			python: 'print(1)'
		},
		codeActions: []
	}),
	created() {
		this.codeActions = [{ title: 'Копировать', icon: mdiContentCopy, handler: this.copyCode }]
	},
	methods: {
		showToast() {
			this.$toast(`Seconds: ${new Date().getSeconds()}`, { type: 'success' })
		},
		copyCode() {
			this.$toast('Скопировано', { type: 'success', icon: true })
		}
	}
}
</script>
<style>
.main-block {
	height: 100%;
}

.main-block .v-card {
	height: 100%;
}

.v-tabs-items.full-height-tab .v-window__container,
.v-tabs-items.full-height-tab .v-window-item {
	display: block;
	height: 100%;
}
</style>
