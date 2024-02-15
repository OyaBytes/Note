<script>
    import { Bold, AArrowDown, AArrowUp, Underline, Italic } from "lucide-svelte";
    import FontCombobox from "./FontCombobox.svelte";
</script>

<div class="border-r pr-2 border-gray-300/400">
    <div class="space-x-2 py-1 text-gray-600">
        <button class="p-1">
            <Bold size="18"/>
        </button>
        <button class="p-1">
            <Italic size="18"/>
        </button>
        <button class="p-1">
            <Underline size="18"/>
        </button>
        <button class="p-1">
            <AArrowDown size="18"/>
        </button>

        <button class="p-1">
            <AArrowUp size="18"/>
        </button>

        <FontCombobox/>
    </div>
</div>