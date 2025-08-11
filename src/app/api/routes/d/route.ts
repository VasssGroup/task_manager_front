//import { NextResponse } from 'next/server';
import prismaClient from '@/lib/prisma';

export async function DELETE(request: Request) {
    try {
        const { name, id } = await request.json();
        await prismaClient.routes.delete({
            where: {
                id,
                name
            }
        });
    } catch {
        //
    }
}