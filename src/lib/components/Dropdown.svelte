<script>
    let isOpen = false;

</script>

<div class="relative inline-block text-left">
    <div>
      <button type="button" 
        on:click={() => isOpen = !isOpen}
        class="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
        <slot name="button"/>
      </button>
    </div>

    <div class:hidden={!isOpen}  on:focusout={() => isOpen = false}
    class="absolute right-0 z-10 p-3 space-y-2 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
      <div class="py-1" role="none">
        <slot name="dropdown">
            Body Required
        </slot>
      </div>
    </div>
  </div>
  