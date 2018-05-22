# NgNext

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## ng add @angular/pwa

1. ng config -g cli.packageManager yarn
2. ng add @angular/pwa --project ng-next
3. run ng build --prod
4. npm install -g http-server && cd dist/ng-next && http-server
5. npm install ngrok -g  && ngrok http 8080

##ng add universal
link: https://blog.angular-university.io/angular-app-shell/
1. ng generate universal ngu-app-shell --client-project=ng-next
2. ng generate app-shell my-loading-shell --universal-project=ngu-app-shell --route=app-shell-path --client-project=ng-next
