Data Flow Between Modules
This document describes the data flow between the main modules in the project.

```markdown
Flowchart
+-------------------+           +-------------------+           +-------------------+
|   model.ts        |           |   shell.ts        |           |   index.html      |
|-------------------|           |-------------------|           |-------------------|
| - Exports         |           | - Imports Model   |           | - Loads initial   |
|   initialState    |           | - Renders UI      |           |   state & calls   |
|   (Model object)  |           |   based on state  |           |   render()        |
+-------------------+           +-------------------+           +-------------------+
         |                               ^                               |
         |                               |                               |
         |         imports initialState   |                               |
         +------------------------------>+                               |
         |                               |                               |
         |                               |                               |
         |         calls render(state)    |                              |
         +-------------------------------------------------------------->+
```

Data Flow Explanation
types.ts

Defines TypeScript types (Model, Product, Cart, etc.) used by both model.ts and shell.ts.
model.ts

Defines and exports the initial application state (initialState) using the Model type from types.ts.
index.html

Loads the app, imports initialState from model.ts and render from shell.ts.
Calls render(initialState) to start the UI.
shell.ts

Receives the state (Model) and renders the UI accordingly.
Summary:

types.ts provides type definitions to model.ts and shell.ts.
model.ts provides the initial state to index.html.
index.html passes the state to shell.ts via the render function.
shell.ts uses the state to render the UI. Siste raden nr. 2
