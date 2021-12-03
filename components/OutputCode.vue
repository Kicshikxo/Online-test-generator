<template>
	<pre class='output-code-wrapper'>
		<code class='output-code' :class='language'>{{ code }}</code>
	</pre>
</template>

<script>
export default {
	props: {
		code: {
			type: String,
			default: ''
		},
		language: {
			type: String,
			required: true,
			default: 'javascript'
		}
	}
}
</script>

<style scoped>
.output-code-wrapper {
	height: 100%;
	position: relative;
}
.output-code {
	position: absolute;
	width: 100%;
	max-width: 100%;
	height: 100%;
	max-height: 100%;
	top: 0;
	left: 0;
	font-family: 'JetBrains Mono', Roboto, sans-serif;
	font-size: 16px !important;
	padding: 0.5em !important;
	color: #abb2bf !important;
	background: #282c34 !important;
	/* background: #292929 !important; */
}
</style>
