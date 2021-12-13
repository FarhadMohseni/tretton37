import axios from "axios";
import Employee from "../interfaces/employee";

export default class ApiHelper {
  public static async getEmployees(
    limit = 0,
    name = "",
    office = ""
  ): Promise<Employee[]> {
    let limitQuery = limit > 0 ? `&limit=${limit}` : "";

    var baseUrl = process.env.BASE_URL ? process.env.BASE_URL : "";

    const res = await axios.get(
      `${baseUrl}/api/employee?name=${name}&office=${office}${limitQuery}`
    );

    var data: Employee[] = await res.data;

    return data;
  }

  public static async getEmployeesCount(): Promise<Number> {
    var baseUrl = process.env.BASE_URL ? process.env.BASE_URL : "";

    const res = await axios.get(`${baseUrl}/api/totalEmployees`);

    var data: Number = await parseInt(res.data.totalEmployees);

    return data;
  }
}
