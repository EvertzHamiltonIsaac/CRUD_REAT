import React, { useState } from 'react'
import './styles/userCard.css'

const Usercard = ({ user, deleteUser, setUpdateInfo, setCloseForm }) => {

    const handleEdit = () => {
        setUpdateInfo(user);
        setCloseForm(false);
    }

    return (
        <section className="user">

            <article className='user_box shadow'>

                <header className='user_box_tittle'>
                    <h2>{`${user.first_name} ${user.last_name}`}</h2>
                </header>

                <ul className='user_list'>
                    <li className='user_item'><span className='user_item_span'>Email: </span>{user.email}</li>
                    <li className='user_item'>
                        <span className='user_item_span'>
                            Birthday:
                        </span>
                        <i class="fa-sharp fa-solid fa-gift"></i>
                        {user.birthday}
                    </li>
                </ul>

                <footer className="user_btn">

                    <button onClick={handleEdit}>
                        <i className="fa-solid fa-pencil"></i>
                    </button>

                    <button onClick={() => deleteUser(user.id)}>
                        <i className="fa-solid fa-trash"></i>
                    </button>

                </footer>

            </article>

        </section >
    )
}

export default Usercard