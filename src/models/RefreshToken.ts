import { Schema, model } from 'mongoose'

interface IRefreshToken {
  expiresIn: number
  userId: Schema.Types.ObjectId
}

const schema = new Schema<IRefreshToken>(
  {
    expiresIn: { type: Number, required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true }
)

export const RefreshTokenModel = model<IRefreshToken>('RefreshToken', schema)
