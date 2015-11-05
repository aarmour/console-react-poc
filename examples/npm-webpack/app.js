import React from 'react';
import ReactDOM from 'react-dom';
import { course } from '@aarmour/console-react-poc';

const { CourseList } = course;

function handleAction(action, data) {
  console.log('%s:', action, data);
}

function App(props) {
  const courses = [
    {
      id: 'the-arrow-of-time',
      title: 'The Arrow of Time',
      educators: ['Sean Carroll'],
      startDate: new Date('01-01-2016'),
      endDate: new Date('06-01-2016'),
      thumbnailUrl: 'http://www.fillmurray.com/300/200',
      isUserOwner: true
    },
    {
      id: 'introduction-to-chemistry',
      title: 'Introduction to Chemistry',
      educators: ['Niels Bohr', 'Amedeo Avogadro'],
      startDate: new Date('01-01-2016'),
      endDate: new Date('06-01-2016'),
      thumbnailUrl: 'http://www.placecage.com/300/200'
    },
    {
      id: 'history-of-the-earth',
      title: 'History of the Earth',
      educators: ['James Hutton'],
      startDate: new Date('01-01-2012'),
      endDate: new Date('06-01-2012'),
      thumbnailUrl: 'http://www.placecage.com/g/300/200',
      isDeleted: true
    }
  ];

  return (
    <CourseList
      courses={courses}
      onSelectCourse={handleAction.bind(this, 'select course')}
      onRemoveCourse={handleAction.bind(this, 'remove course')}
      onInviteStudents={handleAction.bind(this, 'invite students')}
      onCourseSettings={handleAction.bind(this, 'course settings')}
    />
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
