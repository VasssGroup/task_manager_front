import { NextRequest, NextResponse } from 'next/server';
import prismaClient from '@/lib/prisma';

export async function GET(request: NextRequest) {    
    try {
        const name = request.nextUrl.searchParams.get('name') || '';
        console.log('routes/read [GET]', { name });

        if (!name) {
            const allRoutes = await prismaClient.routes.findMany();

            return NextResponse.json(allRoutes.map(({ id, name, json }) => ({ id, name, json }))); 
        }

        const selectedRoutes = await prismaClient.routes.findUnique({
            where: {
                name
            }
        });
        console.log('routes/read [GET] ♦♦►', { selectedRoutes });

        return NextResponse.json(selectedRoutes);
    } catch (error) {
        return NextResponse.json({ error, status: 500 });
    }
}