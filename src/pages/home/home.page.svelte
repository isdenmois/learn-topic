<script>
  import { TaskCard, getLatestTask } from 'entities/task'
  import { Loader } from 'shared/ui'

  const taskPromise = getLatestTask()
</script>

<h1>The last updated task</h1>

<Loader promise={taskPromise} let:result={task}>
  <TaskCard {task} />
</Loader>
