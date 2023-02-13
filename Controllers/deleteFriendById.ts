import { Context, ObjectId } from '../deps.ts'
import { Friend } from '../Models/Friend.ts'

type ContextParams = Context & {
	params: {
		id: string
	}
}

export const deleteFriendById = async (context: ContextParams) => {
	const { id } = context.params

	const data = await Friend.deleteOne({ _id: new ObjectId(id) })

	if (!data) {
		context.response.status = 204
		return
	}

	context.response.body = { message: 'unfriended' }
}
