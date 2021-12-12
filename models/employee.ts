import { Schema, model } from "mongoose";
import Employee from "../interfaces/employee";
import mongoose from "mongoose";
const schema = new Schema<Employee>({
  name: { type: String, required: true },
  office: { type: String, required: true },
  imagePortraitUrl: String,
  linkedIn: String,
  github: String,
  twitter: String,
  published: Boolean,
});
var Employee =
  mongoose.models.Employee || model<Employee>("Employee", schema, "employees");
export default Employee;
