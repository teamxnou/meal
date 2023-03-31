<script lang="ts">
  import { selectedSchool, selectedSchoolName } from '../../stores'

  import MenuBar from '../../components/MenuBar.svelte'

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
        .then((res) => searchedSchools = res.schoolInfo[1].row)
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
<ul class="flex grow flex-col items-start gap-4 bg-neutral-100 p-4">
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
