var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var _ = require('lodash');


module.exports = yeoman.Base.extend({
  _weppyVersion: '0.7.7',

  _defaultYear: function () {
    return (new Date).getFullYear();
  },

  _getPrompts: function (yoObj) {
    var prompts = require('./prompts.js');
    if (this.cliAction === 'init') {
      return prompts.init(yoObj);
    }
    return prompts.options();
  },

  _runWriteService: function (yoObj) {
    var services = require('./services.js');
    if (this.cliAction === 'init') {
      return services.init(yoObj);
    }
    return services.options(yoObj);
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
      this.cliAction = 'init';
      this.log(yosay(
        chalk.red('Welcome!') + '\n' +
        chalk.green('You\'re using the definitive generator for scaffolding a Weppy application!')
      ));
    }
    if (!_.includes(['init', 'model', 'view', 'controller'], this.cliAction)) {
      this.log(
        chalk.red(this.usage)
      );
      throw new Error(`Unknown argument ${this.cliAction}. Please check usage.`);
    }
  },

  prompting: function () {
    return this.prompt(
      this._getPrompts(this)
    ).then(function (answers) {
      this.log('app name', answers.packageName);
      this.log('python version', answers.pythonVersion);
      this.answers = answers;
      if (this.answers.license) {
        this.answers.includeLicense = 'include LICENSE';
      } else {
        this.answers.includeLicense = '';
      }
    }.bind(this));
  },

  writing: function () {
    this._runWriteService(this);
  }
});
