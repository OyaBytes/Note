<script lang="ts">
    import { createPopover, melt } from '@melt-ui/svelte';
    import { fade, slide } from 'svelte/transition';
    import { Link, X } from 'lucide-svelte';
  
    const {
      elements: { trigger, content, arrow, close },
      states: { open },
    } = createPopover({
      forceVisible: true,
    });
  </script>
  
  <button
    type="button"
    class="trigger"
    use:melt={$trigger}
    aria-label="Update dimensions"
  >
    <Link size="18" />
    <span class="sr-only">Open Popover</span>
  </button>
  
  {#if $open}
    <div
      use:melt={$content}
      transition:slide
      class=" content"
    >
      <div use:melt={$arrow} />
      <div class="flex flex-col gap-2.5">
        <label for="link">Insérer le lien</label>
        <input type="url" id="link" class="input" placeholder="https://example.com" />
        
      </div>
      <button class="close" use:melt={$close}>
        <X class="size-4" />
      </button>
    </div>
  {/if}
  
  <style lang="postcss">
    label {
      @apply mb-2 font-medium text-neutral-700;
    }
  
    .input {
      @apply flex h-8 w-full rounded-sm border border-gray-200 py-2 bg-transparent px-2.5;
      @apply flex-1 items-center justify-center outline-none;
      @apply px-2.5 leading-none text-gray-700;
    }
  
    .trigger {
      @apply inline-flex h-9 w-9 items-center justify-center rounded p-0;
      @apply text-sm font-medium text-gray-600 transition-colors hover:bg-white/90;
      @apply focus-visible:ring focus-visible:ring-gray-400 focus-visible:ring-offset-2;
    }
  
    .close {
      @apply absolute right-1.5 top-1.5 flex h-7 w-7 items-center justify-center rounded-full;
      @apply text-gray-900 transition-colors hover:bg-gray-500/10;
      @apply focus-visible:ring focus-visible:ring-gray-400 focus-visible:ring-offset-2;
      @apply bg-white p-0 text-sm font-medium;
    }
  
    .content {
      @apply z-10 w-72 rounded-[4px] bg-white p-5 shadow-md;
    }
  </style>