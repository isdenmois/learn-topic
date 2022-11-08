<script>
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  export let initialData = {}
  export let isSubmitting = false

  let { title, description } = initialData

  const submit = async () => {
    dispatch('submit', { title, description })
  }
</script>

<form on:submit|preventDefault={submit}>
  <input placeholder="title" bind:value={title} disabled={isSubmitting} />
  <textarea placeholder="description" bind:value={description} disabled={isSubmitting} />

  <button type="submit" disabled={isSubmitting}>save</button>
</form>
