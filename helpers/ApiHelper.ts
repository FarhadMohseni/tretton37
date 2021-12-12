import axios from "axios";
import Employee from "../interfaces/employee";

export default class ApiHelper {
  public static async getEmployees(limit = 0): Promise<Employee[]> {
    let limitQuery = limit > 0 ? `?limit=${limit}` : "";
    const res = await axios.get(
      `${process.env.BASE_URL}/api/employee${limitQuery}`,
      {
        headers: {
          Authorization: process.env.API_KEY, //the token is a variable which holds the token
        },
      }
    );
    var data: Employee[] = await res.data;

    data = data.filter((i: Employee) => i.published);
    return data;
  }
}
