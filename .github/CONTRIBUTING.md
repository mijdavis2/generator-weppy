# Contributions guideline

* Use the standard [Github flow](https://guides.github.com/introduction/flow/) process

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [1. Git Commit Messages](#1-git-commit-messages)
  - [Commit Subject](#commit-subject)
  - [Commit Description](#commit-description)
- [2. Pull requests](#2-pull-requests)
- [3. Branching model](#3-branching-model)
  - [Branches name](#branches-name)
  - [Branching model](#branching-model)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 1. Git Commit Messages

Use [fit-commit](https://github.com/m1foley/fit-commit) to help enforcing
guidelines locally

### Commit Subject

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 50 characters or less
* Do not end your subject line with a period
* Begin all subject lines with a capital letter
* Consider starting the commit message with an applicable emoji:
  * :art: `:art:` when improving the format/structure of the code
  * :racehorse: `:racehorse:` when improving performance
  * :memo: `:memo:` when writing docs
  * :bug: `:bug:` when fixing a bug
  * :fire: `:fire:` when removing code or files
  * :green_heart: `:green_heart:` when fixing the CI build
  * :white_check_mark: `:white_check_mark:` when adding tests
  * :lock: `:lock:` when dealing with security
  * :arrow_up: `:arrow_up:` when upgrading dependencies
  * :arrow_down: `:arrow_down:` when downgrading dependencies
  * :shirt: `:shirt:` when removing linter warnings
  * :cold_sweat: `:cold_sweat:` when intentionally taking shortcut

**Notes:**

* Emoji are great because Github allow you to search them, which make then
  semantically useful
* Emoji convention is based on the [atom best
  practices](https://github.com/atom/atom/blob/master/CONTRIBUTING.md#git-commit-messages)

### Commit Description

* Limit commit description to 72 characters or less
* Reference issues and pull requests URL liberally
* Should contain the following sections:
  * **Problem** - What is the problem you are trying to solve?
  * **Solution** - How it was it implemented?
  * **Result** - What is the added value on the project

**Notes:**

* Do not use the command line `-m` option as you won't be able to write a description
* To write a commit description you need to separate the subject with a blank line

## 2. Pull requests

* Should contain clean history with only one commit.
* Should pass the continuous server tests
* Use :+1: `:+1:` and :-1: `:-1:` for final review feedback
* If some is assigned to review it, do not merge the branch without his approval
* Once the PR is merged, make sure to delete the branch on Github
* Description should follow the same rules that the commit description
  * **Problem** - What is the problem you are trying to solve?
  * **Solution** - How it was it implemented?
  * **Result** - What is the added value on the project

**Notes:**

* Using Github the pull request description is default to the last commit
description. Which mean that you only have to write it at one place
* A Pull should have a purpose and be well described

## 3. Branching model

### Branches name

* Default branch is `develop`
* Should respect the following format: `[feature|bug|test|refactor|style|doc]/[shortDescription]`

**Notes:**

* When you updating a local branch from develop do a `git pull --rebase
  develop` to keep clean history 

### Branching model

The key concepts are:

* `master` branch is always in a clean, deployable state
* `staging` branch is for pre-deploy / pre-release versions in beta
* `develop` branch contains all on-going work by developers 
* Feature branches made off of `develop` are used to isolate individual pieces of on-going work 
* Feature branches are merged back into `develop` when the work is complete
* Hotfix branches are made off of `master`

![Branching Model](http://nvie.com/img/git-model@2x.png)
