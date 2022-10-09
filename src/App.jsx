import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'
import FormUser from './components/FormUser'
import Usercard from './components/Usercard'

const URL = 'https://users-crud1.herokuapp.com'

function App() {

  const [updateInfo, setUpdateInfo] = useState() //El encargado de pasar informacion entre dos hermanos.
  const [users, setUsers] = useState()

  const [closeForm, setCloseForm] = useState(true)


  //Trae todos los users
  const getUsers = () => {
    axios.get(`${URL}/users/`)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getUsers();
  }, [])

  //Hace el Create
  const createUser = data => {

    axios.post(`${URL}/users/`, data)
      .then(res => {
        console.log(res.data)
        getUsers()
        setCloseForm(true)
      })

      .catch(err => console.log(err))
  }

  //Hace el Detele
  const deleteUser = id => {
    axios.delete(`${URL}/users/${id}/`)
      .then(res => {
        console.log(res.data)
        getUsers()
      })
      .catch(err => console.log(err))
  }

  //Hace el update 
  const updateuser = (id, data) => {
    const urlUpdate = `${URL}/users/${id}/`
    axios.patch(urlUpdate, data)
      .then(res => {
        console.log(res)
        getUsers()
        setCloseForm(true)
      })
      .catch(err => console.log(err))
  }

  const handleClose = () => {
    setCloseForm(false)
  }

  return (
    <div className="App">

      <section className="usuarios-view">

        <div className="page_top">
          <h1>Users C.R.U.D</h1>
          <button onClick={handleClose} className='create_btn'>Create a new user</button>
        </div>


        <article className={`form__container ${closeForm && 'disable_form'}`}>
          <FormUser createUser={createUser}
            updateInfo={updateInfo}
            updateuser={updateuser}
            setUpdateInfo={setUpdateInfo}
            setCloseForm={setCloseForm}
          />
        </article>

        <article className="user__container">
          {
            users?.map(user => (
              <Usercard
                user={user}
                key={user.id}
                deleteUser={deleteUser}
                setUpdateInfo={setUpdateInfo}
                setCloseForm={setCloseForm}
              />
            ))
          }
        </article>

      </section>
    </div>
  )
}

export default App
