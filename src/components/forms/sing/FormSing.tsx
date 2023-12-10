'use client';

import React, { ChangeEvent, FC, FormEvent, FormEventHandler, useState } from 'react';
import Input from '@/components/input/Input';
import Textarea from '@/components/input/Textarea';

import Button from '@/components/button/Button';
import IconifyIcon from '@/components/iconify/IconifyIcon';
import Link from '@/components/link/Link';

import styles from './styles.module.scss';

interface DataProps {
    name: string;
    email: string;
    company: string;
    service: string;
    message: string;
}

type StateProps = 'success' | 'error' | 'loading' | '';

const FormSing: FC = () => {
    const [invalidFields, setInvalidFields] = useState<Record<string, boolean>>({});
    const [state, setState] = useState<StateProps>('');
    const [data, setData] = useState<DataProps>({
        name: '',
        email: '',
        company: '',
        service: '',
        message: '',
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

            if (state !== 'loading') {
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
            }
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
                        name='name'
                        placeholder='Digite seu nome'
                        autoComplete='off'
                        styleClasses={['w-100', invalidFields.name ? 'border-red' : '']}
                        defaultValue={data.name}
                        onChange={handleInput}
                        onInvalid={handleInvalid}
                        readOnly={isLoading}
                        required
                    />

                    <Input
                        type='email'
                        name='email'
                        placeholder='Digite seu e-mail'
                        autoComplete='off'
                        styleClasses={['w-100', invalidFields.email ? 'border-red' : '']}
                        defaultValue={data.email}
                        onChange={handleInput}
                        onInvalid={handleInvalid}
                        readOnly={isLoading}
                        required
                    />

                    <Input
                        type='text'
                        name='company'
                        placeholder='Qual sua empresa?'
                        autoComplete='off'
                        styleClasses={['w-100', invalidFields.company ? 'border-red' : '']}
                        defaultValue={data.company}
                        onChange={handleInput}
                        onInvalid={handleInvalid}
                        readOnly={isLoading}
                        required
                    />

                    <Input
                        type='text'
                        name='service'
                        placeholder='Qual serviço oferecido?'
                        autoComplete='off'
                        styleClasses={['w-100', invalidFields.service ? 'border-red' : '']}
                        defaultValue={data.service}
                        onChange={handleInput}
                        onInvalid={handleInvalid}
                        readOnly={isLoading}
                        required
                    />

                    <Textarea
                        name='message'
                        placeholder='Conte-nos seu problema'
                        styleClasses={['w-100', invalidFields.message ? 'border-red' : '']}
                        defaultValue={data.message}
                        onChange={handleInput}
                        onInvalid={handleInvalid}
                        readOnly={isLoading}
                        required
                    />

                    {isError && <span className='error-message'>Ocorreu um erro, tente novamente.</span>}

                    <Button type='button' loading={isLoading}>
                        Enviar
                    </Button>
                </form>
            )}

            {isSuccess && (
                <div className={styles.successBox}>
                    <span>
                        Recebemos sua solicitação
                        <IconifyIcon icon='line-md:emoji-smile' />
                    </span>

                    <p className={styles.fade}>Não se preocupe, vamos facilitar seus negócios.</p>
                    <p className={styles.fade}>Fique de olho em seu e-mail.</p>
                    <p className={styles.fade}>
                        Dúvidas? Entre em contato com nós via{' '}
                        <Link href='https://wa.me/+5549985058797' target='blank'>
                            WhatsApp
                        </Link>
                    </p>
                </div>
            )}
        </>
    );
};

FormSing.displayName = 'Sing-up Form';

export default FormSing;
