### Installation

#### npm + webpack/browserify

Install using [npm](https://www.npmjs.com/):

    $ npm install --save react react-dom @aarmour/console-react-poc

Then import the module in your project:

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { CourseList } from '@aarmour/react-console-poc';

function App(props) {
  return <CourseList courses={[...]} />;
}

ReactDOM.render(<App />, document.getElementById('root'));
```

Note that this project uses [CSS Modules](https://github.com/css-modules/css-modules), so you will need to configure your bundler with the appropriate [loader](https://github.com/css-modules/webpack-demo) or [plugin](https://github.com/css-modules/css-modulesify).

#### UMD

There is also a UMD build in the `umd` directory. If you are working directly from a clone of this repository, you can generate the UMD bundle using:

    $ npm run build-umd

To build a minified version:

    $ npm run build-min

Then import the module in your project:

```js
// Using an es2015 transpiler
import { course } from 'umd/components';

const CourseList = course.CourseList;

// Using globals
var CourseList = window.Components.course.CourseList;
```

#### What's up with the src and lib directories?

The module source is kept in the `src` directory and is written using `JSX` and `ES2015`. To spare you from having to add a transpile step in your build process, we handle it for you. The transpiled output is kept in the `lib` directory, and you can import modules directly from there:

    import CourseList from '@aarmour/console-react-poc/lib/course/CourseList';

#### Running the demo locally

```
git clone https://github.com/aarmour/console-react-poc.git
cd console-react-poc
npm install
npm start
```

### Acknowledgements

The build process for this project was adapted from [rackt/react-router](https://github.com/rackt/react-router), Copyright (c) 2015 Ryan Florence, Michael Jackson.
