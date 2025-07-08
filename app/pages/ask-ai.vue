<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
const colors = [
	'#60a5fa',
	'#818cf8',
	'#a78bfa',
	'#c084fc',
	'#e879f9',
	'#f472b6',
	'#fb7185'
]
const color = useState(
	'color',
	() => colors[Math.floor(Math.random() * colors.length)]
)
</script>

<template>
	<div class="centered">
		<h1

			:style="{ color }"
		>
			Ask AI!!
			{{ runtimeConfig.public.helloText }}
		</h1>

		<p />

		<NuxtLink
			to="/ask-ai"
			external
		> refresh </NuxtLink>
	</div>
</template>

<style scoped>
.centered {
  position: absolute;
  width: 100%;
  text-align: center;
  top: 15%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
h1 {
  font-size: 32px;
}
@media (min-width: 768px) {
  h1 {
    font-size: 64px;
  }
}
a {
  color: #888;
  text-decoration: none;
  font-size: 18px;
}
a:hover {
  text-decoration: underline;
}
</style>
