<script>
  export let promise
</script>

{#await promise}
  <p>Loading...</p>
{:then result}
  <slot {result} />
{:catch error}
  <p class="error">{error.message}</p>
{/await}

<style>
  .error {
    color: red;
  }
</style>
