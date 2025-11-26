function ProfilePage({ user }) {
  return (
    <div>
      <h1>Welcome To Your Profile</h1>
      <div>Email: {user.email}</div>
    </div>
  );
}

export default ProfilePage;
