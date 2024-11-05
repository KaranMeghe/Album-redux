import { useSelector } from 'react-redux';
import { useEffect, } from 'react';
import { fetchUsers, addUser } from '../../Redux/store';
import { Skelleton, UserListItem, Button } from '../index';
import useThunk from '../../hooks/useThunk';

const UsersList = () => {
    const [isUserLoading, loadingUsersError, doFetchUsers] = useThunk(fetchUsers);
    const [isCreatingUser, creatingUserError, handleAddUser] = useThunk(addUser);
    const { data } = useSelector((state) => state.users);
    const times = isUserLoading ? data.length : 0;

    useEffect(() => {
        doFetchUsers();
    }, []);

    if (isUserLoading) {
        return <Skelleton times={times === 0 ? 5 : times} />;
    }
    if (loadingUsersError) {
        return <div>Error</div>;
    }

    const rendereUsers = data.map((user) => {
        return <UserListItem user={user} key={user.id} />;
    });


    return <div>
        <div className='flex flex-row justify-between m-3'>
            <h1 className='m-2 text-xl'>Users</h1>
            <Button loading={isCreatingUser} onClick={handleAddUser}>+ Add Users</Button>
        </div>
        {rendereUsers}
    </div>;
};

export default UsersList;;