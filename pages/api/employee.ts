// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Query } from "mongoose";
import type { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../middlewares/mongodb";
import EmployeeModel from "../../models/employee";

async function _filter(name: string, office: string) {
  var query: any = {};
  if (name !== "") query["name"] = { $regex: name };
  if (office != "") query["office"] = { $regex: office };
  return await EmployeeModel.find(query);
}

async function handler(req: NextApiRequest, res: NextApiResponse<String>) {
  if (req.method == "GET") {
    let { limit, name, office } = req.query;

    let users;

    if (name || office) {
      let results = await _filter(name.toString(), office.toString());

      if (results && results.length > 0) {
        res.status(200).send(JSON.stringify(results));
        return;
      }
    }

    if (limit)
      users = await EmployeeModel.find({ published: true }).limit(
        parseInt(limit.toString())
      );
    else users = await EmployeeModel.find({ published: true });

    res.status(200).send(JSON.stringify(users));
  }
}

export default connectDB(handler);
