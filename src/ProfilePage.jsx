function ProfilePage({ user, setUser }) {
  const logOut = () => {
    window.localStorage.removeItem("token");
    setUser({});
  };
  return (
    <div>
      <h1> Welcome To Your Profile </h1>
      <div> Email: {user.email} </div>
      <button onClick={logOut}>Log Out</button>
    </div>
  );
}

export default ProfilePage;
