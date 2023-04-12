<script lang="ts">
  import { selectedCity, selectedSchool, selectedSchoolName, openSchoolToast } from '../../stores'
  import { draw, fade } from 'svelte/transition'
  import { Info, BoxSelect } from 'lucide-svelte'

  import MenuBar from '../../components/MenuBar.svelte'
  import SimpleInfo from '../../components/SimpleInfo.svelte'

  interface School {
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

  let currentSchoolName: string
  selectedSchoolName.subscribe((value) => {
    currentSchoolName = value
  })

  let searched = false
  let searchedSchools: School[] = []

  let loadingAnimationReady = false
  setTimeout(() => {
    loadingAnimationReady = true
  }, 0)

  let debounceTimer: any
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
        })
    }, 800)
  }

  function selectSchool(school: School) {
    selectedCity.set(school.ATPT_OFCDC_SC_CODE)
    selectedSchool.set(parseInt(school.SD_SCHUL_CODE))
    selectedSchoolName.set(school.SCHUL_NM)
    openSchoolToast.set(true)
    setTimeout(() => {
      openSchoolToast.set(false)
    }, 2000)
  }
</script>

<MenuBar
  title="학교 선택"
  back={true}
  search={true}
  searchPlaceholder="초등학교 검색"
  queryChange={handleQueryChange}
/>
<div class="flex h-full grow flex-col gap-3 bg-neutral-100 p-4">
  <div class="flex items-center gap-1 rounded-full bg-white p-2 pl-3">
    <Info class="h-5 w-5" />
    {#if currentSchoolName}
      <p>현재 선택된 학교는 <b class="font-semibold">{currentSchoolName}</b>에요.</p>
    {:else}
      <p>현재 선택된 학교가 없어요.</p>
    {/if}
  </div>
  {#if searchedSchools.length}
    <ul class="flex grow flex-col items-start gap-4">
      {#each searchedSchools as school}
        <li class="flex w-full flex-col items-start rounded-lg bg-white">
          <span class="mx-5 mt-4 text-sm font-medium text-neutral-400">
            {school.ORG_RDNMA}
          </span>
          <h2 class="mx-5 text-2xl font-semibold">{school.SCHUL_NM}</h2>
          <a
            href="/"
            class="mx-2 mt-3 mb-2 rounded py-2 px-3 text-green-500 hover:bg-green-50 active:bg-green-100"
            on:click={() => selectSchool(school)}
          >
            이 학교로 선택
          </a>
        </li>
      {/each}
    </ul>
  {:else if !searched}
    <div class="flex grow items-center justify-center">
      {#if loadingAnimationReady}
        <svg xmlns="http://www.w3.org/2000/svg" class="h-48 w-48 text-neutral-400" viewBox="0 0 24 24" fill="none">
          <path
            d="M12.4472 4.10557C12.1657 3.96481 11.8343 3.96481 11.5528 4.10557L1.55279 9.10557C1.214 9.27496 1 9.62123 1 10C1 10.3788 1.214 10.725 1.55279 10.8944L5 12.618V17C5 17.2652 5.10536 17.5196 5.29289 17.7071C7.02287 19.4371 9.55152 20.25 12 20.25C14.4485 20.25 16.9771 19.4371 18.7071 17.7071C18.8946 17.5196 19 17.2652 19 17V12.618L21 11.618V16C21 16.5523 21.4477 17 22 17C22.5523 17 23 16.5523 23 16V10C23 9.62123 22.786 9.27496 22.4472 9.10557L12.4472 4.10557ZM17.5721 11.0959C17.5596 11.1019 17.5471 11.1081 17.5348 11.1146L12 13.882L6.4652 11.1146C6.4529 11.1081 6.44044 11.1019 6.42784 11.0959L4.23607 10L12 6.11803L19.7639 10L17.5721 11.0959ZM7 13.618L11.5528 15.8944C11.8343 16.0352 12.1657 16.0352 12.4472 15.8944L17 13.618V16.5649C15.731 17.6607 13.8999 18.25 12 18.25C10.1001 18.25 8.26902 17.6607 7 16.5649V13.618Z"
            fill="currentColor"
            in:fade={{ duration: 400, delay: 400 }}
          />
          <path
            d="M12.4472 4.10557C12.1657 3.96481 11.8343 3.96481 11.5528 4.10557L1.55279 9.10557C1.214 9.27496 1 9.62123 1 10C1 10.3788 1.214 10.725 1.55279 10.8944L5 12.618V17C5 17.2652 5.10536 17.5196 5.29289 17.7071C7.02287 19.4371 9.55152 20.25 12 20.25C14.4485 20.25 16.9771 19.4371 18.7071 17.7071C18.8946 17.5196 19 17.2652 19 17V12.618L21 11.618V16C21 16.5523 21.4477 17 22 17C22.5523 17 23 16.5523 23 16V10C23 9.62123 22.786 9.27496 22.4472 9.10557L12.4472 4.10557ZM17.5721 11.0959C17.5596 11.1019 17.5471 11.1081 17.5348 11.1146L12 13.882L6.4652 11.1146C6.4529 11.1081 6.44044 11.1019 6.42784 11.0959L4.23607 10L12 6.11803L19.7639 10L17.5721 11.0959ZM7 13.618L11.5528 15.8944C11.8343 16.0352 12.1657 16.0352 12.4472 15.8944L17 13.618V16.5649C15.731 17.6607 13.8999 18.25 12 18.25C10.1001 18.25 8.26902 17.6607 7 16.5649V13.618Z"
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
