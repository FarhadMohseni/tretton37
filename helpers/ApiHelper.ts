import axios from "axios";
import Employee from "../interfaces/employee";

export default class ApiHelper {
  public static async getEmployees(): Promise<Employee[]> {
    const res = await axios.get("https://api.1337co.de/v3/employees", {
      headers: {
        Authorization: process.env.API_KEY,
      },
    });

    var data: Employee[] = await res.data;

    return data;
  }
}
