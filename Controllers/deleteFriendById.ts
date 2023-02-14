import { RouterMiddleware, ObjectId } from '../deps.ts'
import { Friend } from '../Models/Friend.ts'

export const deleteFriendById: RouterMiddleware<string> = async (context) => {
	const { id } = context.params

	const data = await Friend.deleteOne({ _id: new ObjectId(id) })

	if (!data) {
		context.response.status = 204
		return
	}

	context.response.body = { message: 'unfriended' }
}
