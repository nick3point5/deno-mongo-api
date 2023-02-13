import { ObjectId } from '../deps.ts'
import { db } from '../helpers/dbconnect.ts'

type FriendSchema = {
	_id: ObjectId
	name: string
	pno: string
	email: string
}

const Friend = db.collection<FriendSchema>('friends')

export { Friend, type FriendSchema }
