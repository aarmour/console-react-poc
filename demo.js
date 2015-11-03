import React from 'react';
import ReactDOM from 'react-dom';
import { CourseList, CourseListItem } from './src/course';

function handleSelectCourse(id, title) {
  console.log('selected course: [%s]', id, title);
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
        onSelectCourse={handleSelectCourse}
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
      thumbnailUrl: 'http://www.fillmurray.com/300/200'
    },
    {
      id: '2',
      title: 'Introduction to Chemistry',
      educators: ['Niels Bohr', 'Amedeo Avogadro'],
      startDate: new Date('01-01-2016'),
      endDate: new Date('06-01-2016'),
      thumbnailUrl: 'http://www.placecage.com/300/200'
    }
  ];

  return (
    <div>
      <h3>Course List</h3>
      <CourseList courses={courses} onSelectCourse={handleSelectCourse} />
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
