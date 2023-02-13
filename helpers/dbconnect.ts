import { MongoClient, ObjectId } from 'https://deno.land/x/mongo@v0.31.1/mod.ts'
// import { config } from 'https://deno.land/x/dotenv@v3.2.0/mod.ts'

// config({ export: true })

interface FriendSchema {
	_id: ObjectId
	name: string
	pno: string
	email: string
}

const client = new MongoClient()

const connectionString =
	Deno.env.get('MONGO_ATLAS') || 'mongodb://127.0.0.1:27017'

await client.connect(connectionString)

const db = client.database('Friend_list_deno')

export { db, ObjectId }
