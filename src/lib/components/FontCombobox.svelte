<script lang="ts">
    import {
      createCombobox,
      melt,
      type ComboboxOptionProps,
    } from '@melt-ui/svelte';
    import { Check, ChevronDown, ChevronUp } from 'lucide-svelte';
    import { fly } from 'svelte/transition';

    export let on_select = (value) => {};
  
    type Font = {
      font: string;
      title: string;
    };
  
    let fonts: Font[] = [
      {
        font: 'helvetica, sans-serif',
        title: 'Helvetica',
      },
      {
        font: 'arial, sans-serif',
        title: 'Arial',
      },
      {
        font: '"arial black", sans-serif',
        title: 'Arial Black',
      },
      {
        font: 'verdana, sans-serif',
        title: 'Verdana',
      },
      {
        font: 'tahoma, sans-serif',
        title: 'Tahoma',
      },
      {
        font: 'impact, sans-serif',
        title: 'Impact',
      },
      {
        font: 'gil sans, sans-serif',
        title: 'Gil Sans',
      },
      {
        font: '"times new roman", serif',
        title: 'Times New Roman',
      },
      {
        font: 'georgia, serif',
        title: 'Georgia',
      },
      {
        font: 'Palantino, serif',
        title: 'Palantino',
      },
      {
        font: 'courier, monospace',
        title: 'Courier',
      },
      {
        font: 'lucida console, monospace',
        title: 'Palantino',
      },
      {
        font: 'bradley hand, cursive',
        title: 'Bradley Hand',
      },
    ];
  
    const toOption = (font: Font): ComboboxOptionProps<Font> => ({
      value: font,
      label: font?.title,
    });
  
    const {
      elements: { menu, input, option, label },
      states: { open, inputValue, touchedInput, selected },
      helpers: { isSelected },
    } = createCombobox<Font>({
      forceVisible: true,
      onSelectedChange: ({curr, next}) => {
        on_select(next.value.font);
        return next;
      }
    });
  
    $: if (!$open) {
      $inputValue = $selected?.label ?? '';
    }
  
    $: filteredFonts = $touchedInput
      ? fonts.filter(({ title, font }) => {
          const normalizedInput = $inputValue.toLowerCase();
          return (
            title.toLowerCase().includes(normalizedInput) ||
            font.toLowerCase().includes(normalizedInput)
          );
        })
      : fonts;
  </script>
  
  <div class="inline-block">
    <div class="relative">
      <input
        use:melt={$input}
        class="flex h-10 items-center justify-between rounded truncate
            px-3 pr-4 text-gray-900 outline-none border border-[#EDF2FA] focus:bg-[#EDF2FA] max-w-40"
        placeholder="Fonts"
        
      />
      <div class="absolute mr-2 right-0 top-1/2 z-10 -translate-y-1/2 text-gray-900">
        {#if $open}
          <ChevronUp class="size-4" />
        {:else}
          <ChevronDown class="size-4" />
        {/if}
      </div>
    </div>
  </div>
  {#if $open}
    <ul
      class="z-10 flex max-h-[300px] flex-col overflow-hidden shadow-lg rounded min-w-40 max-w-40"
      use:melt={$menu}
      transition:fly={{ duration: 150, y: -5 }}
    >
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <div
        class="flex max-h-full flex-col gap-0 overflow-y-auto bg-white text-gray-900"
        tabindex="0"
      >
        {#each filteredFonts as font, index (index)}
          <li
            use:melt={$option(toOption(font))}
            class="relative cursor-pointer scroll-my-2 rounded-md py-2 px-2
          hover:bg-gray-100
          data-[highlighted]:bg-gray-200 data-[highlighted]:text-gray-900
            data-[disabled]:opacity-50"
          >
            {#if $isSelected(font)}
              <div class="check absolute left-2 top-1/2 z-10 text-gray-900">
                <Check class="size-4" />
              </div>
            {/if}
            <div class="pl-4">
              <span class="text-base" style="font-family: {font?.font};">{font?.title}</span>
            </div>
          </li>
        {:else}
          <li class="relative cursor-pointer rounded-md py-1 pl-8 pr-2">
            No results found
          </li>
        {/each}
      </div>
    </ul>
  {/if}
  
  <style lang="postcss">
    .check {
      @apply absolute left-2 top-1/2 text-gray-500;
      translate: 0 calc(-50% + 1px);
    }
  </style>