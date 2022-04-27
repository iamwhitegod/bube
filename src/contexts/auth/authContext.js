import React, { createContext, useState } from 'react';
import axios from '../../util/axios';

export const AuthContext = createContext({
  token: sessionStorage.getItem('jwtToken') || null,
  signUp: () => {},
  signIn: () => {},
  signOut: () => {},
});

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  const signUp = async userData => {
    const newUser = {
      username: userData.username,
      firstname: userData.firstname,
      lastname: userData.lastname,
      email: userData.email,
      phone: userData.phone,
      password: userData.password,
    };

    try {
      const { status, data: results } = await axios.post('/auth/register', newUser);

      if (status !== 200 && !results?.success) throw Error();
      console.log(results?.data);
    } catch (err) {
      console.log('Something went wrong', err);
    }
  };

  const signIn = async userData => {
    const userLoginDetails = { email: userData.email, password: userData.password };

    try {
      const { status, data: results } = await axios.post(
        '/auth/login',
        userLoginDetails
      );

      if (status !== 200 && !results?.success) throw Error();
      // console.log(results?.data);
      const { token } = results?.data;
      sessionStorage.setItem('jwtToken', token);
      setToken(token);
    } catch (err) {
      console.log('Something went wrong', err);
    }
  };

  const signOut = () => {
    sessionStorage.removeItem('jwtToken');
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, signUp, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
