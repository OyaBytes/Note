<script>
  import { onMount, setContext } from "svelte";
  import { writable } from "svelte/store";
  import { Editor } from '@tiptap/core'
  import StarterKit from '@tiptap/starter-kit'
  import Underline from '@tiptap/extension-underline';
  import TextAlign from '@tiptap/extension-text-align';
  import TextStyle from '@tiptap/extension-text-style';
  import { Color } from '@tiptap/extension-color';
  import CharacterCount from '@tiptap/extension-character-count';
  import Subscript from '@tiptap/extension-subscript';
  import Superscript from '@tiptap/extension-superscript';
  import Typography from '@tiptap/extension-typography';
  import Link from '@tiptap/extension-link';
  import { LiteralTab, NotePlaceHolder } from './extensions';
  import MobileToolbar from "./components/MobileToolbar.svelte";
  import ToolBar from "./components/ToolBar.svelte";
  import { editor_key, isMobile } from "./utils";


  let editor_view = null;
  let editor = writable(null);

  let min_size = false;
  let innerWidth = 0;

  let count_words = 0;

  $: min_size = innerWidth < 1000 ? true : false

  setContext(editor_key, editor);

  onMount(() => {
      $editor = new Editor({
        element: editor_view,
        extensions: [
            StarterKit, Underline, TextAlign,
            LiteralTab, NotePlaceHolder, CharacterCount,
            TextStyle, Color, Subscript, Superscript,
            Typography, Link,
        ],
        content: '<p>Hello World!</p>',
    });

    $editor.on('create', () => {
        count_words = $editor.storage.characterCount.words();
    });

    $editor.on('update', () => {
        count_words = $editor.storage.characterCount.words();
    });

  });
</script>

<svelte:window bind:innerWidth/>


<div class="min-h-screen flex flex-col h-screen bg-gray-100">
    <ToolBar/>

    <!-- main container -->
    <div class="flex-1 flex flex-row px-2 lg:p-0 overflow-y-hidden">
      <main class="flex-1 border-x border-gray-200 bg-white max-w-4xl py-8 px-10 overflow-y-auto shadow" class:mx-auto={min_size == true}>
        <div bind:this={editor_view} class="flex h-full max-w-full prose">

        </div>
      </main>
  
      {#if min_size == false}
      <nav class="order-first flex flex-col bg-[#37639B] lg:mr-4 md:w-72 lg:w-96 overflow-y-auto mr-1">
        <div class="h-10 w-full text-gray-50 p-2 font-semibold">
            Feuilles
        </div>
        <div class="grow border-t border-gray-300/50">

        </div>
      </nav>
      {/if}
    </div>
    <!-- end main container -->
    {#if $isMobile}
      <MobileToolbar/>
    {/if}
    <footer class="border-gray-300/400 bg-white text-gray-600 text-sm p-2 h-8 border-t flex justify-between">
        <div>
          {count_words} mots
        </div>
        <p>Copyright 2024 - OyaBytes</p>
    </footer>
</div>