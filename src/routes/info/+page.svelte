<script lang="ts">
  import { page } from '$app/stores'

  import MenuBar from '../../components/MenuBar.svelte'

  import vegetableData from '../../vegetableData'

  const id = parseInt($page.url.searchParams.get('id') || '')
  const isIdNaN = isNaN(id)

  const vegetable = vegetableData[id]
</script>

<div class="flex max-h-screen grow flex-col bg-neutral-300">
  <MenuBar title="재료 정보" back={true} />
  {#if id && !isIdNaN}
    <div class="flex grow flex-col">
      <div class="grow flex snap-x snap-mandatorny overflow-x-scroll w-screen">
        <div class="grow flex w-[300vw] snap-x snap-mandatory snap-start">
          {#each vegetable.images as image, i}
            <div class="h-[calc(100vh-54px-8rem)] min-w-screen max-w-screen w-screen">
              <!-- Had to use calc, it was hard to make it with only %'s. -->
              <img src={image} class="object-contain snap-start h-[calc(100vh-54px-8rem)] w-screen" alt={`${vegetable.name}의 ${i + 1}번째 사진`} />
            </div>
          {/each}
        </div>
      </div>
      <div class="rounded-t-lg bg-white p-5 h-32">
        <h1 class="text-2xl font-semibold">{vegetable.name}</h1>
        <p>{vegetable.description}</p>
      </div>
    </div>
  {/if}
</div>
