<script lang="ts">
  export let Icon: any, title: string, description: string
</script>

<div class="flex flex-col items-center gap-1 break-keep text-center">
  <Icon class="mb-3 h-32 w-32" />
  <h1 class="text-2xl font-semibold">{title}</h1>
  <p>{description}</p>
</div>
