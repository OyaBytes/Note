<script>
    import { AlignLeft, AlignCenter, AlignRight, AlignJustify, Indent } from "lucide-svelte";
    import Button from "../button/Button.svelte";
</script>

<div class="border-r px-2 border-gray-300/400">
    <div class="space-x-2 py-1 text-gray-600">
        <Button
            class="p-2 rounded"
            tooltip_text="Aligner le texte à gauche">
            <AlignLeft size="18"/>
        </Button>

        <Button
            class="p-2 rounded"
            tooltip_text="Aligner le texte au centre">
            <AlignCenter size="18"/>
        </Button>

        <Button
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