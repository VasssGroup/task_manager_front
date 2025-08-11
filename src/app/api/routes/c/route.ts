import { NextResponse } from 'next/server';
import prismaClient from '@/lib/prisma';

export async function POST(request: Request) {    
    try {
        const { name, json } = await request.json();
        console.log('routes/create [POST]', { request, name, json });
        if (!name || !json) {
            return NextResponse.json({ message: `Отсутствует параметр: [${name ? 'json' : 'name'}] !`}, { status: 400 });
        }

        const result = await prismaClient.routes.create({ data: { name, json, udate: new Date() } });        
        const response = { id: result.id, name: result.name, message: 'created' };
        console.log('routes/create [POST] ♦', { result, response });

        return NextResponse.json(response);
    } catch (error) {
        return NextResponse.json({ error, message: `${error}` }, { status: 500 });
    }
}