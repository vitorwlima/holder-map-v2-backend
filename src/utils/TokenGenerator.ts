import { sign } from 'jsonwebtoken'
import { Types } from 'mongoose'
import dayjs from 'dayjs'
import { RefreshTokenModel, UserModel } from '../models'

export const generateAccessToken = (userId: Types.ObjectId) => {
  const accessToken = sign({}, process.env.TOKEN_HASH!, { subject: userId.toHexString(), expiresIn: '15m' })
  return accessToken
}

export const generateRefreshToken = async (userId: Types.ObjectId) => {
  const expiresIn = dayjs().add(7, 'day').unix()

  const refreshToken = await new RefreshTokenModel({ userId, expiresIn }).save()

  return refreshToken
}
