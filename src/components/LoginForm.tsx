'use client'
import { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import prismaClient from '@/lib/prisma';
import { Form } from './FormAuth';

export const LoginForm = () => {
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();

    useEffect(() => {
        // isAuth go to lastPage or mainPage 
    }, []);

    const handleChangeEmail = (e?: ChangeEvent<HTMLInputElement>) => setEmail(e?.target?.value);
    const handleChangePassword = (e?: ChangeEvent<HTMLInputElement>) => setPassword(e?.target?.value);
    const handleSubmit = (e?: FormEvent<HTMLFormElement>) => {
        const users = prismaClient.user.findMany();
        console.log('[Login] ♦ Отправка формы!', { e, email, password, users });
        //
    }

    return <Form
        type='log'
        emailValue={email}
        passwordValue={password}        
        handleChangeEmail={handleChangeEmail}
        handleChangePassword={handleChangePassword}
        handleSubmit={handleSubmit}
    />;
}