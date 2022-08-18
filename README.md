## Bootstrapping the project

```bash
curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -
```

```bash
yum -y install nodejs
or
apt-get install -y nodejs
```

Check installed versions (should be node version 16):

```bash
node --version
npm --version
```

Check out our code repository:

```bash
git clone https://github.com/T-Systems-MMS/t-systems-mms.github.io.git
```

Change directory to project directory and execute:

```bash
npm install
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
