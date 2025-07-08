export default defineEventHandler(async () => {
	const messages = [
		{ role: 'system', content: 'You are a friendly assistant' },
		{ role: 'user', content: 'What is the origin of the phrase Hello, World?' }
	]

	const ai = hubAI()
	const stream = await ai.run('@cf/meta/llama-3.1-8b-instruct', {
		stream: true,
		messages
	})
	return stream
})
