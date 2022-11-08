<script>
  import { useNavigate } from 'svelte-navigator'
  import { TaskForm, getTask } from 'entities/task'
  import { db } from 'shared/lib'
  import { Loader } from 'shared/ui'

  export let id

  $: taskPromise = getTask(id)

  let isSubmitting = false

  const navigate = useNavigate()

  const submit = async ({ detail }) => {
    try {
      isSubmitting = true
      await db.from('tasks').update(detail).eq('id', id)

      navigate('/tasks')
    } finally {
      isSubmitting = false
    }
  }
</script>

<h1>Edit task</h1>

<Loader promise={taskPromise} let:result={task}>
  <TaskForm initialData={task} {isSubmitting} on:submit={submit} />
</Loader>
