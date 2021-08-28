import { sign } from 'jsonwebtoken'
import { Schema } from 'mongoose'
import dayjs from 'dayjs'
import { RefreshTokenModel, UserModel } from '../models'

export const generateAccessToken = (userId: Schema.Types.ObjectId) => {
  const accessToken = sign({}, process.env.TOKEN_HASH!, { subject: userId.toString(), expiresIn: '15m' })
  return accessToken
}

export const generateRefreshToken = async (userId: Schema.Types.ObjectId) => {
  const expiresIn = dayjs().add(7, 'day').unix()

  const refreshToken = await new RefreshTokenModel({ userId, expiresIn }).save()

  return refreshToken
}
