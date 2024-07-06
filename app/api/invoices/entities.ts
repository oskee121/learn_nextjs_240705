import {
  ColumnType,
  Generated,
  Insertable,
  JSONColumnType,
  Selectable,
  Updateable,
} from 'kysely'
export interface Database {
  invoices: InvoiceTable;
  customers: CustomerTable;
}
export interface CustomerTable {
  id: string
  name: string
  email: string
  image_url: string
}
export interface PetTable {
  id: Generated<number>
  name: string
  owner_id: number
  species: 'dog' | 'cat'
}
export interface InvoiceTable {
  id: string
  customer_id: number
  amount: number
  status: string
  date: ColumnType<Date, string | undefined, never>
}