'use client'
import { useRouter } from 'next/navigation';
import { useSession } from "next-auth/react"
//import Link from 'next/link';
import { Button } from '@/components/Button';

export const LogIn = () => {
    const router = useRouter();
    const { data: session, status } = useSession();
    if (session !== null) return null;
    const handleClick = () => {
        console.log('◄ GoTo → LogIn ►', { router });
        router.push('/login')
    };
    console.log('Войти!', { session, status, router });

    return <div className="w-full h-full text-right p-3 text-gray-300 flex flex-row items-center justify-end">
        {/*<Link href="" onClick={handleClick}>Войти</Link>*/}
        <Button
            className="text-gray-300 hover:text-gray-100 leading-none cursor-pointer border-2 border-solid border-gray-700 hover:border-gray-300 rounded-2xl pt-2 pb-2 pr-5 pl-5"
            handleClick={handleClick}
        >Войти</Button>
    </div>;
}