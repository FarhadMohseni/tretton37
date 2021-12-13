// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../middlewares/mongodb";
import EmployeeModel from "../../models/employee";

async function handler(req: NextApiRequest, res: NextApiResponse<String>) {
  if (req.method == "GET") {
    let count = await EmployeeModel.find({ published: true }).count();

    var json = {
      totalEmployees: count,
    };

    res.status(200).send(JSON.stringify(json));
  }
}

export default connectDB(handler);
