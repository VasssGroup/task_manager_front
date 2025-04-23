import prismaClient from '@/lib/prisma';

export default async function getTexts() {
    try {
        const texts = await prismaClient.texts.findMany();

        const result: Record<string, string> = {};
        for (const text of texts) {
            result[text.name] = text.text;
        }

        return result;
    } catch {
        return null;
    }
}