<script lang="ts">
  import { onMount } from 'svelte'
  import type { AuthSession } from '@supabase/supabase-js'
  import { AuthPage } from 'pages/auth'
  import { db } from 'shared/lib'
  import Navigation from './navigation.svelte'

  let session: AuthSession | null

  onMount(() => {
    db.auth.getSession().then(({ data }) => {
      session = data.session
    })

    db.auth.onAuthStateChange((_event, _session) => {
      session = _session
    })
  })
</script>

<div class="container" style="padding: 50px 0 100px 0">
  {#if session}
    <Navigation />
  {:else}
    <AuthPage />
  {/if}
</div>
