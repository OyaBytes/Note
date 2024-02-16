<script>
    import { Bold, AArrowDown, AArrowUp, Underline, Italic } from "lucide-svelte";
    import FontCombobox from "./FontCombobox.svelte";
    import Button from "../button/Button.svelte";
</script>

<div class="border-r pr-2 border-gray-300/400">
    <div class="space-x-2 pl-2 py-1 text-gray-600">
        <Button
            class="p-2 text-gray-600 rounded"
            tooltip_text="Mettre le texte en gras">
            <Bold size="18"/>
        </Button>

        <Button
            class="p-2 text-gray-600 rounded"
            tooltip_text="Mettre le texte en italique">
            <Italic size="18"/>
        </Button>

        <Button
            class="p-2 text-gray-600 rounded"
            tooltip_text="Souligner le texte">
            <Underline size="18"/>
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
    </div>
</div>