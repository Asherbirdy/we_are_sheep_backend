import mongoose, { Schema } from 'mongoose'
import { IFriend } from '../types'

const FriendSchema: Schema<IFriend> = new mongoose.Schema({
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
  status: {
    type: String,
    enum: [
      'pending',
      'accepted',
      'rejected',
      'blocked'
    ],
    required: true
  }
}, { timestamps: true })

export const Friend = mongoose.model<IFriend>('Friend', FriendSchema)
