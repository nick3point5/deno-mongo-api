import { type RouterMiddleware, ObjectId } from '../deps.ts'
import { Friend } from '../Models/Friend.ts'

type BodyType = {
	name: string
	pno: string
	email: string
}

export const updateFriendById: RouterMiddleware<string> = async (context) => {
	const { id } = context.params

	const body = context.request.body()
	const { name, pno, email }: BodyType = await body.value

	const payload = {
		name: name,
		pno: pno,
		email: email,
	}

	const data = await Friend.findAndModify(
		{ _id: new ObjectId(id) },
		{ update: payload, new: true }
	)

	if (!data) {
		throw { message: 'friend not found', status: 204 }
	}

	context.response.body = data
}
