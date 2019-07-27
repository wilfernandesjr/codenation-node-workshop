# Students CRUD API - Workshop Codenation

## Environment setup

First of all, you need to install Node and NPM. The better way to install and manage the versions of these aplications is through NVM. [This link](https://github.com/creationix/nvm) has all instructions that you need to do it.

This API runs through the most stable Node's version. Assuming that you have already installed NVM, to use this version of node, all that you have to do is:

```
# Install Node Version trhough NVM
$ nvm install 8.9.1

# Use Node v8.9.1
$ nvm use 8.9.1

# (Optional) You also can set this version as default on a shell
$ nvm alias default 8.9.1
```

## Installing Dependencies

After you've finish the setup of your environment and clone the repository, you must install the dependencies from it. Don't worry, it's simple as take candy from children. Go to your cloned repository folder and run:

```
# Install NPM packages
$ npm install
```

## Running the project locally

This project uses MySQL as database. Before run the API, be sure that you've started MySQL service. Also, you must garantee that exists a schema, but don't worry with any database setup beyond that. This API uses sequelize ORM to handle with that, and all models are already setted on the project. All that you need to do is:

(Friendly tip: go to your directory root through the terminal...)

```
# Create the database
$ mysql -e 'CREATE DATABASE your_database_name;'
```

```
# Create environment variables to the database credentials
$ export DB_HOST=<your_host>
$ export DB_USER=<your_user>
$ export DB_PASS=<your_password>
$ export DB_NAME=<your_database_name>
```

```
# Sync Database
$ node bin/syncDB
```

To start the server and run the API:

```
# Start App
$ npm start
```


## Development mode

To keep the application running and restart for all change during the development you can use a NPM package called forever: 

```
# Install forever package globally
$ npm install forever -g

# Running forever (rsrs)
$ npm run forever
```