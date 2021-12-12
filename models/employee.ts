import { Schema, model } from "mongoose";
import Employee from "../interfaces/employee";

const schema = new Schema<Employee>({
  name: { type: String, required: true },
  office: { type: String, required: true },
  imagePortraitUrl: String,
  linkedIn: String,
  github: String,
  twitter: String,
  published: Boolean,
});

export default model<Employee>("EmployeeModel", schema, "employees");
