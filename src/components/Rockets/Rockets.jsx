import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Badge from '../../abstracts/styledComponents/Badge.style';
import Button from '../../abstracts/styledComponents/Button.style';
import { fetchRockets, toggleReservation } from '../../redux/rockets/rockets';
import './Rockets.scss';

const rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!rockets.length) dispatch(fetchRockets());
  }, []);

  const handleRocketReservation = (rocketId) => {
    dispatch(toggleReservation(rocketId));
  };
  return (
    <main className="main rockets-container">
      {!rockets.length && !rockets.error && <p>Loading...</p>}
      {rockets.error && <p className="error">{rockets.error}</p>}
      <ul className="rocket-list flex flex-column">
        {!!rockets.length
          && rockets.map((rocket) => (
            <li key={rocket.id} className="rocket-item flex">
              <img src={rocket.image} alt={rocket.name} />
              <div className="rocket-item__info flex flex-column">
                <h3 className="rocket-name">{rocket.name}</h3>
                <p className="rocket-description">
                  {rocket.isReserved && <Badge text="reserved" isActive />}
                  {rocket.description}
                </p>
                <Button
                  isRocketReserved={rocket.isReserved}
                  onClick={() => handleRocketReservation(rocket.id)}
                />
              </div>
            </li>
          ))}
      </ul>
    </main>
  );
};

export default rockets;
