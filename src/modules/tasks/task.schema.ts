import { Schema } from 'mongoose'

export const TaskSchema = new Schema({
  title: String,
  description: String,
  type: String,
  repetitive: Boolean,
  completed: Boolean,
  date: { timeExpected: Number, dateStart: Number, dateEnd: Number },
})
