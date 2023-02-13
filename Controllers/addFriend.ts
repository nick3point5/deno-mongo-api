import { Context } from '../deps.ts'
import { Friend } from '../Models/Friend.ts'

type BodyType = {
	name: string
	pno: string
	email: string
}

export const addFriend = async (context: Context) => {
	const body = context.request.body()
	const { name, pno, email }: BodyType = await body.value

	const id = await Friend.insertOne({
		name: name,
		pno: pno,
		email: email,
	})

	context.response.body = id
	context.response.status = 201
}
