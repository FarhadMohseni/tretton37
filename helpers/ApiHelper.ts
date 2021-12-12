import axios from "axios";
import Employee from "../interfaces/employee";

export default class ApiHelper {
  public static async getEmployees(limit = 0): Promise<Employee[]> {
    let limitQuery = limit > 0 ? `?limit=${limit}` : "";
    var baseUrl = process.env.BASE_URL ? process.env.BASE_URL : "";
    const res = await axios.get(`${baseUrl}/api/employee${limitQuery}`);
    var data: Employee[] = await res.data;
    data = data.filter((i: Employee) => i.published);
    return data;
  }
  public static async getEmployeesCount(): Promise<Number> {
    var baseUrl = process.env.BASE_URL ? process.env.BASE_URL : "";
    const res = await axios.get(`${baseUrl}/api/totalEmployees`);
    var data: Number = await parseInt(res.data.totalEmployees);

    return data;
  }
}
