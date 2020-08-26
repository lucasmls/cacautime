
export interface Month {
  month: "January" | "February" | "March" | "April" | "May" | "June" | "July" | "August" | "September" | "October" | "November" | "December",
  year: string,
  number: string,
}

export interface ConsolidatedMonth {
  subtotal: number;
  paidAmount: number;
  scheduledAmount: number;
  sales: Sale[];
}

export interface Sale {
  id: number;
  status: "paid" | "not_paid";
  paymentMethod: "money" | "transfer" | "scheduled";
  candyId: number;
  candyName: string;
  candyPrice: number;
  customerId: number;
  customerName: string;
}
