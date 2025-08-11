'use client'
import { useSession } from "next-auth/react";
//import Image from "next/image";
import { Button } from '@/components/Button';

export const Logout = () => {
    const { data: session, status } = useSession();
    if (!session) return null;
    console.log('◄ LogOut ►', { session, status });
    const handleClick = () => {
        console.log('◄ LogOut  Click! ►', { session, status });
    };

    return <div className="w-full h-full text-right p-3 text-gray-300 flex flex-row items-center justify-end">
        {session.user?.image && <img width={36} height={36} src={session.user.image} alt="avatar" className="mr-2 border-2 border-solid border-gray-700 rounded-full" />}
        <div>{session.user?.name || session.user?.email}</div>
        <Button
            handleClick={handleClick}
            className="text-gray-300 hover:text-gray-100 leading-none cursor-pointer border-2 border-solid border-gray-700 hover:border-gray-300 rounded-2xl pt-2 pb-2 pr-5 pl-5 ml-3"
        >logout</Button>
    </div>;
}