import Link from "next/link";


const UserPage = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    console.log(users)
    return (
      <div>
        <h1 className="text-7xl">Hello Users</h1>
        <div className="grid grid-cols-3 gap-5 px-5">
          {users.map((user) => (
            <div key={user.id} className="card bg-primary text-primary-content">
              <div className="card-body">
                <h2 className="card-title">{user.name}</h2>
                <p>
                  {user.phone}
                </p>
                <div className="card-actions justify-end">
                  <Link href={`/user/${user.id}`} className="btn">See Details</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default UserPage;