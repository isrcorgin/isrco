// src/components/EventList/EventListTable.tsx
import React from 'react';

const EventListTable = () => {
  const data = [
    { gradeLevel: '5th to 8th', topic: 'Path Following' },
    { gradeLevel: '5th to 8th', topic: 'Water Boat' },
    { gradeLevel: '9th to 12th', topic: 'Path Following' },
    { gradeLevel: '9th to 12th', topic: 'Maze Solver' },
    { gradeLevel: '1st Year Onward', topic: 'Path Following' },
    { gradeLevel: '1st Year Onward', topic: 'Line Following' },
    { gradeLevel: '1st Year Onward', topic: 'Drone' },
  ];

  return (
    <div className="tableContainer">
      <h2 className="heading">Event List</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Grade Level</th>
            <th>Competition Topics</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.gradeLevel}</td>
              <td>{item.topic}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventListTable;
