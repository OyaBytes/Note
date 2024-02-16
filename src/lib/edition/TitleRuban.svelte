<script>
    import { Heading1, Heading2, Heading3, Heading4, Heading5 } from "lucide-svelte";
    import Button from "../button/Button.svelte";
</script>

<div class="px-2">
    <div class="space-x-2 py-1 text-gray-600">
        <Button
            class="p-2 rounded"
            tooltip_text="Texte normal">
            Normal
        </Button>
        
        <Button
            class="p-2 rounded"
            tooltip_text="Titre de niveau 1">
            <Heading1 size="18"/>
        </Button>
        
        <Button
            class="p-2 rounded"
            tooltip_text="Titre de niveau 2">
            <Heading2 size="18"/>
        </Button>

        <Button
            class="p-2 rounded"
            tooltip_text="Titre de niveau 3">
            <Heading3 size="18"/>
        </Button>

        <Button
            class="p-2 rounded"
            tooltip_text="Titre de niveau 4">
            <Heading4 size="18"/>
        </Button>

        <Button
            class="p-2 rounded"
            tooltip_text="Titre de niveau 5">
            <Heading5 size="18"/>
        </Button>
    </div>
</div>