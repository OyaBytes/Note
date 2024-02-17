<script>
    import { Heading1, Heading2, Heading3, Heading4, Heading5 } from "lucide-svelte";
    import Button from "../button/Button.svelte";
    import { getContext } from "svelte";
    import { editor_key } from "../utils";

    let editor = getContext(editor_key);
</script>

<div class="px-2">
    <div class="space-x-2 py-1 text-gray-600">
        
        <Button on:click={() => $editor.chain().focus().toggleHeading({ level: 1 }).run()}
            class="p-2 rounded"
            tooltip_text="Titre de niveau 1">
            <Heading1 size="18"/>
        </Button>
        
        <Button on:click={() => $editor.chain().focus().toggleHeading({ level: 2 }).run()}
            class="p-2 rounded"
            tooltip_text="Titre de niveau 2">
            <Heading2 size="18"/>
        </Button>

        <Button on:click={() => $editor.chain().focus().toggleHeading({ level: 3 }).run()}
            class="p-2 rounded"
            tooltip_text="Titre de niveau 3">
            <Heading3 size="18"/>
        </Button>

        <Button on:click={() => $editor.chain().focus().toggleHeading({ level: 4 }).run()}
            class="p-2 rounded"
            tooltip_text="Titre de niveau 4">
            <Heading4 size="18"/>
        </Button>

        <Button on:click={() => $editor.chain().focus().toggleHeading({ level: 5 }).run()}
            class="p-2 rounded"
            tooltip_text="Titre de niveau 5">
            <Heading5 size="18"/>
        </Button>
    </div>
</div>