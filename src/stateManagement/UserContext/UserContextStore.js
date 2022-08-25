import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { createContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { checkTokenExpired } from './../../utilities/checkTokenExpired';
import { useNavigate } from 'react-router-dom';
import { serverLink } from './../../utilities/links';
import Loading from '../../components/Shared/Loading';
const UserStore = createContext();

const UserStoreProvider = ({ children }) => {
  const navigate = useNavigate();

  //get user data with auth
  const [globalUser] = useAuthState(auth);
  const userEmail = globalUser?.email;


  const [user, setUser] = useState([]);

  // Get user data form api
  const fetchUser = async () => {
    axios
      .get(`${serverLink}/user/email/${userEmail}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      })
      .then((res) => setUser(res.data))
      .catch(function (err) {
        checkTokenExpired(err) === true && navigate('/login');
      });
  };

  useEffect(() => {
    if (userEmail) {
      fetchUser();
      axios
        .get(
          `${serverLink}/user/email/${userEmail}`,
          {},
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
          }
        )
        .then((res) => setUser(res.data))
        .catch(function (err) {
          checkTokenExpired(err) === true && navigate('/login');
        });
    } else {
      console.log('Email not found from useContex');
    }
  }, [userEmail]);

  // if (!userEmail) {
  //   return <Loading></Loading>
  // }
  //this state stored user data  //==> Don't move this one !
  const userData = {
    userEmail,
    user,
  };
  //user context provider component //==> Don't move this one !
  return <UserStore.Provider value={userData}>{children}</UserStore.Provider>;
};

export { UserStore, UserStoreProvider };
