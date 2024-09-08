
 # This Repo is about completing the task

## How to run tests on your local machine:

 The first step you need to run application on your local machine. 
 Please refer to the public repository hosted here: [application](https://github.com/sparingsoftware/qa-form)


 Install nodejs, you can do that by using NVM on Mac or Windows:
 
 ### MacOS:

 ```bash 
 Install homebrew manager: /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
 ```

 After homebrew is installed install nvm:
 ```bash
 homebrew: brew install nvm
 ```

Once this step is done you can install nodejs. For this project we are going to use v16.20.2 which needs to be installed. Tests should work on every nodejs version but to make life easier we can use the specific version.

```bash
install: nvm install 16.20.2
```
If you completed this step make a command to use this particular nodejs version

```bash
nvm use 16.20.2
```

### Windows

You have to download nvm from nvm-windows [repository](https://github.com/coreybutler/nvm-windows/releases)

Follow similar instruction as above form MacOS users


### Playwright

After this step is done and you application is up an running you can go to next steps for Playwright installation.

 Clone the [repository](https://github.com/miloszqa/p-prog-pw) via:

 ```bash 
 HTTPS: https://github.com/miloszqa/p-prog-pw.git
 ```

 or you can use 
 
 ```bash 
 SSH: git@github.com:miloszqa/p-prog-pw.git
 ```

 Once it is done open the folder directory:

 ```bash
 cd p-prog-pw
 ```

 Next steps: 

When you are in project directory where you have package.json file run command:

 ```bash
 npm install
 ```
This will install for you all dependecies needed for the project

Verify if you have Playwright verstion installed: `npx playwright --version`

If you don't have it you can install it manually via `npm install -D @playwright/test@latest`

You also might need to install browser binaries ` npx playwright install --with-deps `

Once everything is set you can run tests:

- To run all tests from repository: `npx playwright test` (default headless)

- To run all tests headed mode: `npx playwright test --headed`

- To run tests in UI extension mode: `npx playwright test --ui`

- To run specific test: `npx playwright test -g "verify mandatory fields"` (example, provide test name in "")

- To force run on a specific browser: `npx playwright test --project webkit` (that will run test on Safari)

Default config runs tests on three browsers: firefox, chromium and webkit (Safari)

To disable any of them modify file `playwright-config.ts` by removing any of browser from `projects` settings (line 35)

After all executions you can simply check HTML report: `npx playwright show-report` this will create a HTML file in `/test-results/` directory