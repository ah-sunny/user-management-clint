import { useEffect, useState } from "react";

const AddUser = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])



    const handleAddUser = (e) => {
        e.preventDefault();
        const forms = new FormData(e.currentTarget)
        const name = forms.get('name');
        const email = forms.get('email')
        const user = { name, email }
        // console.log(user)
      

        //server post
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log('inside post response', data)
                const newUser = [...users,data]
                setUsers(newUser)
                e.target.reset()
                
            })

    }

    return (
        <div>
            <h1 className="text-3xl font-bold underline">User input </h1>
            <div className="text-center mx-auto text-xl mt-7">
                <form onSubmit={handleAddUser} >
                    <label className="input input-bordered mb-4 flex items-center gap-2">
                        Name :
                        <input type="text" name="name" className="grow" placeholder="Enter your name" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        Email :
                        <input type="text" name="email" className="grow" placeholder="email@site.com" />
                    </label>
                    <button className="btn btn-primary mt-4">Add user</button>
                </form>
            </div>
            {/* show all user */}

            <div>
                <h1>All users  : {users.length} </h1>
                <div>
                    {users.map(user => <li key={user.id}>
                       ID:{user.id},---- name: {user.name}, ---- Email: {user.email}
                    </li>)

                    }
                </div>

            </div>

        </div>
    );
};

export default AddUser;