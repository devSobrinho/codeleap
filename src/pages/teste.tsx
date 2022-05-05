/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';

import { ButtonSubmit } from '../components/Button/ButtonSubmit';
import { Form } from '../components/Form/Form';
import { Input } from '../components/Input';

export type TestProps = {
    title?: string;
};

type FormData = {
    test: string;
    password: string;
};

const schema = yup
    .object({
        test: yup.string().required().min(2).max(3),
        password: yup.string().required().min(2).max(3),
    })
    .required();

export default function Test({ title }: TestProps): JSX.Element {
    const {
        register,
        handleSubmit,
        formState,
        resetField,
        reset,
        control,
        getFieldState,
        watch,
        trigger,
    } = useForm<FormData>({
        resolver: yupResolver(schema),
    });

    const submitForm = (values: FormData) => {
        if (formState.isSubmitted) toast.info('criando post');
        if (formState.isSubmitSuccessful) toast.success('successo post');
        if (formState.errors.test) toast.error('erro post');

        console.log('formState.isSubmitting', formState.isSubmitting);
        console.log('formState', formState.isValid);
        console.log('values', values);
        console.log('control', control);
        console.log('getFieldState', getFieldState('test'));
        console.log(
            'trigger',
            trigger('test', {
                shouldFocus: true,
            }).then(data => console.log('data', data))
        );

        // agora e so enviar
    };

    return (
        <Form
            method="POST"
            title="Teste"
            handleFormSubmit={handleSubmit(submitForm)}
        >
            <Input
                name="test"
                label="a"
                placeholder="test"
                error={formState.errors.test}
                {...register('test')}
            />
            <Input
                name="password"
                label="password"
                placeholder="password"
                error={formState.errors.password}
                {...register('password')}
            />
            <ButtonSubmit
                mt="1rem"
                text="Enter"
                isLoading={formState.isSubmitting}
            />
        </Form>
    );
}
