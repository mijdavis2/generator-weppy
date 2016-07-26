'use strict';
var _ = require('lodash');

module.exports.init = function (yoObj) {
  yoObj._templateMap = {
    appName: yoObj.answers.packageName,
    packageName: yoObj.answers.packageName,
    appTitle: _.startCase(yoObj.answers.packageName),
    reqMajor: yoObj.answers.pythonVersion[0],
    reqMinor: yoObj.answers.pythonVersion[1],
    reqPatch: yoObj.answers.pythonVersion[2],
    username: yoObj.answers.username,
    packageDescription: yoObj.answers.packageDescription,
    license: yoObj.answers.license,
    year: yoObj._defaultYear(),
    includeLicense: yoObj.answers.includeLicense,
    weppyVersion: yoObj.weppyVersion
  };
  if (yoObj.answers.useDirectory !== yoObj.appname) {
    yoObj.destinationRoot(yoObj.answers.useDirectory);
  }
  yoObj.fs.copyTpl(
    yoObj.templatePath('*'),
    yoObj.destinationPath(),
    yoObj._templateMap
  );
  yoObj.fs.copyTpl(
    yoObj.templatePath('starter_weppy/**/*'),
    yoObj.destinationPath(yoObj.answers.packageName),
    yoObj._templateMap
  );
  yoObj.fs.copyTpl(
    yoObj.templatePath('tests/*'),
    yoObj.destinationPath('tests'),
    yoObj._templateMap
  );
  yoObj.fs.copyTpl(
    yoObj.templatePath('dotfiles/_travis.yml'),
    yoObj.destinationPath('.travis.yml'),
    yoObj._templateMap
  );
  yoObj.fs.copyTpl(
    yoObj.templatePath('dotfiles/_coveragerc'),
    yoObj.destinationPath('.coveragerc'),
    yoObj._templateMap
  );
  yoObj.fs.copyTpl(
    yoObj.templatePath('dotfiles/_gitignore'),
    yoObj.destinationPath('.gitignore'),
    yoObj._templateMap
  );
  yoObj.fs.copyTpl(
    yoObj.templatePath('dot_github/*'),
    yoObj.destinationPath('.github/'),
    yoObj._templateMap
  );
  if (yoObj.answers.license) {
    yoObj.fs.copyTpl(
      yoObj.templatePath('licenses/' + yoObj.answers.license),
      yoObj.destinationPath('LICENSE'),
      yoObj._templateMap
    );
  }
};

module.exports.options = function (yoObj) {
  yoObj.log(`Running ${yoObj.cliAction} generator.`);
};
