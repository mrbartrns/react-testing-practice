import { useState, useEffect } from 'react';
import axios from 'axios';

interface Props {
  id: number;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

const UserProfile = ({ id }: Props) => {
  const [userData, setUserData] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const getUser = async (id: number) => {
    setLoading(true);
    try {
      const response = await axios.get<User>(
        `https://jsonplaceholder.typicode.com/users/${id}`,
      );
      setUserData(response.data);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };
  useEffect(() => {
    getUser(id);
  }, [id]);

  if (loading) return <div>로딩중..</div>;

  if (!userData) return null;
  const { username, email } = userData;

  return (
    <div>
      <p>
        <b>Username: </b>
        {username}
      </p>
      <p>
        <b>Email: </b>
        {email}
      </p>
    </div>
  );
};

export default UserProfile;
