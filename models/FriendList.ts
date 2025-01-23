import mongoose, { Schema } from 'mongoose'
import { IFriendList } from '../types'

const FriendListSchema: Schema<IFriendList> = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  friendUserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  favorite: {
    type: Boolean,
    default: false
  }
}, { timestamps: true })

export const FriendList = mongoose.model<IFriendList>('FriendList', FriendListSchema)
