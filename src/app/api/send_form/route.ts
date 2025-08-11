import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log('send_form [POST]', { body });
    //
    return NextResponse.json({ message: 'Form accepted!' });
  } catch (error) {
    return NextResponse.json({ error, status: 500 });
  }
}