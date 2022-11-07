<script>
  import { Card } from '$lib/ui'
  export let data
</script>

<h1>Tasks list</h1>

<ul>
  {#each data.tasks as task}
    <li>
      <a href={`/tasks/${task.id}`}>
        <Card title={task.title} description={task.description} />
      </a>
    </li>
  {/each}
</ul>

<style>
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px;
  }
</style>
