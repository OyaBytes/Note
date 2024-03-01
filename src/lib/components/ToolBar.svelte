<script>
    import { 
        Bold, Subscript, Superscript, Underline,
        Strikethrough, Italic, Code, Plus, Menu,
    } from "lucide-svelte";
    import Button from "./Button.svelte";
    import FontCombobox from "./FontCombobox.svelte";
    import ColorPicker from "./ColorPicker.svelte";
    import TextSize from "./TextSize.svelte";
    import { getContext } from "svelte";
    import { editor_key, isMobile } from "../utils";

    export let has_extra_menu = true;

    let editor = getContext(editor_key);
</script>

<div class="flex w-full bg-white items-center pt-1 px-1 lg:px-3 shadow z-30">

    {#if $editor}

    <div class="py-1">
        <div class="pr-2 inline-block">
            <div class="space-x-2 pl-2 text-gray-600">
                <Button on:click={() => $editor.chain().focus().toggleBold().run()}
                    class="p-1 text-gray-600 rounded"
                    tooltip_text="Mettre le texte en gras">
                    <Menu size="20"/>
                </Button>
            </div>
        </div>
        <h1 class="text-2xl text-[#37639B] font-semibold inline-block mr-5">Note</h1>

        {#if !$isMobile}
            <div class="border-x pr-2 border-gray-300/400 inline-block">
                <div class="space-x-2 pl-2 text-gray-600">
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
        
                    <Button on:click={() => $editor.chain().focus().setCode().run()}
                        class="p-2 text-gray-600 rounded"
                        tooltip_text="Marquer le texte comme étant du code">
                        <Code size="18"/>
                    </Button>
        
                    <ColorPicker on_select={(value) => $editor.chain().focus().setColor(value).run()}/>
            
                    <FontCombobox on_select={(value) => $editor.chain().focus().setFontFamily(value).run()}/>
        
                    <TextSize on_select={(value) => $editor.chain().focus().setFontSize(value).run()}/>
            
                    <Button on:click={() => $editor.chain().focus().toggleSubscript().run()}
                        class="p-2 rounded"
                        tooltip_text="Afficher le texte en indice">
                        <Subscript size="18"/>
                    </Button>
            
                    <Button on:click={() => $editor.chain().focus().toggleSuperscript().run()}
                        class="p-2 rounded"
                        tooltip_text="Refaire les modifications">
                        <Superscript size="18"/>
                    </Button>
                </div>
            </div>

            {#if has_extra_menu}
            <div class="pr-2 inline-block">
                <div class="space-x-2 pl-2 text-gray-600">
                    <Button on:click={() => $editor.chain().focus().toggleBold().run()}
                        class="p-1 text-gray-600 rounded"
                        tooltip_text="Mettre le texte en gras">
                        <Plus size="20"/>
                    </Button>
                </div>
            </div>
            {/if}
            
        {/if}
    </div>
    {/if}
</div>