import { load } from '../../store/slices/userSlice';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';

export default function Load({ children }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((result) => {
        dispatch(
          load(
            result.map((x) => ({
              id: x.id,
              name: x.name,
              username: x.username.toLowerCase(),
            })),
          ),
        );
      });
  }, [dispatch]);

  return children;
}
