'use client';

import React, { ChangeEvent, FC, FormEvent, FormEventHandler, useState } from 'react';
import Input from '@/components/input/Input';

import Button from '@/components/button/Button';

import styles from './styles.module.scss';
import Link from 'next/link';

import styleLink from '@/components/link/styles.module.scss';

interface DataProps {
    user: string;
    password: string;
}

type StateProps = 'success' | 'error' | 'loading' | '';

const FormLogin: FC = () => {
    const [invalidFields, setInvalidFields] = useState<Record<string, boolean>>({});
    const [state, setState] = useState<StateProps>('');
    const [data, setData] = useState<DataProps>({
        user: '',
        password: '',
    });

    const isSuccess = state === 'success';
    const isError = state === 'error';
    const isLoading = state === 'loading';

    const handleInput = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        setInvalidFields((prev) => ({ ...prev, [name]: false }));
    };

    const handleInvalid: FormEventHandler<HTMLInputElement | HTMLTextAreaElement> = (event) => {
        const name = event.currentTarget.name;
        setInvalidFields((prev) => ({ ...prev, [name]: true }));

        console.log('invalid');
        console.log(name);
    };

    const handleSubmit = async (event: FormEvent) => {
        try {
            event.preventDefault();
            setInvalidFields({});
            setState('loading');

            // const response = await fetch('/api/sendEmail', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(data),
            // });

            // const dataResponse = await response.json();
            // console.log(dataResponse.message);

            // if (response.ok) {
            //     setState('success');
            // } else {
            //     setState('error');
            // }

            await new Promise((resolveInner) => {
                setTimeout(resolveInner, 3000);
            });

            setState('success');
        } catch (error) {
            console.error('Erro ao enviar o formulário:', error);
            setState('error');
        }
    };

    return (
        <>
            {!isSuccess && (
                <form className={styles.form} onSubmit={handleSubmit}>
                    <Input
                        type='text'
                        name='user'
                        placeholder='Digite seu usuário ou e-mail'
                        autoComplete='off'
                        styleClasses={['w-100', invalidFields.user ? 'border-red' : '']}
                        defaultValue={data.user}
                        onChange={handleInput}
                        onInvalid={handleInvalid}
                        readOnly={isLoading}
                        required
                    />

                    <Input
                        type='password'
                        name='password'
                        placeholder='Digite sua senha'
                        autoComplete='off'
                        styleClasses={['w-100', invalidFields.password ? 'border-red' : '']}
                        defaultValue={data.password}
                        onChange={handleInput}
                        onInvalid={handleInvalid}
                        readOnly={isLoading}
                        required
                    />

                    {isError && <span className='error-message'>Ocorreu um erro, tente novamente.</span>}

                    <div className={styles.buttons}>
                        <Button type='button' loading={isLoading}>
                            Entrar
                        </Button>

                        <span>
                            Não possui uma conta?
                            <Link className={styleLink.linkModule} href='/inscricao'>
                                Inscreva-se agora
                            </Link>
                            `
                        </span>
                    </div>
                </form>
            )}
        </>
    );
};

FormLogin.displayName = 'Sing-up Form';

export default FormLogin;
