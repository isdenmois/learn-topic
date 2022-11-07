<script lang="ts">
  import { db } from '$lib/db'
  import { invalidate } from '$app/navigation'
  import { onMount } from 'svelte'
  import 'milligram/dist/milligram.css'
  import { page } from '$app/stores'
  import Auth from './Auth.svelte'

  onMount(() => {
    const {
      data: { subscription },
    } = db.auth.onAuthStateChange(() => {
      invalidate('supabase:auth')
    })

    return () => {
      subscription.unsubscribe()
    }
  })
</script>

{#if !$page.data.session}
  <Auth />
{:else}
  <div>
    <a href="/">Home</a>
    <a href="/tasks">Tasks</a>
  </div>

  <slot />
{/if}
