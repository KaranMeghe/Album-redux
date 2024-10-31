import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchUsers, addUser } from '../../Redux/store';
import { Button, Skelleton } from '../index';
import useThunk from '../../hooks/useThunk';

const UsersList = () => {



    const [isUserLoading, loadingUsersError, doFetchUsers] = useThunk(fetchUsers);

    const [isCreatingUser, creatingUserError, handleAddUser] = useThunk(addUser);

    const dispatch = useDispatch();
    const { data } = useSelector((state) => state.users);
    const times = isUserLoading ? data.length : 0;

    useEffect(() => {
        doFetchUsers();
    }, [dispatch]);

    if (isUserLoading) {
        return <Skelleton times={times === 0 ? 5 : times} />;
    }
    if (loadingUsersError) {
        return <div>Error</div>;
    }

    const rendereUsers = data.map((user) => {
        return <div key={user.id} className="my-2 border rounded">
            <div className="flex p-2 justify-between items-center cursor-pointer">
                {user.name}
            </div>
        </div>;
    });

    return <div>
        <div className='flex flex-row justify-between m-3'>
            <h1 className='m-2 text-xl'>Users</h1>
            {isCreatingUser ? <p>Creating User</p> : <Button onClick={handleAddUser}>+ Add Users</Button>}
        </div>
        {rendereUsers}
    </div>;
};

export default UsersList;;