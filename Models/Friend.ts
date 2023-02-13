import { db, ObjectId } from '../helpers/dbconnect.ts'

type FriendSchema = {
	_id: ObjectId
	name: string
	pno: string
	email: string
}

const Friend = db.collection<FriendSchema>('friends')

export { Friend, type FriendSchema }
