import React from 'react';
import ReactDOM from 'react-dom';
import { CourseListItem } from './src';

const renderCourseListItem = () => {
  const educators = ['Sigmund Freud', 'B. F. Skinner']
  const startDate = new Date('04-02-1980');
  const endDate = new Date('12-31-2018');

  return (
    <div>
      <h3>Course List Item</h3>
      <CourseListItem
        title="Psychology 101"
        educators={educators}
        startDate={startDate}
        endDate={endDate}
      />
    </div>
  );
};

const Demo = (props) => {
  return (
    <div>
      {renderCourseListItem()}
    </div>
  );
};

ReactDOM.render(<Demo />, document.getElementById('root'));
