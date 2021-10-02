export interface Contract {
  id: number;
  dateGroup: {
    startDate: string;
    endDate: string;
  }
  deposit: number;
  totalMoney: number;
  employeeId: number;
  customerId: number;
  serviceId: number;
}
