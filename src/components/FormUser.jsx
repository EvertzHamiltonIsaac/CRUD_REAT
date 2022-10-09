import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import './styles/formUser.css'

const dataDefault = {
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    birthday: '',
}

const FormUser = ({ createUser, updateInfo, updateuser, setUpdateInfo, setCloseForm }) => {

    const { register, handleSubmit, reset } = useForm()

    //Para rellenar la informacion utilizamos la parte de reset
    useEffect(() => {
        if (updateInfo) {
            reset(updateInfo)
        }
    }, [updateInfo])

    const submit = data => {

        if (updateInfo) {
            updateuser(updateInfo.id, data);
            setUpdateInfo();
        } else {
            createUser(data);
            setUpdateInfo();
        }
        reset(dataDefault);
    }

    const handleEquis = () => {
        setCloseForm(true)
    }

    return (
        <form onSubmit={handleSubmit(submit)} className='form shadow'>
            <div className="icon_equis" onClick={handleEquis}>
                <i className="fa-solid fa-xmark"></i>
            </div>
            <h2 className='form__tittle'>{updateInfo ? 'Edit User' : 'New User'}</h2>

            <div className='form_div'>
                <label htmlFor="email">E-mail: </label>
                <input type="email" id='email' placeholder='Enter e-mail' {...register('email')} className='form__input' />
            </div>
            <div className='form_div'>
                <label htmlFor="password">Password: </label>
                <input type="password" id='password' placeholder='Enter your password'{...register('password')} className='form__input' />
            </div>
            <div className='form_div'>
                <label htmlFor="first_name">Name: </label>
                <input type="text" id='first_name' placeholder='Enter your name' {...register('first_name')} className='form__input' />
            </div>
            <div className='form_div' >
                <label htmlFor="last_name">Last Name: </label>
                <input type="text" id='last_name' placeholder=' Enter your last name' {...register('last_name')} className='form__input' />
            </div>
            <div className='form_div'>
                <label htmlFor="birthday">Birthday: </label>
                <input type="date" id="birthday" {...register('birthday')} className='form__input' />
            </div>

            <button className='form__btn'>{updateInfo ? 'Update' : 'Create'}</button>
        </form >
    )
}

export default FormUser