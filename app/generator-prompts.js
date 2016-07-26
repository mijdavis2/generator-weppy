module.export.init = function(yoObj) {
  return [
    {
      type    : 'input',
      name    : 'useDirectory',
      message : 'Target directory for new application: ',
      default : yoObj.appname // Default to current folder name
    },
    {
      type    : 'input',
      name    : 'packageName',
      message : 'Your new weppy app name: ',
      default : yoObj.appname // Default to current folder name
    },
    {
      type    : 'input',
      name    : 'packageDescription',
      message : 'A description of your app: '
    },
    {
      type    : 'input',
      name    : 'username',
      message : 'Your github username: '
    },
    {
      type    : 'list',
      name    : 'pythonVersion',
      message : 'What minimum python version will you support?',
      choices : [
        {
          "value": ["2","7","9"],
          "name": "2.7.9"
        },
        {
          "value": ["2","7","10"],
          "name": "2.7.10"
        },
        {
          "value": ["2","7","11"],
          "name": "2.7.11"
        },
        {
          "value": ["3","4","3"],
          "name": "3.4.3"
        },
        {
          "value": ["3","5","1"],
          "name": "3.5.1"
        }
      ]
    },
    {
      name: 'license',
      message: 'Select license:',
      type: 'list',
      choices : [
        {
          "value": "MIT",
          "name": "MIT"
        },
        {
          "value": "ApacheV2",
          "name": "Apache v2"
        },
        {
          "value": null,
          "name": "None"
        }
      ]
    }
  ]
};

module.export.options = function() {
  return [];
};
