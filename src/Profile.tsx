interface Props {
  username: string;
  name: string;
}

const Profile = ({ username, name }: Props) => {
  return (
    <div>
      <div>
        <b>{username}</b>
      </div>
      <div>
        <span>({name})</span>
      </div>
    </div>
  );
};

export default Profile;
