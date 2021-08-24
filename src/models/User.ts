import { Schema, model } from 'mongoose'

interface IUser {
  name: string
  email: string
  password: string
}

const schema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
)

export const UserModel = model<IUser>('User', schema)
