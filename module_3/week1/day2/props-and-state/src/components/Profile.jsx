function Profile({ user }) {
  const { name, pet } = user;
  return (
    <>
      <h1 className="profile-name">{name}'s Profile</h1>
      <p>and she has a {pet}</p>
    </>
  );
}
export default Profile;
