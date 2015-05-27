#Fly Home Friday Demo

This project and tutorial is a simple introduction to AngularJS and is based on the [angular-seed](https://github.com/angular/angular-seed) project. The repository can be found here:

https://github.com/angular/angular-seed

I have incorperated their readme instructions into mine.

## Getting Started

To get you started you can simply clone the fhf-demo repository and install the dependencies:

### Prerequisites

This tutorial assumes you have followed the steps for getting started I have written here:

[Setting up your environment](setting-up-your-environment.md)

### Clone fhf-demo

Clone the fhf-demo repository using:

```
git clone https://github.com/justsayno/fhf-demo.git
cd fhf-demo
```

### Install Dependencies

We have two kinds of dependencies in this project: tools and angular framework code.  The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [npm](https://www.npmjs.com/) (Node Package Manager).
* We get the angular code via `bower`, a client side package manager [Bower](http://bower.io/).

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the angular framework files

*Note that the `bower_components` folder would normally be installed in the root folder but
fhf-demo changes this location through the `.bowerrc` file.  Putting it in the app folder makes
it easier to serve the files by a webserver. In a production application you would use an automation tool such as 

### Run the Application

We have preconfigured the project with a simple development web server.  The simplest way to start
this server is:

```
npm start
```

Now browse to the app at `http://localhost:8000/app/index.html`.

Now its time to get started with the tutorial!

[Go to tutorial](/tutorial/0.getting-started.md)