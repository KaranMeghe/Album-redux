import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchUsers, addUser } from '../../Redux/store';
import { Button, Skelleton } from '../index';

const UsersList = () => {
    const dispatch = useDispatch();
    const { isLoading, data, error } = useSelector((state) => state.users);
    const times = isLoading ? data.length : 0;

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    if (isLoading) {
        return <Skelleton times={times === 0 ? 5 : times} />;
    }
    if (error) {
        return <div>Error</div>;
    }

    const handleAddUser = () => {
        dispatch(addUser());
    };


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
            <Button onClick={handleAddUser}>+ Add Users</Button>
        </div>
        {rendereUsers}
    </div>;
};

export default UsersList;;