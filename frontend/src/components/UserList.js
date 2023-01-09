import React,{useState,useEffect} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

export const UserList = () => {
    const [users, setUsers] = useState([]);
    const getUsers = async () => {
        const response = await axios.get('http://localhost:5000/users');
        setUsers(response.data);
    }
    useEffect(()=>{
        getUsers();
    },[]);

    const deleteUser = async (id) =>{
        try{
            await axios.delete(`http://localhost:5000/users/${id}`);
            getUsers();
        }
        catch (error){
            console.log(error);
        }
    }

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <Link to={`add`} className = "button is-success">Tambah</Link>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Member</th>
                    <th>Gender</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                    <tr key = {user.id}>
                        <td>{index +1}</td>
                        <td>{user.name}</td>
                        <td>{user.member}</td>
                        <td>{user.gender}</td>
                        <td>
                            <Link to={`edit/${user.id}`} className="button is-small is-info mr-2">Edit</Link>
                            <button onClick = {()=> deleteUser(user.id)} className="button is-small is-danger">Delete</button>
                        </td>
                    </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default UserList;