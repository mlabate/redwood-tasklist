// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/tasks/new" page={NewTaskPage} name="newTask" />
      <Route path="/tasks/{id:Int}/edit" page={EditTaskPage} name="editTask" />
      <Route path="/tasks/{id:Int}" page={TaskPage} name="task" />
      <Route path="/tasks" page={TasksPage} name="tasks" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
