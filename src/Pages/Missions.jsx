import React from 'react';

import MissionsBody from './mission/missions_body';

const Missions = () => {
  return (
    <div className="container">
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description </th>
            <th>Status</th>
            <th>Join</th>
          </tr>
        </thead>
        <MissionsBody />
      </table>
    </div>
  );
};

export default Missions;
