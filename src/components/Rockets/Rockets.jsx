import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Badge from '../../abstracts/styledComponents/Badge.style';

import { fetchRockets } from '../../redux/rockets/rockets';
import './Rockets.scss';

const rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!rockets.length) dispatch(fetchRockets());
  }, []);

  return (
    <main className="main rockets-container">
      <ul className="rocket-list flex flex-column">
        {rockets.map((rocket) => (
          <li key={rocket.id} className="rocket-item flex" data-id={rocket.id}>
            <img src={rocket.image} alt={rocket.name} />
            <div className="rocket-item__info flex flex-column">
              <h3 className="rocket-name">{rocket.name}</h3>
              <p className="rocket-description">
                <Badge text="reserved" isActive />
                {rocket.description}
              </p>
              <button type="button" className="rocket-item__info__btn">
                Reserve Rocket
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default rockets;
