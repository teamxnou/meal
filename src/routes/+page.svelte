<script lang="ts">
  import { goto } from '$app/navigation'
  import {
    notifyRelease,
    isNeisUnderMaintaince,
    primarySchoolSelected,
    altSchools,
    currentSchoolIndex,
    date as savedDate
  } from '../stores'
  import { settings } from '../settings'

  import { Settings, Search } from 'lucide-svelte'
  import CenteredSchool2 from '../components/CenteredSchool2.svelte'

  import MenuBar from '../components/MenuBar.svelte'
  import SchoolBar from '../components/SchoolBar.svelte'
  import MealList from '../components/MealList.svelte'
  import DatePicker from '../components/DatePicker.svelte'
  import MenuSurvey from '../components/MenuSurvey.svelte'

  if (typeof window !== 'undefined') {
    const savedCurrentSchoolIndex = sessionStorage.getItem('currentSchoolIndex') || '0'
    currentSchoolIndex.set(Number(savedCurrentSchoolIndex))
  }
</script>

<MenuBar
  LeftButton={Settings}
  leftButtonLink="/settings"
  leftButtonLabel="설정"
  leftButtonBadge={$notifyRelease ? '새 버전의 기능을 확인해보세요' : undefined}
  title="오늘뭐먹지"
  buttons={[CenteredSchool2, Search]}
  buttonLinks={['/school-selection', '/vegetable-search']}
  buttonLabels={['학교 선택', '재료 검색']}
  primary={true}
/>
{#if $primarySchoolSelected && $altSchools.length > 0}
  <SchoolBar />
{/if}
{#if typeof window !== 'undefined'}
  <MealList />
{/if}
<DatePicker />
{#if $settings.parcipiateMenuSurvey}
  <MenuSurvey />
{/if}
<div id="route-main" />
