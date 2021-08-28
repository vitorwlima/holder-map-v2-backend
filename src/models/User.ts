import { Schema, model } from 'mongoose'

interface IUser {
  name: string
  email: string
  password: string
  favoriteCompanies: string[]
  recentCompanies: string[]
}

const schema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    favoriteCompanies: [{ type: String }],
    recentCompanies: [{ type: String }],
  },
  { timestamps: true }
)

export const UserModel = model<IUser>('User', schema)
