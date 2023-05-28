<script lang="ts">
  import { primarySchool, altSchools, openSchoolToast, isNeisUnderMaintaince } from '../../stores'
  import type { School } from '../../stores'
  import { draw, fade } from 'svelte/transition'
  import { Info, BoxSelect, Star } from 'lucide-svelte'

  import MenuBar from '../../components/MenuBar.svelte'
  import SimpleInfo from '../../components/SimpleInfo.svelte'
  import ServerMaintainceAlert from '../../components/ServerMaintainceAlert.svelte'
  import SchoolCard from '../../components/SchoolCard.svelte'

  interface SearchedSchool {
    ATPT_OFCDC_SC_CODE: string
    ATPT_OFCDC_SC_NM: string
    SD_SCHUL_CODE: string
    SCHUL_NM: string
    ENG_SCHUL_NM: string
    SCHUL_KND_SC_NM: string
    LCTN_SC_NM: string
    JU_ORG_NM: string
    FOND_SC_NM: string
    ORG_RDNZC: string
    ORG_RDNMA: string
    ORG_RDNDA: string
    ORG_TELNO: string
    HMPG_ADRES: string
    COEDU_SC_NM: string
    ORG_FAXNO: string | null
    HS_SC_NM: string | null
    INDST_SPECL_CCCCL_EXST_YN: string
    HS_GNRL_BUSNS_SC_NM: string
    SPCLY_PURPS_HS_ORD_NM: string | null
    ENE_BFE_SEHF_SC_NM: string
    DGHT_SC_NM: string
    FOND_YMD: string
    FOAS_MEMRD: string
    LOAD_DTM: string
  }

  let searched = false
  let searchedSchools: SearchedSchool[] = []

  let loadingAnimationReady = false
  setTimeout(() => {
    loadingAnimationReady = true
  }, 0)

  let debounceTimer: any
  let currentQuery: string = ''
  function handleQueryChange(query: string) {
    clearTimeout(debounceTimer)
    debounceTimer = setTimeout(() => {
      fetch(
        `https://open.neis.go.kr/hub/schoolInfo?KEY=${
          import.meta.env.VITE_NEIS_API_KEY
        }&Type=json&SCHUL_NM=${query}&SCHUL_KND_SC_NM=초등학교`
      )
        .then((res) => res.json())
        .then((res) => {
          if (res.RESULT?.CODE) {
            searchedSchools = []
            return
          }
          searchedSchools = res.schoolInfo[1].row
          searched = true
          currentQuery = query
        })
    }, 800)
  }

  function toSchoolType(school: SearchedSchool): School {
    return {
      name: school.SCHUL_NM,
      city: school.ATPT_OFCDC_SC_CODE,
      school: parseInt(school.SD_SCHUL_CODE),
      address: school.ORG_RDNMA
    }
  }

  function selectSchool(school: SearchedSchool) {
    primarySchool.set(toSchoolType(school))
    openSchoolToast.set(true)
    setTimeout(() => {
      openSchoolToast.set(false)
    }, 2000)
  }

  function altIncludes(arr: any[], item: any) {
    let result = false
    arr.forEach((i) => {
      if (JSON.stringify(i) == JSON.stringify(item)) {
        result = true
      }
    })
    return result
  }

  function handleFavoriteSchool(school: School) {
    if (altIncludes($altSchools, school)) {
      altSchools.update((schools) =>
        schools.filter((s) => JSON.stringify(s) != JSON.stringify(school))
      )
    } else {
      altSchools.update((schools) => [...schools, school])
    }
  }
</script>

<MenuBar
  title="학교 선택"
  back={true}
  search={true}
  searchDisabled={$isNeisUnderMaintaince}
  searchPlaceholder={$isNeisUnderMaintaince
    ? '점검 중에는 학교를 검색할 수 없어요'
    : '초등학교 검색'}
  queryChange={handleQueryChange}
