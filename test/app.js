'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');
var testAppName = 'name_x';
var testUserName = 'username_x';

describe('generator-weppy:prompts', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../app'))
      .withPrompts({
        useDirectory: this.appname,
        packageName: testAppName,
        packageDescription: 'My test app',
        username: testUserName,
        pythonVersion: '2.7.9',
        license: 'MIT'
      })
      .on('end', done);
  });

  it('creates root files', function () {
    assert.file([
      'run.py',
      '.coveragerc',
      '.gitignore',
      '.travis.yml'
    ]);
    assert.fileContent('run.py', testAppName);
    assert.noFileContent('run.py', 'appName');
  });
  it('creates application files', function () {
    assert.file([
      testAppName + '/__init__.py'
    ]);
    assert.fileContent(testAppName + '/__init__.py', testAppName);
    assert.noFileContent(testAppName + '/__init__.py', 'appName');
  });
  it('creates test files', function () {
    assert.file([
      'tests/fixtures.py'
    ]);
    assert.fileContent('tests/fixtures.py', testAppName);
    assert.noFileContent('tests/fixtures.py', 'appName');
  });
  it('creates readme files', function () {
    assert.file([
      'README.md'
    ]);
    assert.fileContent('README.md', testAppName);
    assert.noFileContent('README.md', 'appName');
    assert.fileContent('README.md', testUserName);
    assert.noFileContent('README.md', 'user_name');
  });
});

describe('generator-weppy:prompts-subdirectory', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../app'))
      .withPrompts({
        useDirectory: testAppName,
        packageName: testAppName,
        packageDescription: 'My test app',
        username: testUserName,
        pythonVersion: '2.7.9',
        license: 'MIT'
      })
      .on('end', done);
  });

  it('creates root files', function () {
    assert.file([
      'run.py',
      '.coveragerc',
      '.gitignore',
      '.travis.yml'
    ]);
    assert.fileContent('run.py', testAppName);
    assert.noFileContent('run.py', 'appName');
  });
  it('creates application files', function () {
    assert.file([
      testAppName + '/__init__.py'
    ]);
    assert.fileContent(testAppName + '/__init__.py', testAppName);
    assert.noFileContent(testAppName + '/__init__.py', 'appName');
  });
  it('creates test files', function () {
    assert.file([
      'tests/fixtures.py'
    ]);
    assert.fileContent('tests/fixtures.py', testAppName);
    assert.noFileContent('tests/fixtures.py', 'appName');
  });
  it('creates readme files', function () {
    assert.file([
      'README.md'
    ]);
    assert.fileContent('README.md', testAppName);
    assert.noFileContent('README.md', 'appName');
    assert.fileContent('README.md', testUserName);
    assert.noFileContent('README.md', 'user_name');
  });
});

describe('generator-weppy:init', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../app'))
      .withArguments('init')
      .withPrompts({
        useDirectory: this.appname,
        packageName: testAppName,
        packageDescription: 'My test app',
        username: testUserName,
        pythonVersion: '2.7.9',
        license: 'MIT'
      })
      .on('end', done);
  });

  it('creates root files', function () {
    assert.file([
      'run.py',
      '.coveragerc',
      '.gitignore',
      '.travis.yml'
    ]);
    assert.fileContent('run.py', testAppName);
    assert.noFileContent('run.py', 'appName');
  });
  it('creates application files', function () {
    assert.file([
      testAppName + '/__init__.py'
    ]);
    assert.fileContent(testAppName + '/__init__.py', testAppName);
    assert.noFileContent(testAppName + '/__init__.py', 'appName');
  });
  it('creates test files', function () {
    assert.file([
      'tests/fixtures.py'
    ]);
    assert.fileContent('tests/fixtures.py', testAppName);
    assert.noFileContent('tests/fixtures.py', 'appName');
  });
  it('creates readme files', function () {
    assert.file([
      'README.md'
    ]);
    assert.fileContent('README.md', testAppName);
    assert.noFileContent('README.md', 'appName');
    assert.fileContent('README.md', testUserName);
    assert.noFileContent('README.md', 'user_name');
  });
});

describe('generator-weppy:controller', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../app'))
      .withArguments('controller')
      .on('end', done);
  });
  it('does nothing', function () {
    assert('ok');
  });
});

describe('generator-weppy:bad-arg', function () {
  it('raises error', function () {
    assert.throws(function (done) {
      helpers.run(path.join(__dirname, '../app'))
        .withArguments('foo')
        .on('end', done);
    }, Error, `Unknown argument foo. Please check usage.`);
  });
});
