import { NextResponse } from 'next/server';
import { createKysely } from '@vercel/postgres-kysely';
import { Database } from './entities';
const db = createKysely<Database>();

export async function GET(request: Request) {
  try {
    const invoices = await db
        .selectFrom('invoices')
        .innerJoin('customers', 'invoices.customer_id', 'customers.id')
        .select(['invoices.id','amount', 'customers.id as customers_id', 'customers.name as customers_name', 'customers.email as customers_email', 'customers.image_url as customers_image_url'])
        .where('customers.id', '=', '3958dc9e-712f-4377-85e9-fec4b6a6442a')
        .execute();
    return NextResponse.json(invoices, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
