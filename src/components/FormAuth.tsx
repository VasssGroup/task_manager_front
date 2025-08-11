'use client'

import { FormEventHandler, MouseEventHandler, FormEvent, ChangeEventHandler } from 'react';
import Link from 'next/link';

import { Input } from './Input';

type RegLogType = 'reg' | 'log';

type FormProps = {
    type: RegLogType;
    emailValue?: string;
    passwordValue?: string;
    handleChangeEmail?: ChangeEventHandler<HTMLInputElement>;
    handleChangePassword?: ChangeEventHandler<HTMLInputElement>;
    handleSubmit?: (e?: FormEvent<HTMLFormElement>) => void;
    handleCancel?: MouseEventHandler<HTMLButtonElement>;
}

export const Form = ({ type, emailValue, passwordValue, handleChangeEmail, handleChangePassword, handleSubmit }: FormProps) => {      
    const isReg = type === 'reg';
    const formColorClasses = isReg ? 'border-blue-700 bg-green-200' : 'border-green-700 bg-blue-200';
    const headerColorClasses = isReg ? 'bg-blue-700 text-blue-100' : 'bg-green-700 text-green-100';
    const headerText = isReg ? 'Регистрация' : 'Авторизация';
    const LabelColorClasses = isReg ? 'text-blue-950' : 'text-green-950';
    const inputColorClasses = isReg ? 'border-blue-700' : 'border-green-700';
    const buttonText = isReg ? 'Отпрвить' : 'Войти';
    const buttonColorClasses = isReg ? 'border-blue-700 bg-blue-700 hover:bg-blue-900 text-blue-100' : 'border-green-700 bg-green-700 hover:bg-green-900 text-green-100';
    const onSubmitAndStopAutoSend: FormEventHandler<HTMLFormElement> = e => {
        e.preventDefault();
        handleSubmit?.(e);
    }
    
    return <div className='flex flex-col w-dvw h-dvh relative justify-center items-center'>
        <div className='fixed top-0 left-0 w-dvw h-dvh bg-gray-900'></div>
        <form className={`relative m-0 p-0 border-solid border-4 rounded-2xl ${formColorClasses}`} onSubmit={onSubmitAndStopAutoSend}>
            <header className={`flex flex-row p-5 justify-center items-center text-3xl ${headerColorClasses}`}>
                {headerText}
            </header>
            <section className={`flex flex-row p-5 pb-0`}>
                <label className={`w-1/4 pr-2 text-right ${LabelColorClasses}`}>Email:</label>
                <Input className={`w-3/4 pl-2 pr-2 rounded-md border-solid border-2 outline-0 ${inputColorClasses}`} type="email" onChange={handleChangeEmail} value={emailValue} />
            </section>
            <section className={`flex flex-row p-5 pb-0`}>
                <label className={`w-1/4 pr-2 text-right ${LabelColorClasses}`}>Пароль:</label>
                <Input className={`w-3/4 pl-2 pr-2 rounded-md border-solid border-2 outline-0 ${inputColorClasses}`} type="password" onChange={handleChangePassword} value={passwordValue} />
            </section>            
            {isReg ? <section className={`flex flex-row pl-5 pr-5 pt-2.5 pb-0 justify-end items-center`}>
                <Input className={`mr-2`} type="checkbox" />
                <label className={`text-sm text-blue-700 hover:text-blue-900`}>я не робот</label>                
            </section> : <section className={`flex flex-row pl-5 pr-5 pt-2.5 pb-0 justify-end items-center`}>
                <Link className={`text-sm text-green-700 hover:text-green-900 hover:underline`} href="/registration">Регистрация</Link>
            </section>}
            <footer className={`flex flex-row p-3 justify-center items-center`}>
                <Input className={`pl-4 pr-4 pt-2 pb-2 cursor-pointer border-solid border-1 rounded-md leading-none ${buttonColorClasses}`} type="submit" value={buttonText} />
            </footer>
        </form>
    </div>;
}