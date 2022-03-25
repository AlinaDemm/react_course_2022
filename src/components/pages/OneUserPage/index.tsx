import React from 'react';
import { Navigate } from 'react-router-dom';
import PageWrapper from '../../common/PageWrapper';

const OneUserPage = ({ user }: any) => {
  console.log(user);

  if (!user) {
    return <h1>NOT FOUND</h1>;
  }

  return (
    <>
      <h1>OneUserPage</h1>
      <h1>{user?.name}</h1>
      <h1>{user?.age}</h1>
    </>
  );
};
export default OneUserPage;
