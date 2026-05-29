import Link from "next/link";


const UserDetailsPage = async({params}) => {
    const {userId} = await params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = await res.json();
    console.log(user);
    return (
      <div>
        <div className="card bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">{user.name}</h2>
            <p>
              {user.email}
            </p>
            <div className="card-actions justify-end">
              <Link href="/user" className="btn">Go Back</Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default UserDetailsPage;