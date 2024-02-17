<script lang="ts">
    import {
      createCombobox,
      melt,
      type ComboboxOptionProps,
    } from '@melt-ui/svelte';
    import { Check, ChevronDown, ChevronUp } from 'lucide-svelte';
    import { fly } from 'svelte/transition';
  
    type Manga = {
      author: string;
      title: string;
      disabled: boolean;
    };
  
    let mangas: Manga[] = [
      {
        author: 'Kentaro Miura',
        title: 'Berserk',
        disabled: false,
      },
      {
        author: 'ONE',
        title: 'Mob Psycho 100',
        disabled: false,
      },
      {
        author: 'Hajime Isayama',
        title: 'Attack on Titan',
        disabled: false,
      },
      {
        author: 'Junji Ito',
        title: 'Uzumaki',
        disabled: false,
      },
      {
        author: 'Yomi Sarachi',
        title: 'Steins Gate',
        disabled: false,
      },
      {
        author: 'Tite Kubo',
        title: 'Bleach',
        disabled: false,
      },
      {
        author: 'Masashi Kishimoto',
        title: 'Naruto',
        disabled: true,
      },
      {
        author: 'Katsura Hoshino',
        title: 'D.Gray Man',
        disabled: false,
      },
      {
        author: 'Tsugumi Ohba',
        title: 'Death Note',
        disabled: false,
      },
      {
        author: 'Hiromu Arakawa',
        title: 'Fullmetal Alchemist',
        disabled: false,
      },
    ];
  
    const toOption = (manga: Manga): ComboboxOptionProps<Manga> => ({
      value: manga,
      label: manga.title,
      disabled: manga.disabled,
    });
  
    const {
      elements: { menu, input, option, label },
      states: { open, inputValue, touchedInput, selected },
      helpers: { isSelected },
    } = createCombobox<Manga>({
      forceVisible: true,
    });
  
    $: if (!$open) {
      $inputValue = $selected?.label ?? '';
    }
  
    $: filteredMangas = $touchedInput
      ? mangas.filter(({ title, author }) => {
          const normalizedInput = $inputValue.toLowerCase();
          return (
            title.toLowerCase().includes(normalizedInput) ||
            author.toLowerCase().includes(normalizedInput)
          );
        })
      : mangas;
  </script>
  
  <div class="inline-block">
    <div class="relative">
      <input
        use:melt={$input}
        class="flex h-10 items-center justify-between rounded-
            px-3 pr-4 text-gray-900 outline-none bg-[#EDF2FA] max-w-40"
        placeholder="Best book ever"
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
        {#each filteredMangas as manga, index (index)}
          <li
            use:melt={$option(toOption(manga))}
            class="relative cursor-pointer scroll-my-2 rounded-md py-2 px-2
          hover:bg-gray-100
          data-[highlighted]:bg-gray-200 data-[highlighted]:text-gray-900
            data-[disabled]:opacity-50"
          >
            {#if $isSelected(manga)}
              <div class="check absolute left-2 top-1/2 z-10 text-gray-900">
                <Check class="size-4" />
              </div>
            {/if}
            <div class="pl-4">
              <span class="text-base">{manga.title}</span>
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