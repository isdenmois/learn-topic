<script>
  export let data

  $: task = { ...data.task }
</script>

<h1>Tasks "{task.title}"</h1>

<a href={`/tasks/${task.id}/edit`}>Edit</a>
