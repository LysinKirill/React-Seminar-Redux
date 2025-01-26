import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectUsers } from '../features/users/selectors';

const UserList: React.FC = () => {
    const users = useSelector(selectUsers);

    return (
        <div>
            <h1>User List</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <Link to={`/users/${user.id}`}>{user.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
