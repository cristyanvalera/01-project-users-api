export const UserCard = ({ user }) => {
    return (
        <div>
            <h2>
                {user.name.first} {user.name.last}
            </h2>

            <figure>
                <img src={user.picture.large} alt="user photo" />
            </figure>

            <h3>
                <small>{user.dob.age} years </small>
                (<small>{new Date(user.dob.date).toLocaleDateString()}</small>)
            </h3>

            <p>
                {user.email}
                <br />
                <span>{user.phone}</span>
            </p>
            <address>
                Address: <br />
                <small>
                    {user.location.city}, {user.location.state}, {user.location.country}
                </small>

                <br />

                <small>
                    {user.location.street.name}, {user.location.street.number}
                </small>
            </address>

            <hr />
        </div>
    )
};
