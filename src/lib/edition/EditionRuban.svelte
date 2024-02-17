<script>
    import { Bold, AArrowDown, AArrowUp, Undo, Redo, Underline, Strikethrough, Italic } from "lucide-svelte";
    import FontCombobox from "./FontCombobox.svelte";
    import Button from "../button/Button.svelte";
    import { getContext } from "svelte";
    import { editor_key } from "../utils";

    let editor = getContext(editor_key);
</script>

<div class="border-r pr-2 border-gray-300/400">
    <div class="space-x-2 pl-2 py-1 text-gray-600">
        <Button on:click={() => $editor.chain().focus().toggleBold().run()}
            class="p-2 text-gray-600 rounded"
            tooltip_text="Mettre le texte en gras">
            <Bold size="18"/>
        </Button>

        <Button on:click={() => $editor.chain().focus().toggleItalic().run()}
            class="p-2 text-gray-600 rounded"
            tooltip_text="Mettre le texte en italique">
            <Italic size="18"/>
        </Button>

        <Button on:click={() => $editor.chain().focus().toggleUnderline().run()}
            class="p-2 text-gray-600 rounded"
            tooltip_text="Souligner le texte">
            <Underline size="18"/>
        </Button>

        <Button on:click={() => $editor.chain().focus().toggleStrike().run()}
            class="p-2 text-gray-600 rounded"
            tooltip_text="Barrer le texte">
            <Strikethrough size="18"/>
        </Button>

        <Button
            class="p-2 text-gray-600 rounded"
            tooltip_text="Diminuer la taille de la police">
            <AArrowDown size="18"/>
        </Button>

        <Button
            class="p-2 rounded"
            tooltip_text="Augmenter la taille de la police">
            <AArrowUp size="18"/>
        </Button>

        <FontCombobox/>

        <Button on:click={() => $editor.chain().focus().undo().run()}
            class="p-2 rounded"
            tooltip_text="Annuler les modifications">
            <Undo size="18"/>
        </Button>

        <Button on:click={() => $editor.chain().focus().redo().run()}
            class="p-2 rounded"
            tooltip_text="Refaire les modifications">
            <Redo size="18"/>
        </Button>
    </div>
</div>