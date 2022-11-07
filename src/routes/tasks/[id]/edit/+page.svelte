<script>
  import { db } from '$lib/db'

  export let data

  const task = data.task

  let title = task.title
  let isSubmitting = false

  const submit = async () => {
    try {
      isSubmitting = true
      await db
        .from('tasks')
        .update({ ...task, title })
        .eq('id', task.id)

      history.back()
    } finally {
      isSubmitting = false
    }
  }
</script>

<h1>Edit task</h1>

<form on:submit|preventDefault={submit}>
  <input placeholder="title" bind:value={title} disabled={isSubmitting} />

  <button type="submit">save</button>
</form>
