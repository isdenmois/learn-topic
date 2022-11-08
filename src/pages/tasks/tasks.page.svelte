<script>
  import { TaskCard, getAllTasks } from 'entities/task'
  import { Loader } from 'shared/ui'

  const tasksPromise = getAllTasks()
</script>

<h1>Tasks list</h1>

<Loader promise={tasksPromise} let:result={tasks}>
  <ul>
    {#each tasks as task}
      <li>
        <TaskCard {task} />
      </li>
    {/each}
  </ul>
</Loader>

<style>
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px;
  }
</style>
