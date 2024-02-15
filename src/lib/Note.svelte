<script>
    import Editor from "./tiptap/Editor.svelte";
    import Menubar from "./menu/Menubar.svelte";
    import TitleBar from "./menu/TitleBar.svelte";
    import Ruban from "./edition/Ruban.svelte";

    let min_size = false;
    let innerWidth = 0;

    $: min_size = innerWidth < 1000 ? true : false
</script>

<svelte:window bind:innerWidth/>


<div class="min-h-screen flex flex-col h-screen bg-[#F9FBFD]">
    <header class="h-max pb-2 px-4">
        <TitleBar/>
        <Menubar/>
        <Ruban/>
    </header>
    <!-- main container -->
    <div class="flex-1 flex flex-row overflow-y-hidden px-3 pt-3">
      <main class="flex-1 border-x border-gray-200 bg-white max-w-4xl py-8 px-10 overflow-y-auto shadow" class:mx-auto={min_size == true}>
        <Editor/>
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