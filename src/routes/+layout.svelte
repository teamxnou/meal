<script lang="ts">
  import '../app.css'

  // Vercel analytics
  import { dev } from '$app/environment'
  import { inject } from '@vercel/analytics'
  inject({ mode: dev ? 'development' : 'production' })

  import { selectedSchoolName, openSchoolToast } from '../stores'

  import Toast from '../components/Toast.svelte'

  let currentSchoolName: string
  selectedSchoolName.subscribe((value) => {
    currentSchoolName = value
  })
  let openToast = false
  openSchoolToast.subscribe((value) => {
    openToast = value
  })
</script>

<slot />
{#if typeof window !== 'undefined' && openToast}
  <Toast message="학교로 {currentSchoolName}가 선택되었어요." />
{/if}
