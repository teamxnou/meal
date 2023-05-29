<script lang="ts">
  import '../app.css'

  // Vercel analytics
  import { dev } from '$app/environment'
  import { inject } from '@vercel/analytics'
  inject({ mode: dev ? 'development' : 'production' })

  import { primarySchool, openSchoolToast } from '../stores'

  import Toast from '../components/Toast.svelte'

  let openToast = false
  openSchoolToast.subscribe((value) => {
    openToast = value
  })
</script>

<slot />
{#if typeof window !== 'undefined' && openToast}
  <Toast message="학교로 {$primarySchool.name}가 선택되었어요." />
{/if}
