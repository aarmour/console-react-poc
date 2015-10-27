### Installation

#### npm

You will need to configure `.npmrc` for the Pearson Nexus npm registry:

```
registry = http://cert-nexus.pearsoncmg.com/nexus/content/groups/npm-all/
```

Install using [npm](https://www.npmjs.com/):

    $ npm install react console-react-poc

#### UMD

There is also a UMD build in the `umd` directory. If you are working directly from a clone of this repository, you can generate the UMD bundle using:

    $ npm run build-umd

To build a minified version:

    $ npm run build-min

### Acknowledgements

The build process for this project was adapted from [rackt/react-router](https://github.com/rackt/react-router), Copyright (c) 2015 Ryan Florence, Michael Jackson.
