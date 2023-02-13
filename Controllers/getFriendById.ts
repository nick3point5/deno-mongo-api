import { type Context } from "https://deno.land/x/oak@v11.1.0/mod.ts"
import { Friend } from '../Models/Friend.ts'
import { ObjectId } from '../helpers/dbconnect.ts'

type ContextParams = Context & {
	params: {
		id: string
	}
}

export const getFriendById = async (context: ContextParams) => {
	const { id } = context.params

	const data = await Friend.findOne({ _id: new ObjectId(id) })

	if (!data) {
		context.response.status = 204
	}

	context.response.body = data
}
