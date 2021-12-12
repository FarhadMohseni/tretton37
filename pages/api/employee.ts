// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Employee from "../../interfaces/employee";
import connectDB from "../../middlewares/mongodb";
import EmployeeModel from "../../models/employee";
type Data = {
  limit?: string;
};

async function handler(req: NextApiRequest, res: NextApiResponse<String>) {
  if (req.method == "GET") {
    if (req.headers.authorization !== process.env.API_KEY)
      res.status(403).send("Access denied ! Invalid API KEY");
    let { limit } = req.query;
    let users;
    if (limit)
      users = await EmployeeModel.find().limit(parseInt(limit.toString()));
    else users = await EmployeeModel.find();

    res.status(200).send(JSON.stringify(users));
  }
}

export default connectDB(handler);
