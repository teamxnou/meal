<script lang="ts">
  export let Icon: any, title: string, description: string;
</script>

<div class="flex flex-col gap-1 items-center text-center">
  <Icon class="h-32 w-32 mb-3" />
  <h1 class="text-2xl font-semibold">{title}</h1>
  <p>{description}</p>
</div>
