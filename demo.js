import React from 'react';
import ReactDOM from 'react-dom';
import styles from './demo.css';
import { CourseList, CourseListItem } from './src/course';

function handleAction(action, ...data) {
  console.log('%s: %s', action, JSON.stringify(data));
}

function renderCourseListItem() {
  const educators = ['Sigmund Freud', 'B. F. Skinner']
  const startDate = new Date('04-02-1980');
  const endDate = new Date('12-31-2018');
  const thumbnailUrl = 'http://www.fillmurray.com/g/300/200';

  return (
    <div>
      <h3>Course List Item</h3>
      <CourseListItem
        id='1'
        title="Psychology 101"
        educators={educators}
        startDate={startDate}
        endDate={endDate}
        thumbnailUrl={thumbnailUrl}
        onSelectCourse={handleAction.bind(null, 'select course')}
        onInviteStudents={handleAction.bind(null, 'invite students')}
        onCourseSettings={handleAction.bind(null, 'course settings')}
      />
    </div>
  );
}

function renderCourseList() {
  const courses = [
    {
      id: '1',
      title: 'The Arrow of Time',
      educators: ['Sean Carroll'],
      startDate: new Date('01-01-2016'),
      endDate: new Date('06-01-2016'),
      thumbnailUrl: 'http://www.fillmurray.com/300/200',
      isUserOwner: true
    },
    {
      id: '2',
      title: 'Introduction to Chemistry',
      educators: ['Niels Bohr', 'Amedeo Avogadro'],
      startDate: new Date('01-01-2016'),
      endDate: new Date('06-01-2016'),
      thumbnailUrl: 'http://www.placecage.com/300/200'
    },
    {
      id: '3',
      title: 'History of the Earth',
      educators: ['James Hutton'],
      startDate: new Date('01-01-2012'),
      endDate: new Date('06-01-2012'),
      thumbnailUrl: 'http://www.placecage.com/g/300/200',
      isDeleted: true
    }
  ];

  return (
    <div>
      <h3>Course List</h3>
      <CourseList
        courses={courses}
        onSelectCourse={handleAction.bind(null, 'select course')}
        onRemoveCourse={handleAction.bind(null, 'remove course')}
        onInviteStudents={handleAction.bind(null, 'invite students')}
        onCourseSettings={handleAction.bind(null, 'course settings')}
      />
    </div>
  );
}

const Demo = (props) => {
  return (
    <div>
      {renderCourseListItem()}
      <hr />
      {renderCourseList()}
    </div>
  );
};

ReactDOM.render(<Demo />, document.getElementById('root'));
