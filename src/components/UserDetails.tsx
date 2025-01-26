import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { selectUserById } from '../features/users/selectors';
import { updateUserName } from '../features/users/usersSlice';

const UserDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const userId = parseInt(id || '0');
    const user = useSelector(selectUserById(userId));
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const homePage = () => {
        navigate('/');
    }

    const [name, setName] = useState(user?.name || '');

    const handleUpdate = () => {
        if (user) {
            dispatch(updateUserName({ id: user.id, name }));
        }
    };

    if (!user) {
        return <p>User not found</p>;
    }

    return (
        <div>
            <h1>Update User</h1>
            <p>ID: {user.id}</p>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={handleUpdate}>Update</button>
            <hr/>
            <button onClick={homePage}>Home</button>
        </div>
    );
};

export default UserDetails;
