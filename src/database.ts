import mongoose from 'mongoose'

mongoose
  .connect(process.env.DB_CONNECTION!)
  .then(() => console.log('DB is up'))
  .catch(err => console.log(err))
