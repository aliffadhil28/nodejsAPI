import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
    const [name, setName] = useState("");
    const [member, setMember] = useState("");
    const [gender, setGender] = useState("L");
    const navigate = useNavigate();

    const saveUser = async (e) => {
        e.preventDefault();
        try{
            await axios.post('http://localhost:5000/users',{
                name,
                member,
                gender
            });
            navigate("/");
        }catch(error){
            console.log(error);
        }
    }

    return (
        <div className="columns mt-5 is-centered">
            <div className="column is-half">
                <form onSubmit={saveUser}>
                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                            <input type="text"
                                className="input"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Name" />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Member</label>
                        <div className="control">
                            <input type="text"
                                className="input"
                                value={member}
                                onChange={(e) => setMember(e.target.value)}
                                placeholder="Member" />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Gender</label>
                        <div className="control">
                            <div className="select is-fullwidth">
                                <select value={gender}
                                    onChange={(e) => setGender(e.target.value)}>
                                    <option value="P">Perempuan</option>
                                    <option value="L">Laki - Laki</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="field">
                        <button type='submit' className='button is-success'>Simpan</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddUser;