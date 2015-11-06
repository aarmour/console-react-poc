import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import hljs from 'highlight.js';
import styles from './demo.css';
import { CourseList, CourseListItem } from './src/course';

hljs.initHighlightingOnLoad();

function handleAction(action, ...data) {
  console.log('%s: %s', action, JSON.stringify(data));
}

const CodeExample = React.createClass({

  propTypes: {
    code: PropTypes.string.isRequired
  },

  getInitialState() {
    return { visible: false };
  },

  handleToggleVisible(event) {
    this.setState({ visible: !this.state.visible });
    event.preventDefault();
  },

  render() {
    const visible = { display: this.state.visible ? 'block' : 'none' };

    return (
      <div>
        <a href="#" onClick={this.handleToggleVisible}>{this.state.visible ? 'Hide' : 'Show'} code</a>
        <div className={styles.code} ref="code" style={visible}>
          <pre><code>{this.props.code}</code></pre>
        </div>
      </div>
    );
  }

});

function renderCourseListItem() {
  const educators = ['Sigmund Freud', 'B. F. Skinner']
  const startDate = new Date('04-02-1980');
  const endDate = new Date('12-31-2018');
  const thumbnailUrl = 'http://www.fillmurray.com/g/300/200';

  const code = `
    <CourseListItem
      id="psychology-101"
      title="Psychology 101"
      educators={['Sigmund Freud', 'B. F. Skinner']}
      startDate={new Date('04-02-1980')}
      endDate={new Date('12-31-2018')}
      thumbnailUrl="http://www.fillmurray.com/g/300/200"
      onSelectCourse={handleSelectCourse}
      onRemoveCourse={handleRemoveCourse}
      onInviteStudents={handleInviteStudents}
      onCourseSettings={handleCourseSettings}
    />
  `;

  return (
    <div>
      <h3>Course List Item</h3>
      <CourseListItem
        id="psychology-101"
        title="Psychology 101"
        educators={educators}
        startDate={startDate}
        endDate={endDate}
        thumbnailUrl={thumbnailUrl}
        onSelectCourse={handleAction.bind(null, 'select course')}
        onRemoveCourse={handleAction.bind(null, 'remove course')}
        onInviteStudents={handleAction.bind(null, 'invite students')}
        onCourseSettings={handleAction.bind(null, 'course settings')}
      />
      <CodeExample code={code} />
    </div>
  );
}

function renderCourseList() {
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

  const code = `
    <CourseList
      courses=[...]
      onSelectCourse={handleSelectCourse}
      onRemoveCourse={handleRemoveCourse}
      onInviteStudents={handleInviteStudents}
      onCourseSettings={handleCourseSettings}
    />
  `;

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
      <CodeExample code={code} />
    </div>
  );
}

function Demo(props) {
  return (
    <div>
      {renderCourseListItem()}
      <hr />
      {renderCourseList()}
    </div>
  );
}

ReactDOM.render(<Demo />, document.getElementById('root'));
