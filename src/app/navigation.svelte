<script>
  import { Router, Link, Route } from 'svelte-navigator'
  import { HomePage } from 'pages/home'
  import { TasksPage, TaskEditPage } from 'pages/tasks'
</script>

<Router>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/tasks">Tasks</Link>
  </nav>
  <div>
    <Route path="/" component={HomePage} />
    <Route path="/tasks" component={TasksPage} />
    <Route path="/tasks/:id/edit" let:params>
      <TaskEditPage id={+params.id} />
    </Route>
  </div>
</Router>
