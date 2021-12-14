import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchRockets } from '../../redux/rockets/rockets';

const rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(rockets.length);
    if (rockets.length !== 0) return;
    dispatch(fetchRockets());
  }, []);

  return (
    <main className="main">
      <ul className="rocket-list" />
    </main>
  );
};

export default rockets;
