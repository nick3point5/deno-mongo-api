import { Application, Router } from './deps.ts'

import { getFriend } from './Controllers/getFriend.ts'
import { getFriendById } from './Controllers/getFriendById.ts'
import { addFriend } from './Controllers/addFriend.ts'
import { updateFriendById } from './Controllers/updateFriendById.ts'
import { deleteFriendById } from './Controllers/deleteFriendById.ts'

const router = new Router()
const app = new Application()
const port = 3000

router
	.get('/', getFriend)
	.get('/:id', getFriendById)
	.post('/', addFriend)
	.put('/:id', updateFriendById)
	.delete('/:id', deleteFriendById)

app.use(async (context, next) => {
	try {
		await next()
	} catch (error) {
		let { status } = context.response
		console.log('error:', status)
		if (status === 404) {
			status = 500
		}

		context.response.status = status
		context.response.body = { error: error.message }
		context.response.type = 'json'
	}
})

app.use(router.routes())
app.use(router.allowedMethods())

app.addEventListener('listen', () => {
	console.log(`running on port: ${port}`)
})

await app.listen({ port: port })
