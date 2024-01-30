import { useEffect, useRef, useState } from 'react'
import './App.css'
import { UserCard } from './components/UserCard';
import { useFetch } from './hooks/useFetch';

function App() {
    // const [users, setUsers] = useState();
    const [paginate, setPaginate] = useState(1);
    const [users, getUsers] = useFetch();

    useEffect(() => {
        const url = `https://randomuser.me/api/?results=${paginate}`;
        getUsers(url);
    }, [paginate]);

    const paginateBy = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        setPaginate(paginateBy.current.value);
    };

    return (
        <div>
            <h1>Despliegue dinámico con map</h1>

            <form onSubmit={handleSubmit}>
                <input type="number" ref={paginateBy} />

                <button>Go</button>
            </form>

            {users?.results.map(user => (
                <UserCard user={user} key={user.id.value} />
            ))}
        </div>
    );
}

export default App