/>
<div class="flex h-full grow flex-col gap-3 bg-neutral-100 p-4">
  <div class="flex items-center gap-1 rounded-full bg-white p-2 pl-3">
    <Info class="h-5 w-5" />
    {#if $primarySchool.name}
      <p>현재 선택된 학교는 <b class="font-semibold">{$primarySchool.name}</b>에요.</p>
    {:else}
      <p>현재 선택된 학교가 없어요.</p>
    {/if}
  </div>
  {#if searchedSchools.length}
    {#if currentQuery == '' && $altSchools.length != 0}
      <span class="text-sm font-medium text-neutral-400">즐겨찾기</span>
      <ul
        class="flex flex-col items-start gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
      >
        {#each $altSchools as school}
          <SchoolCard
            {school}
            name={school.name}
            address={school.address}
            isFavorite={altIncludes($altSchools, school)}
            {selectSchool}
            {handleFavoriteSchool}
          />
        {/each}
      </ul>
      <span class="text-sm font-medium text-neutral-400">모든 학교</span>
    {/if}
    <ul
      class="flex flex-col items-start gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
    >
      {#each searchedSchools as school}
        <SchoolCard
          {school}
          name={school.SCHUL_NM}
          address={school.ORG_RDNMA}
          isFavorite={altIncludes($altSchools, toSchoolType(school))}
          {selectSchool}
          handleFavoriteSchool={() => handleFavoriteSchool(toSchoolType(school))}
        />
      {/each}
    </ul>
  {:else if $isNeisUnderMaintaince}
    <ServerMaintainceAlert />
  {:else if !searched}
    <div class="flex grow items-center justify-center">
      {#if loadingAnimationReady}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-48 w-48 text-neutral-400"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M11.4453 2.16795C11.7812 1.94402 12.2188 1.94402 12.5547 2.16795L18.3028 6H22C22.5523 6 23 6.44772 23 7V19C23 19.7957 22.6839 20.5587 22.1213 21.1213C21.5587 21.6839 20.7957 22 20 22H4C3.20435 22 2.44129 21.6839 1.87868 21.1213C1.31607 20.5587 1 19.7957 1 19V7C1 6.44772 1.44772 6 2 6H5.69722L11.4453 2.16795ZM11 20H13V16C13 15.7348 12.8946 15.4804 12.7071 15.2929C12.5196 15.1054 12.2652 15 12 15C11.7348 15 11.4804 15.1054 11.2929 15.2929C11.1054 15.4804 11 15.7348 11 16V20ZM15 20V16C15 15.2043 14.6839 14.4413 14.1213 13.8787C13.5587 13.3161 12.7957 13 12 13C11.2043 13 10.4413 13.3161 9.87868 13.8787C9.31607 14.4413 9 15.2043 9 16V20H4C3.73478 20 3.48043 19.8946 3.29289 19.7071C3.10536 19.5196 3 19.2652 3 19V8H6C6.19742 8 6.39043 7.94156 6.5547 7.83205L12 4.20185L17.4453 7.83205C17.6096 7.94156 17.8026 8 18 8H21V19C21 19.2652 20.8946 19.5196 20.7071 19.7071C20.5196 19.8946 20.2652 20 20 20H15ZM10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9ZM6 11C6.55228 11 7 11.4477 7 12V12.01C7 12.5623 6.55228 13.01 6 13.01C5.44772 13.01 5 12.5623 5 12.01V12C5 11.4477 5.44772 11 6 11ZM18 11C18.5523 11 19 11.4477 19 12V12.01C19 12.5623 18.5523 13.01 18 13.01C17.4477 13.01 17 12.5623 17 12.01V12C17 11.4477 17.4477 11 18 11ZM6 15C6.55228 15 7 15.4477 7 16V16.01C7 16.5623 6.55228 17.01 6 17.01C5.44772 17.01 5 16.5623 5 16.01V16C5 15.4477 5.44772 15 6 15ZM18 15C18.5523 15 19 15.4477 19 16V16.01C19 16.5623 18.5523 17.01 18 17.01C17.4477 17.01 17 16.5623 17 16.01V16C17 15.4477 17.4477 15 18 15Z"
            fill="currentColor"
            fill-rule="evenodd"
            clip-rule="evenodd"
            in:fade={{ duration: 400, delay: 400 }}
          />
          <path
            d="M11.4453 2.16795C11.7812 1.94402 12.2188 1.94402 12.5547 2.16795L18.3028 6H22C22.5523 6 23 6.44772 23 7V19C23 19.7957 22.6839 20.5587 22.1213 21.1213C21.5587 21.6839 20.7957 22 20 22H4C3.20435 22 2.44129 21.6839 1.87868 21.1213C1.31607 20.5587 1 19.7957 1 19V7C1 6.44772 1.44772 6 2 6H5.69722L11.4453 2.16795ZM11 20H13V16C13 15.7348 12.8946 15.4804 12.7071 15.2929C12.5196 15.1054 12.2652 15 12 15C11.7348 15 11.4804 15.1054 11.2929 15.2929C11.1054 15.4804 11 15.7348 11 16V20ZM15 20V16C15 15.2043 14.6839 14.4413 14.1213 13.8787C13.5587 13.3161 12.7957 13 12 13C11.2043 13 10.4413 13.3161 9.87868 13.8787C9.31607 14.4413 9 15.2043 9 16V20H4C3.73478 20 3.48043 19.8946 3.29289 19.7071C3.10536 19.5196 3 19.2652 3 19V8H6C6.19742 8 6.39043 7.94156 6.5547 7.83205L12 4.20185L17.4453 7.83205C17.6096 7.94156 17.8026 8 18 8H21V19C21 19.2652 20.8946 19.5196 20.7071 19.7071C20.5196 19.8946 20.2652 20 20 20H15ZM10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9ZM6 11C6.55228 11 7 11.4477 7 12V12.01C7 12.5623 6.55228 13.01 6 13.01C5.44772 13.01 5 12.5623 5 12.01V12C5 11.4477 5.44772 11 6 11ZM18 11C18.5523 11 19 11.4477 19 12V12.01C19 12.5623 18.5523 13.01 18 13.01C17.4477 13.01 17 12.5623 17 12.01V12C17 11.4477 17.4477 11 18 11ZM6 15C6.55228 15 7 15.4477 7 16V16.01C7 16.5623 6.55228 17.01 6 17.01C5.44772 17.01 5 16.5623 5 16.01V16C5 15.4477 5.44772 15 6 15ZM18 15C18.5523 15 19 15.4477 19 16V16.01C19 16.5623 18.5523 17.01 18 17.01C17.4477 17.01 17 16.5623 17 16.01V16C17 15.4477 17.4477 15 18 15Z"
            stroke="currentColor"
            stroke-width="0.1"
            in:draw={{ duration: 800 }}
          />
        </svg>
      {/if}
    </div>
  {:else}
    <div class="flex grow items-center justify-center">
      <SimpleInfo Icon={BoxSelect} title="검색 결과가 없어요" description="오타를 확인해주세요." />
    </div>
  {/if}
</div>
