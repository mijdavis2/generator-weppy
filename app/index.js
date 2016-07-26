var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _ = require('lodash');
var prompts = require('./generator-prompts.js');

var weppyVersion = "0.7.7";


module.exports = yeoman.Base.extend({
  _defaultYear: function() {
    return (new Date).getFullYear();
  },
  _getPrompts: function(yoObj) {
    if (!this.cliAction || this.cliAction === 'init') {
      return prompts.init(yoObj)
    } else {
      return prompts.options()
    }
  },

  constructor: function () {
    yeoman.Base.apply(this, arguments);
    this.usage = `A weppy framework cli:
  init:         initialize a weppy project (default)
  model:        add a model to your app
  view:         add a view to your app (optional when adding a controller)
  controller:   add a controller to your app (optional when adding a view)`;
    this.argument('cliAction', {
      type: String,
      required: false,
      description: this.usage
    });
    if (!this.cliAction || this.cliAction === 'init') {
      this.log(yosay(
        chalk.red('Welcome!') + '\n' +
        chalk.green('You\'re using the definitive generator for scaffolding a Weppy application!')
      ));
    }
    if (!_.includes(['init', 'model', 'view', 'controller'], this.cliAction)) {
      this.log(
        chalk.red(this.usage)
      );
      process.exit(1)
    }
  },

  prompting: function () {
    return this.prompt(
      this._getPrompts(yoObj)
    ).then(function (answers) {
      this.log('app name', answers.packageName);
      this.log('python version', answers.pythonVersion);
      this.answers = answers;
      if (this.answers.license) {
        this.answers.includeLicense = "include LICENSE"
      } else {
        this.answers.includeLicense = ""
      }
    }.bind(this));
  },

  writing: function () {
    this._templateMap = {
      app_name: this.answers.packageName,
      packageName: this.answers.packageName,
      app_title: _.startCase(this.answers.packageName),
      reqMajor: this.answers.pythonVersion[0],
      reqMinor: this.answers.pythonVersion[1],
      reqPatch: this.answers.pythonVersion[2],
      username: this.answers.username,
      packageDescription: this.answers.packageDescription,
      license: this.answers.license,
      year: this._defaultYear(),
      includeLicense: this.answers.includeLicense,
      weppyVersion: weppyVersion
    };
    if (this.answers.useDirectory != this.appname) {
      this.destinationRoot(this.answers.useDirectory);
    }
    this.fs.copyTpl(
      this.templatePath('*'),
      this.destinationPath(),
      this._templateMap
    );
    this.fs.copyTpl(
      this.templatePath('starter_weppy/**/*'),
      this.destinationPath(this.answers.packageName),
      this._templateMap
    );
    this.fs.copyTpl(
      this.templatePath('tests/*'),
      this.destinationPath('tests'),
      this._templateMap
    );
    this.fs.copyTpl(
      this.templatePath('dotfiles/_travis.yml'),
      this.destinationPath('.travis.yml'),
      this._templateMap
    );
    this.fs.copyTpl(
      this.templatePath('dotfiles/_coveragerc'),
      this.destinationPath('.coveragerc'),
      this._templateMap
    );
    this.fs.copyTpl(
      this.templatePath('dotfiles/_gitignore'),
      this.destinationPath('.gitignore'),
      this._templateMap
    );
    this.fs.copyTpl(
      this.templatePath('dot_github/*'),
      this.destinationPath('.github/'),
      this._templateMap
    );
    if ( this.answers.license ) {
      this.fs.copyTpl(
        this.templatePath('licenses/' + this.answers.license),
        this.destinationPath('LICENSE'),
        this._templateMap
      )
    }
  }
});
