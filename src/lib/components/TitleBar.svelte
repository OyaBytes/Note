<script>
    import { Wifi } from "lucide-svelte";
    import {Undo, Redo} from 'lucide-svelte';
    import Button from "./Button.svelte";
    import { getContext } from "svelte";
    import { editor_key } from "../utils";

    let editor = getContext(editor_key);

</script>


<div class="flex w-full h-8 justify-between py-1 pl-2 text-gray-900">
    <div class="flex items-center">
        <h3 class="">Document sans titre</h3>
        <div class="ml-3 mt-1">
            <Button on:click={() => $editor.chain().focus().undo().run()}
                class="p-2 rounded"
                tooltip_text="Annuler les modifications">
                <Undo size="18"/>
            </Button>
    
            <Button on:click={() => $editor.chain().focus().redo().run()}
                class="p-2 rounded ml-2"
                tooltip_text="Refaire les modifications">
                <Redo size="18"/>
            </Button>
        </div>
    </div>
    
    <Wifi class="text-gray-600"/>
</div>