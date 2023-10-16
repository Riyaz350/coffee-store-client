
const User = (user) => {
    const {name, email, photo} =user.user
    console.log(name, email, photo)
    return (
        <div>
            <h1>{name}</h1>
            <h1>{email}</h1>
            <h1>{photo}</h1>
        </div>
    );
};

export default User;