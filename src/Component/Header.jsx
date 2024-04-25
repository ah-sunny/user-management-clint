
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='my-5 flex gap-4 justify-center font-semibold text-blue-600'>
            <Link to='/users'>Users List</Link>
            <Link to='/adduser'>Add user</Link>
        </div>
    );
};

export default Header;