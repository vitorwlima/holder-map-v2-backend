import { sign } from 'jsonwebtoken'
import { Types } from 'mongoose'

export const generateAccessToken = (userId: Types.ObjectId) => {
  const accessToken = sign({}, process.env.TOKEN_HASH!, { subject: userId.toHexString(), expiresIn: '15m' })
  return accessToken
}
