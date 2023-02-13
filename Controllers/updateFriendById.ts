import { type Context } from "https://deno.land/x/oak@v11.1.0/mod.ts"
import { Friend } from '../Models/Friend.ts'
import { ObjectId } from '../helpers/dbconnect.ts'

type ContextParams = Context & {
	params: {
		id: string
	}
}

type BodyType = {
	name: string
	pno: string
	email: string
}

export const updateFriendById = async (context: ContextParams) => {
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
