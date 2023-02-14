import { RouterMiddleware, ObjectId } from '../deps.ts'
import { Friend } from '../Models/Friend.ts'

export const getFriendById: RouterMiddleware<string> = async (context) => {
	const { id } = context.params

	const data = await Friend.findOne({ _id: new ObjectId(id) })

	if (!data) {
		context.response.status = 204
	}

	context.response.body = data
}
