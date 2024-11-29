# StepperForm

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.0.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


## Tasks 
1. create a main component of the stepper form with the angular stepper 
2. in each stepper there should be another component so in our case it is 3 ( userdetail, address, hobbies and interest)
3. we should have validation of the inputs like email address and lenght
4. when we save the form it should show all the preview and yeah when we save ( its optional ) and click on new page we should have back button with which it should fetch all the data of the last entry and it should show it there 
4. we should be able to show the data in angular table with the help of local storage and we should have delete and dialog action button 
5. in the table we should only see the userdetail and the address and hobbies interest should be shown in the dialog 