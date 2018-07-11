import { Schema, Document, model } from 'mongoose'

const userSchema: Schema = new Schema({
  createdAt: Date,
  username: String,
  password: String
})

userSchema.pre('save', function(next) {
    const document: any = this // Document
    document.createdAt = Date.now()
    next()
})

export default model('User', userSchema)
