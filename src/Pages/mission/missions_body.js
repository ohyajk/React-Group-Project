import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  FetchMissions, loadMissions, leaveMission, joinMission,
} from '../../Redux/Missions/Missions';

const MissionsBody = () => {
  const dispatch = useDispatch();
  const datas = useSelector((state) => state.MissionsReducer.missions);

  const missions = Object.values(datas);

  useEffect(() => {
    dispatch(FetchMissions());
  }, [dispatch]);

  const handleJoin = (e) => {
    // Check if the button text is Join Mission or Leave Mission
    if (e.target.textContent === 'Join Mission') {
      dispatch(joinMission(e.target.id));
    } else {
      dispatch(leaveMission(e.target.id));
    }
  };

  return (
    <tbody>
      {missions.map((mission) => {
        return (
          <tr key={mission.mission_id}>
            <td>
              {mission.mission_name}
            </td>
            <td>{mission.mission_description}</td>
          </tr>
        );
      })}
    </tbody>
  );
};
