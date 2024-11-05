import { GoTrash } from "react-icons/go";
import { Button } from '../index';
import { removeUser } from "../../Redux/store";
import useThunk from "../../hooks/useThunk";


const UserListItem = ({ user }) => {
    const [isLoading, removeUserError, doRemoveUser] = useThunk(removeUser);

    const handleClick = () => {
        doRemoveUser(user);
    };

    return (
        <div className="my-2 border rounded">
            <div className="flex p-2 justify-between items-center cursor-pointer">
                <Button onClick={handleClick}>
                    <GoTrash />
                </Button>
                {removeUserError && <div>Error Deleting Users</div>}
                {user.name}
            </div>
        </div>
    );
};

export default UserListItem;