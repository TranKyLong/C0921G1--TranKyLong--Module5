import {Contract} from './Contract';


export class Employee {
  id: number;
  employeeName: string;
  employeeBirthday: string;
  employeeIdCard: string;
  employeeSalary: number;
  employeePhone: string;
  employeeMail: string;
  employeeAdress: string;
  position: string;
  education: string;
  divisionId: string;
  contractSet ? : Contract;

  constructor() {
  }
}
