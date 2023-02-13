import { MongoClient, ObjectId } from '../deps.ts'

const client = new MongoClient()

const connectionString =
	Deno.env.get('MONGO_ATLAS') || 'mongodb://127.0.0.1:27017'

await client.connect(connectionString)

const db = client.database('Friend_list_deno')

export { db, ObjectId }
