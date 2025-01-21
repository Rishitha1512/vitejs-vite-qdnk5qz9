// write the component code here
function Usercard() {
    const profilePhoto = 'https://img.freepik.com/premium-vector/woman-avatar-profile-round-icon_24640-14047.jpg?w=1060';
    const name = 'Sara';
    const email = 'sara@gmail.com';
    const phoneNumber = '7869005645';
    const address = '1234 Elm Street, Springfield, IL, 62701';
  return (
    <div className="user-card">
      <div className="profile-photo">
        <img src={profilePhoto} alt="Profile" />
      </div>
      <div className="user-details">
        <h3>{name}</h3>
        <p><i>Email:</i> {email}</p>
        <p><i>Phone:</i> {phoneNumber}</p>
        <p><i>Address:</i> {address}</p>
      </div>
    </div>
  );
}

export default Usercard;