import _ from 'lodash';
import React from 'react';
import { useSelector } from 'react-redux';

import './ReservedRockets.scss';

const ReservedRockets = () => {
  const rockets = useSelector((state) => state.rockets);
  const reservedRockets = _.filter(rockets, (rocket) => rocket.isReserved);

  return (
    <section className="reserved-rockets">
      <h2 className="reserved-rockets__title">My Rockets</h2>
      <ul className="reserved-rockets__list">
        {_.map(reservedRockets, (rocket) => (
          <li className="reserved-rockets__list__item" key={rocket.id}>
            <h3 className="reserved-rockets__list__item__title">
              {rocket.name}
            </h3>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ReservedRockets;
