import styles from './pages/home.module.css'
import { useState, useEffect} from 'react'

function Home() {
    const [form, setForm] = useState({fname: '', lname:'', address:''})
    const  [users, setUsers] = useState([])

    const fetchUsers = async () => {
        try {
            const res = await fetch('http://localhost:3000/users');
            if(!res.ok) throw new Error('failed to fetch')
            const data = await res.json()
            setUsers(data)
        } catch(err) {
            console.error(err)
        }
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const res = await fetch('http://localhost:3000/users', {
                method: 'POST',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify(form)
            } )
            if(!res.ok) throw new Error('Failed to save')
                setForm({fname: '', lname: '', address: ''})

            fetchUsers()

        } catch(err) {
            console.error(err)
        }
    }
    return(
        <>
        <div className={styles.pageContainer}>
            <form className={styles.form}>
                <label>first name</label>
                <input
                type="text"
                name="fname"
                placeholder="first name"
                value={form.fname}
                onChange={handleChange} required/>
                <label>last name</label>
                <input
                type="text"
                name="lname"
                placeholder="lastname"
                value={form.lname}
                onChange={handleChange}
                required/>
                <label>address</label>
                <input
                type="text"
                name="address"
                placeholder="address"
                value={form.address}
                onChange={handleChange} required/>
                <button type="submit" onSubmit={handleSubmit}>ADD</button>
            </form>

            <table className={styles.table}>
                <thead>
                    <tr>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>address</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) =>( 
                    <tr key={user.id}>
                        <td>{user.fname}</td>
                        <td>{user.lname}</td>
                        <td>{user.address}</td>
                    </tr>
                    ))}
                </tbody>
            </table>

        </div>
        </>
    )
}
export default Home