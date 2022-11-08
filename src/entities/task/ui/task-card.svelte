<script>
  import { Link } from 'svelte-navigator'
  import { Card } from 'shared/ui'

  export let task
</script>

<Link to={`/tasks/${task.id}/edit`}>
  <Card title={task.title} description={task.description} />
</Link>
