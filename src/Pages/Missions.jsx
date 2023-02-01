import React from 'react';
import './mission/missions.scss';

import MissionsBody from './mission/missions_body';

const Missions = () => {
  return (
    <div className="container">
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th scope="col" style={{ width: '10%' }}>Mission</th>
            <th scope="col" style={{ width: '60%' }}>Description </th>
            <th scope="col" style={{ width: '15%' }}>Status</th>
            <th scope="col" style={{ width: '15%' }}>Join</th>
          </tr>
        </thead>
        <MissionsBody />
      </table>
    </div>
  );
};

export default Missions;
