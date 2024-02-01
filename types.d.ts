type TableRow = {
  date: string
  id: string
  paymentMethod: string
  price: string
  status: string
}

export interface ITable {
  title: string
  headers: string[]
  items: TableRow[]
}
