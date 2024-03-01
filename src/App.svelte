<script lang="ts">
  import "./app.css";
  import Note from "./lib/Note.svelte";
  import { NoteBasicSetup } from "./lib/core/noteSchema";
</script>

<main  class="h-screen w-screen">
  <Note options={NoteBasicSetup}/>
</main>

<style>
</style>
