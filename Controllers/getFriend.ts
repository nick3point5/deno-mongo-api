import { type Context } from "https://deno.land/x/oak@v11.1.0/mod.ts"
import { Friend } from '../Models/Friend.ts'

export const getFriend = async (context: Context) => {
	const data = await Friend.find()

	if (data === undefined) {
		context.response.body = 'friend not found'
		context.response.status = 204
		return
	}

	context.response.body = data
}
