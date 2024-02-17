<script>
  import { onMount, setContext } from "svelte";
  import { writable } from "svelte/store";
  import { Editor } from '@tiptap/core'
  import StarterKit from '@tiptap/starter-kit'
  import Underline from '@tiptap/extension-underline';
  import TextAlign from '@tiptap/extension-text-align';
  import { LiteralTab } from './extensions';
  import Menubar from "./components/Menubar.svelte";
  import TitleBar from "./components/TitleBar.svelte";
  import ToolBar from "./components/ToolBar.svelte";
  import { editor_key } from "./utils";


  let editor_view = null;
  let editor = writable(null);

  let min_size = false;
  let innerWidth = 0;

  $: min_size = innerWidth < 1000 ? true : false

  setContext(editor_key, editor);

  onMount(() => {
      $editor = new Editor({
        element: editor_view,
        extensions: [
            StarterKit, Underline, TextAlign,
            LiteralTab,
        ],
        content: '<p>Hello World!</p>',
    });
  });
</script>

<svelte:window bind:innerWidth/>


<div class="min-h-screen flex flex-col h-screen bg-[#F9FBFD]">
    <header class="h-max pb-2 px-4">
        <TitleBar/>
        <Menubar/>
        <ToolBar/>
    </header>
    <!-- main container -->
    <div class="flex-1 flex flex-row overflow-y-hidden px-3 pt-3">
      <main class="flex-1 border-x border-gray-200 bg-white max-w-4xl py-8 px-10 overflow-y-auto shadow" class:mx-auto={min_size == true}>
        <div bind:this={editor_view} class="flex h-full max-w-full prose">

        </div>
      </main>
  
      {#if min_size == false}
      <nav class="order-first flex flex-col md:w-72 lg:w-96 overflow-y-auto mr-1">
        <div class="h-10 w-full text-gray-600 p-2">
            Feuilles
        </div>
        <div class="grow border-t border-gray-300/40">

        </div>
      </nav>
      {/if}
    </div>
    <!-- end main container -->
  
    <footer class="border-gray-300/400 text-gray-600 p-2 h-10 border-t">Footer</footer>
</div>