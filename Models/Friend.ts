import { ObjectId } from '../deps.ts'
import { db } from '../helpers/dbconnect.ts'

export type FriendSchema = {
	_id: ObjectId
	name: string
	pno: string
	email: string
}

export const Friend = db.collection<FriendSchema>('friends')
