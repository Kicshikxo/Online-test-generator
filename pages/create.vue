<template>
	<v-container class="edit-container">
		<v-card class="mx-1 mb-4" outlined>
			<v-card-title class="pb-0">
				<v-text-field
					name="test-name"
					single-line
					label="Название теста"
					hide-details
					class="text-h5"
					autocomplete="off"
				></v-text-field>
			</v-card-title>
			<v-card-text>
				<v-text-field
					name="test-description"
					label="Описание"
					autocomplete="off"
					single-line
					hide-details
				></v-text-field>
			</v-card-text>
		</v-card>
		<slick-list
			lockAxis="y"
			v-model="questions"
			:useDragHandle="true"
			appendTo=".edit-container"
		>
			<slick-item
				v-for="(question, index) in questions"
				:key="index"
				:index="index"
			>
				<div class="pa-1">
					<v-card class="question-card" outlined>
						<div v-handle class="drag-handle d-flex justify-center">
							<v-icon class="horizontal-drag-icon">
								{{ mdiDrag }}
							</v-icon>
						</div>
						<v-card-title class="py-0">
							<v-row class="ma-0">
								<v-col cols="6" class="pa-0 pr-2">
									<v-text-field
										label="Вопрос"
										filled
										single-line
										hide-details
										background-color="#F8F9FA"
										v-model="question.text"
										autocomplete="off"
									></v-text-field>
								</v-col>
								<v-col cols="6" class="pa-0 pl-2">
									<v-select
										label="Тип вопроса"
										outlined
										single-line
										hide-details
										:items="questionsTypes"
										v-model="question.type"
										item-value="type"
									>
										<template
											slot="selection"
											slot-scope="data"
										>
											<v-icon class="mr-3">
												{{ data.item.icon }}
											</v-icon>
											{{ data.item.name }}
										</template>
										<template slot="item" slot-scope="data">
											<v-icon class="mr-3">
												{{ data.item.icon }}
											</v-icon>
											{{ data.item.name }}
										</template>
									</v-select>
								</v-col>
							</v-row>
						</v-card-title>
						<div class="mr-4">
							<v-radio-group
								v-if="question.type == 'radio'"
								class="my-2 pa-0"
								hide-details
							>
								<div
									v-for="(option, index) in question.options"
									:key="index"
									class="d-flex align-center my-2"
								>
									<v-icon class="drag-handle" v-handle>{{
										mdiDrag
									}}</v-icon>
									<div>
										<v-radio
											:value="index"
											:off-icon="mdiRadioboxBlank"
											:on-icon="mdiRadioboxMarked"
											:ripple="false"
										>
										</v-radio>
									</div>
									<v-text-field
										single-line
										:label="`Вариант ${index}`"
										autocomplete="off"
										hide-details
										class="ma-0 pa-0 mb-2"
										v-model="option.text"
									></v-text-field>
									<v-tooltip
										right
										:open-on-click="false"
										transition="fade-transition"
										open-delay="300"
									>
										<template
											v-slot:activator="{ on, attrs }"
										>
											<v-btn
												v-bind="attrs"
												v-on="on"
												text
												icon
											>
												<v-icon>
													{{ mdiClose }}
												</v-icon>
											</v-btn>
										</template>
										<span>Удалить</span>
									</v-tooltip>
								</div>
							</v-radio-group>
							<div
								v-else-if="question.type == 'check'"
								class="d-flex flex-column my-2 pa-0"
							>
								<div
									v-for="(option, index) in question.options"
									:key="index"
									class="d-flex align-center my-2"
								>
									<v-icon class="drag-handle" v-handle>{{
										mdiDrag
									}}</v-icon>
									<div>
										<v-checkbox
											:value="index"
											:off-icon="mdiCheckboxBlankOutline"
											:on-icon="mdiCheckboxMarked"
											hide-details
											class="ma-0 pa-0"
											:ripple="false"
										></v-checkbox>
									</div>
									<v-text-field
										single-line
										:label="`Вариант ${index}`"
										autocomplete="off"
										hide-details
										class="ma-0 pa-0 mb-2"
										v-model="option.text"
									></v-text-field>
									<v-tooltip
										right
										:open-on-click="false"
										transition="fade-transition"
										open-delay="300"
									>
										<template
											v-slot:activator="{ on, attrs }"
										>
											<v-btn
												v-bind="attrs"
												v-on="on"
												text
												icon
											>
												<v-icon>
													{{ mdiClose }}
												</v-icon>
											</v-btn>
										</template>
										<span>Удалить</span>
									</v-tooltip>
								</div>
							</div>
						</div>
						<v-divider></v-divider>
						<v-card-actions class="py-1">
							<v-spacer></v-spacer>
							<!-- <v-switch
									hide-details
									dense
									color="primary"
									label="Обязательный вопрос"
									class="ma-0 pa-0"
								></v-switch>
								<v-divider
									vertical
									class="ml-3 mr-1"
								></v-divider> -->
							<v-tooltip
								bottom
								:open-on-click="false"
								transition="fade-transition"
								open-delay="300"
							>
								<template v-slot:activator="{ on, attrs }">
									<v-btn
										v-bind="attrs"
										v-on="on"
										text
										icon
										large
									>
										<v-icon>
											{{ mdiContentCopy }}
										</v-icon>
									</v-btn>
								</template>
								<span>Создать копию</span>
							</v-tooltip>
							<v-tooltip
								bottom
								:open-on-click="false"
								transition="fade-transition"
								open-delay="300"
							>
								<template v-slot:activator="{ on, attrs }">
									<v-btn
										v-bind="attrs"
										v-on="on"
										text
										icon
										large
									>
										<v-icon>
											{{ mdiTrashCanOutline }}
										</v-icon>
									</v-btn>
								</template>
								<span>Удалить вопрос</span>
							</v-tooltip>
						</v-card-actions>
					</v-card>
				</div>
			</slick-item>
		</slick-list>
	</v-container>
