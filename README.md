# caius
Dashboard Prototype using Angular 2 with ngrx/store. 

The usage of @ngrx/store is to design the application using the redux architecture/paradigm.

The folder structure is laid out in a feature/component manner, meaning that each feature/component folder has its own views, components, actions, reducers, etc. 
The app also uses firebase with angularfire2.

### Prerequisites
You will need to have [Git](https://git-scm.com/) and [Node.js + NPM](http://nodejs.org) installed on your machine. You will also need to install the `typings` NPM package globally via `npm i -g typings`.
> Even if you already have the `typings` package installed globally, this repo requires `typings 1.x` so make sure your version is up do date.

### Quick start

```bash
# clone the repo
git clone https://github.com/joaoflf/caius.git

# change directory to repo
cd caius

# run npm install (typings install will run automatically)
npm i

# start the server
npm start
```

Navigate to [http://localhost:4200/](http://localhost:4200/) in your browser
