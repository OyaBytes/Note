<script>
    import { 
        Bold, Palette, Subscript, Superscript, Underline, Strikethrough, Italic, Code,
        Image, Table, List, ListOrdered, Quote, Video, SeparatorHorizontal, Code2,
        AlignLeft, AlignCenter, AlignRight, AlignJustify, Indent, Plus, Menu,
        Heading1, Heading2, Heading3, Heading4, Heading5
    } from "lucide-svelte";
    import Button from "./Button.svelte";
    import FontCombobox from "./FontCombobox.svelte";
    import ColorPicker from "./ColorPicker.svelte";
    import TextSize from "./TextSize.svelte";
    import { getContext } from "svelte";
    import { editor_key } from "../utils";
    import LinkPopup from "./LinkPopup.svelte";

    let editor = getContext(editor_key);
</script>

<div class="flex w-full bg-white items-center justify-center border-b border-gray-100 pt-1 px-1 lg:px-3 shadow z-30">

    {#if $editor}

    <div class="py-1">
        <div class="border-r pr-2 border-gray-300/400 inline-block">
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

        <div class="pr-2 inline-block">
            <div class="space-x-2 pl-2 text-gray-600">
                <Button on:click={() => $editor.chain().focus().toggleBold().run()}
                    class="p-1 text-gray-600 rounded"
                    tooltip_text="Mettre le texte en gras">
                    <Plus size="20"/>
                </Button>
            </div>
        </div>
    </div>
    

    <!-- <div class="border-r px-2 border-gray-300/400">
        <div class="space-x-2 py-1 text-gray-600">
            <Button on:click={() => $editor.chain().focus().setTextAlign("left").run()}
                class="p-2 rounded"
                tooltip_text="Aligner le texte à gauche">
                <AlignLeft size="18"/>
            </Button>
    
            <Button on:click={() => $editor.chain().focus().setTextAlign("center").run()}
                class="p-2 rounded"
                tooltip_text="Aligner le texte au centre">
                <AlignCenter size="18"/>
            </Button>
    
            <Button on:click={() => $editor.chain().focus().setTextAlign("right").run()}
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
    </div> -->
    
    <!-- <div class="border-r px-2 border-gray-300/400">
        <div class="space-x-2 py-1 text-gray-600">
            <LinkPopup on_enter={(value) => $editor.chain().focus().setLink({ href: value }).run()}/>
    
            <Button
                class="p-2 rounded"
                tooltip_text="Insérer une image">
                <Image size="18"/>
            </Button>
    
    
            <Button
                class="p-2 rounded"
                tooltip_text="Insérer une vidéo youtube">
                <Video size="18"/>
            </Button>
    
    
            <Button
                class="p-2 rounded"
                tooltip_text="Insérer une table">
                <Table size="18"/>
            </Button>
    
            <Button on:click={() => $editor.chain().focus().toggleBulletList().run()}
                class="p-2 rounded"
                tooltip_text="Insérer une liste">
                <List size="18"/>
            </Button>
    
            <Button on:click={() => $editor.chain().focus().toggleOrderedList().run()}
                class="p-2 rounded"
                tooltip_text="Insérer une liste ordonnée">
                <ListOrdered size="18"/>
            </Button>
            
            <Button on:click={() => $editor.chain().focus().toggleBlockquote().run()}
                class="p-2 rounded"
                tooltip_text="Insérer une citation">
                <Quote size="18"/>
            </Button>
    
            <Button on:click={() => $editor.chain().focus().setHorizontalRule().run()}
                class="p-2 rounded"
                tooltip_text="Insérer un séparateur">
                <SeparatorHorizontal size="18"/>
            </Button>
    
            <Button
                class="p-2 rounded"
                tooltip_text="Insérer du code">
                <Code2 size="18"/>
            </Button>
        </div>
    </div>

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
    </div> -->
    
    {/if}
</div>