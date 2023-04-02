<script lang="ts">
  import { selectedSchool, selectedSchoolName } from '../../stores'
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
  {#if searchedSchools.length || !searched}
    <ul class="flex grow flex-col items-start gap-4">
      {#each searchedSchools as school}
        <li class="flex w-full flex-col items-start rounded-lg bg-white">
          <span class="mx-5 mt-4 text-sm font-medium text-neutral-400">
            {school.ORG_RDNMA}
          </span>
          <h2 class="mx-5 text-2xl font-semibold">{school.SCHUL_NM}</h2>
          <button
            class="mx-2 mt-3 mb-2 rounded py-2 px-3 text-green-500 hover:bg-green-50 active:bg-green-100"
            on:click={() => {
              selectedSchool.set(parseInt(school.SD_SCHUL_CODE))
              selectedSchoolName.set(school.SCHUL_NM)
            }}
          >
            이 학교로 선택
          </button>
        </li>
      {/each}
    </ul>
  {:else}
    <div class="flex grow items-center justify-center">
      <SimpleInfo Icon={BoxSelect} title="검색 결과가 없어요" description="오타를 확인해주세요." />
    </div>
  {/if}
</div>
