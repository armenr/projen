const { JsiiProject } = require('./lib/jsii-project');
const { Semver } = require('./lib/semver');

const project = new JsiiProject({
  name: 'projen',
  jsiiVersion: Semver.caret('1.5.0'),
  version: '0.1.0',
  description: 'A new generation of project generators',
  repository: 'https://github.com/eladb/projen.git',
  authorName: 'Elad Ben-Israel',
  authorEmail: 'benisrae@amazon.com',
  stability: 'experimental',
  dependencies: {
    yaml: Semver.caret('1.9.2')
  },
  peerDependencies: {
    constructs: Semver.caret('3.0.3'),
  },
});

project.synth();
