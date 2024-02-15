<script lang="ts">
    import { onMount } from "svelte";
    import { Editor } from '@tiptap/core'
    import StarterKit from '@tiptap/starter-kit'

    let a = "my name"

    let editor = null;

    onMount(() => {
        new Editor({
            element: editor,
            extensions: [
                StarterKit,
            ],
            content: '<p>Hello World!</p>',
        })
    });
</script>


<div bind:this={editor} class="flex h-full w-full">

</div>
