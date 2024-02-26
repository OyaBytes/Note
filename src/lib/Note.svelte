<script lang="ts">
  import { onMount, setContext, tick } from "svelte";
  import {
        AlignLeft, AlignCenter, AlignRight, AlignJustify, Indent
    } from "lucide-svelte";
  import { writable } from "svelte/store";
  import { Editor } from '@tiptap/core'
  import StarterKit from '@tiptap/starter-kit'
  import Underline from '@tiptap/extension-underline';
  import TextAlign from '@tiptap/extension-text-align';
  import TextStyle from '@tiptap/extension-text-style';
  import FontFamily from '@tiptap/extension-font-family';
  import { Color } from '@tiptap/extension-color';
  import CharacterCount from '@tiptap/extension-character-count';
  import Subscript from '@tiptap/extension-subscript';
  import Superscript from '@tiptap/extension-superscript';
  import Typography from '@tiptap/extension-typography';
  import Link from '@tiptap/extension-link';
  import { LiteralTab, NotePlaceHolder, NoteFontSize } from './extensions';
  import MobileToolbar from "./components/MobileToolbar.svelte";
  import ToolBar from "./components/ToolBar.svelte";
  import FloatingMenu from "./components/FloatingMenu.svelte";
  import { editor_key, isMobile } from "./utils";
  import BubbleMenu from "./components/BubbleMenu.svelte";
  import Button from "./components/Button.svelte";
    import FloatingMenuContent from "./components/FloatingMenuContent.svelte";


  let editor_view = null;
  let editor = writable(null);

  let min_size = false;
  let innerWidth = 0;

  let count_words = 0;
  let floating_div:HTMLDivElement ;

  $: min_size = innerWidth < 1000 ? true : false

  setContext(editor_key, editor);

  onMount(async() => {
    $editor = new Editor({
      element: editor_view,
      extensions: [
          StarterKit, Underline, TextAlign,
          LiteralTab, NotePlaceHolder, CharacterCount,
          TextStyle, Color, Subscript, Superscript,
          Typography, Link, FontFamily, NoteFontSize,
      ],
      content: "<p>Hello World!</p><pre><code>console.log('foo')</code></pre>",
    });

    $editor.on('create', () => {
        count_words = $editor.storage.characterCount.words();
    });

    $editor.on('update', () => {
        count_words = $editor.storage.characterCount.words();
    });

    await tick();

  });
</script>

<svelte:window bind:innerWidth/>


<div class="min-h-screen flex flex-col h-screen bg-gray-100">
    <ToolBar/>

    <!-- main container -->
    <div class="flex-1 flex flex-row px-2 lg:p-0 lg:pr-2 overflow-y-hidden">
      <main class="flex-1 border-x border-gray-200 my-2 bg-white max-w-4xl py-2 md:py-4 md:px-5 px-4 lg:px-10 overflow-y-auto shadow" class:mx-auto={min_size == true}>
        <div bind:this={editor_view} class="flex h-full max-w-full prose mr-1">

        </div>
        {#if $editor}
          <FloatingMenu editor={$editor} tippyOptions={{ placement: 'bottom-start' }} class="-ml-3 shadow rounded-sm min-h-7 bg-white min-w-7">
            <FloatingMenuContent editor={$editor}/>
          </FloatingMenu>
          <BubbleMenu editor={$editor} class="relative min-h-7 bg-white shadow min-w-7">
            <div class="border-r px-2 border-gray-300/400">
              <div class="space-x-2 py-1 text-gray-600">
                  <Button on:click={() => $editor.chain().focus().setTextAlign("left").run()}
                      class="p-2 rounded"
                      tooltip_text="Aligner le texte à gauche">
                      <AlignLeft size="18"/>
                  </Button>
          
                  <Button on:click={() => $editor.chain().focus().setTextAlign("center").run()}
                      class="p-2 rounded"
                      tooltip_text="Aligner le texte au centre">
                      <AlignCenter size="18"/>
                  </Button>
          
                  <Button on:click={() => $editor.chain().focus().setTextAlign("right").run()}
                      class="p-2 rounded"
                      tooltip_text="Aligner le texte à droite">
                      <AlignRight size="18"/>
                  </Button>
          
                  <Button
                      class="p-2 rounded"
                      tooltip_text="Justifier le texte">
                      <AlignJustify size="18"/>
                  </Button>
                  
                  <Button
                      class="p-2 rounded"
                      tooltip_text="Indenter le texte">
                      <Indent size="18"/>
                  </Button>
                  
              </div>
          </div>
          </BubbleMenu>
        {/if}
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