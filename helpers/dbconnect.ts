import { MongoClient, ObjectId } from "https://deno.land/x/mongo@v0.31.1/mod.ts"

interface FriendSchema {
	_id: ObjectId
	name: string
	pno: string
	email: string
}

const client = new MongoClient()

await client.connect('mongodb://127.0.0.1:27017')

const db = client.database('Friend_list_deno')

export { db, ObjectId }
