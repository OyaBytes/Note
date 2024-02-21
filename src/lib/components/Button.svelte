<script lang="ts">
  import { createTooltip, melt } from '@melt-ui/svelte';
  import { fade } from 'svelte/transition';
  import { cn } from '../utils';


  let default_cls = "inline-flex items-center justify-center rounded-full \
  text-gray-600 transition-colors hover:bg-blue-200/90 \
  focus-visible:ring focus-visible:ring-gray-400 focus-visible:ring-offset-2 p-0 text-sm font-medium";

  let cls = "";
  let tooltip_class_default = "z-10 rounded bg-white shadow-lg mt-2 border-gray-400/30 border";
  export let tooltip_text = "This is a button";
  export let tooltip_class = "";

  export {cls as class};


  const {
    elements: { trigger, content, arrow },
    states: { open },
  } = createTooltip({
    positioning: {
      placement: 'bottom',
    },
    openDelay: 1000,
    closeDelay: 0,
    closeOnPointerDown: false,
    forceVisible: true,
  });
</script>

<button type="button" on:click class="{cn(default_cls, cls)}" use:melt={$trigger} {...$$restProps}>
    <slot>
        Button
    </slot>
</button>

{#if $open}
  <div
    use:melt={$content}
    transition:fade={{ duration: 100 }}
    class="{cn(tooltip_class_default, tooltip_class)}"
  >
    <div use:melt={$arrow} />
    <p class="px-4 py-1 text-sm text-gray-700 max-w-48 text-center">{tooltip_text}</p>
  </div>
{/if}
