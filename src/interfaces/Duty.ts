export interface Duty {
  id: number,
  date: string,
  candyQuantity: number,
}

export interface ConsolidatedDuty {
  id: number;
  date: string;
  quantity: number;
  subtotal: number;
  paidAmount: number;
  scheduledAmount: number;
  sales: Sale[];
}

export interface Sale {
  id: number;
  candyId: number;
  candyName: string;
  candyPrice: number;
  customerId: number;
  customerName: string;
  customerPhone: string;
  paymentMethod: "money" | "transfer" | "scheduled";
  status: "paid" | "not_paid";
}
