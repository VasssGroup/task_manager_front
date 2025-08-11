'use client'
import { useState, FormEvent, ChangeEvent } from 'react';
import { Form } from '@/components/FormAuth';

export const RegistrationForm = () => {
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>(); 

    const handleChangeEmail = (e?: ChangeEvent<HTMLInputElement>) => setEmail(e?.target?.value);
    const handleChangePassword = (e?: ChangeEvent<HTMLInputElement>) => setPassword(e?.target?.value);
    const handleSubmit = (e?: FormEvent<HTMLFormElement>) => {
        console.log('[Registration] ♦ Отправка формы!', { e, email, password });
        //
    }
    
    return <Form
        type='reg'
        emailValue={email}
        passwordValue={password}        
        handleChangeEmail={handleChangeEmail}
        handleChangePassword={handleChangePassword}
        handleSubmit={handleSubmit}
    />;
}