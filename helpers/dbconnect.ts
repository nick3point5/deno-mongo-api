import { MongoClient } from '../deps.ts'

const client = new MongoClient()

const connectionString =
	Deno.env.get('MONGO_ATLAS') || 'mongodb://127.0.0.1:27017'

await client.connect(connectionString)

export const db = client.database('Friend_list_deno')
