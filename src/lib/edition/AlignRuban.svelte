<script>
    import { AlignLeft, AlignCenter, AlignRight, AlignJustify, Indent } from "lucide-svelte";
</script>

<div class="border-r px-2 border-gray-300/400">
    <div class="space-x-2 py-1 text-gray-600">
        <button class="p-1">
            <AlignLeft size="18"/>
        </button>
        <button class="p-1">
            <AlignCenter size="18"/>
        </button>
        <button class="p-1">
            <AlignRight size="18"/>
        </button>
        <button class="p-1">
            <AlignJustify size="18"/>
        </button>
        <button class="p-1">
            <Indent size="18"/>
        </button>
    </div>
</div>