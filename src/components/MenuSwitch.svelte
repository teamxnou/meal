<script lang="ts">
  export let name: string,
    description: string = '',
    checked: boolean,
    updateChecked: (checked: boolean) => void;
</script>

<label
  class="relative flex cursor-pointer items-center justify-between bg-white px-5 py-1 hover:bg-neutral-50"
>
  <input
    type="checkbox"
    class="peer absolute top-0 left-0 right-0 bottom-0 h-full w-full appearance-none"
    bind:checked={checked}
    on:change={() => updateChecked(checked)}
    role="switch"
    aria-label={name}
  />
  <div class="my-2 flex flex-col">
    <span aria-hidden="true">{name}</span>
    <p class="text-xs text-neutral-400" aria-hidden={description ? 'false' : 'true'}>
      {description}
    </p>
  </div>
  <div
    class="switch"
  >
    <div />
  </div>
</label>

<style lang="postcss"> 
  .switch {
    @apply w-14 rounded-full border-2 bg-neutral-50 transition duration-500 peer-checked:border-green-500 peer-checked:bg-green-500 peer-checked:[&>div]:translate-x-5;
  }
  .switch > div {
    @apply h-8 w-8 transform rounded-full bg-white shadow transition duration-300;
  }
  input[type='checkbox']:focus {
    @apply outline-none ring-0 ring-offset-0;
  }
  input[type='checkbox']:focus:focus-visible ~ .switch {
    @apply ring-2 ring-neutral-300 ring-offset-2 ring-offset-white;
  }
  input[type='checkbox']:checked:focus:focus-visible ~ .switch {
    @apply ring-2 ring-green-600 ring-offset-2;
  }
</style>
