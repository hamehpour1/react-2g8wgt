import React, { useEffect } from 'react';
import useRequest from './request';
import { useQuery } from 'react-query';
import './style.css';

function Users() {
  const { request } = useRequest();
  const getData = () => {
    return request.get('/users');
  };
  const query = useQuery('users', getData);
  const { data, refetch, isLoading } = query;
  useEffect(() => {
    refetch();
  }, []);
  //console.log(data[0].email);

  return (
    <>
      {isLoading ? (
        <h1> Loading...</h1>
      ) : (
        data.map((user) => (
          <div key={user.id} class="item">
            <i class="material-icons">account_circle</i>
            <div>
              <p class="name">{user.name}</p>
              <p class="email">{user.email}</p>
              <p class="address">
                {user.address.street +
                  ' ' +
                  user.address.suite +
                  ' ' +
                  user.address.city +
                  ' ' +
                  user.address.zipcode}
              </p>
            </div>
          </div>
        ))
      )}
    </>
  );
}
export default Users;