</template>

<script>
import {
	mdiDrag,
	mdiRadioboxMarked,
	mdiCheckboxMarked,
	mdiArrowDownDropCircle,
	mdiContentCopy,
	mdiTrashCanOutline,
	mdiRadioboxBlank,
	mdiCheckboxBlankOutline,
	mdiClose,
} from "@mdi/js";

export default {
	// middleware: "auth",
	data: () => ({
		mdiDrag,
		mdiCheckboxMarked,
		mdiArrowDownDropCircle,
		mdiContentCopy,
		mdiTrashCanOutline,
		mdiRadioboxBlank,
		mdiRadioboxMarked,
		mdiCheckboxBlankOutline,
		mdiClose,
		questions: [
			{
				type: "radio",
				text: "Вопрос 1",
				options: [
					{
						text: "Да",
					},
					{
						text: "Нет",
					},
				],
			},
			{
				type: "check",
				text: "Вопрос 2",
				options: [
					{
						text: "Да",
					},
					{
						text: "Нет",
					},
					{
						text: "Не знаю",
					},
				],
			},
		],
		questionsTypes: [
			{
				name: "Один из списка",
				type: "radio",
				icon: mdiRadioboxMarked,
			},
			{
				name: "Несколько из списка",
				type: "check",
				icon: mdiCheckboxMarked,
			},
			{
				name: "Раскрывающийся список",
				type: "select",
				icon: mdiArrowDownDropCircle,
			},
		],
	}),
};
</script>

<style scoped>
.drag-handle {
	cursor: ns-resize;
}
.sortable-drag {
	opacity: 0;
}
.horizontal-drag-icon {
	transform: rotate(90deg);
}
.edit-container {
	max-width: 770px !important;
}
.question-card {
	visibility: visible !important;
}
</style>