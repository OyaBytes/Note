<script lang="ts">
    import {
        Bold,
        Palette,
        Subscript,
        Superscript,
        Underline,
        Strikethrough,
        Italic,
        Code,
        Image,
        Table,
        List,
        ListOrdered,
        Quote,
        Video,
        SeparatorHorizontal,
        Code2,
        AlignLeft,
        AlignCenter,
        AlignRight,
        AlignJustify,
        Indent,
        Plus,
        Menu,
        Heading1,
        Heading2,
        Heading3,
        Heading4,
        Heading5,
    } from "lucide-svelte";
    import type { Editor } from "@tiptap/core";
    import type { SvelteComponent } from "svelte";
    import LinkPopup from "./LinkPopup.svelte";
    import Button from "./Button.svelte";

    export let editor: Editor;

    type Command = {
        name: String;
        action: Function;
        icon: Partial<SvelteComponent>;
        help_text: string;
    };

    let commands: Command[] = [
        {
            name: "Titre 1",
            action: () =>
                editor.chain().focus().toggleHeading({ level: 1 }).run(),
            icon: Heading1,
            help_text: "Titre de niveau 1",
        },
        {
            name: "Titre 2",
            action: () =>
                editor.chain().focus().toggleHeading({ level: 2 }).run(),
            icon: Heading2,
            help_text: "Titre de niveau 2",
        },
        {
            name: "Titre 3",
            action: () =>
                editor.chain().focus().toggleHeading({ level: 3 }).run(),
            icon: Heading3,
            help_text: "Titre de niveau 3",
        },
        {
            name: "Titre 4",
            action: () =>
                editor.chain().focus().toggleHeading({ level: 4 }).run(),
            icon: Heading4,
            help_text: "Titre de niveau 4",
        },
        {
            name: "Titre 5",
            action: () =>
                editor.chain().focus().toggleHeading({ level: 5 }).run(),
            icon: Heading5,
            help_text: "Titre de niveau 5",
        },
        {
            name: "Bloc de code",
            action: () => editor.chain().focus().toggleCode().run(),
            icon: Code,
            help_text: "Insérer un bloc de code",
        },
        {
            name: "Citation",
            action: () => editor.chain().focus().toggleBlockquote().run(),
            icon: Quote,
            help_text: "Insérer une citation",
        },
        {
            name: "Séparateur",
            action: () => editor.chain().focus().setHorizontalRule().run(),
            icon: SeparatorHorizontal,
            help_text: "Insérer un séparateur",
        },
        {
            name: "Lien",
            action: () =>
                editor
                    .chain()
                    .focus()
                    .setLink({ href: "https://google.com" })
                    .run(),
            icon: LinkPopup,
            help_text: "Insérer un lien",
        },
        {
            name: "Image",
            action: () =>
                editor
                    .chain()
                    .focus()
                    .setImage({ src: "https://source.unsplash.com/random" })
                    .run(),
            icon: Image,
            help_text: "Insérer une image",
        },
        {
            name: "Video",
            action: () =>
                editor
                    .chain()
                    .focus()
                    .setVideo({
                        src: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                    })
                    .run(),
            icon: Video,
            help_text: "Insérer une vidéo",
        },
        {
            name: "Table",
            action: () =>
                editor.chain().focus().setTable({ rows: 3, cols: 3 }).run(),
            icon: Table,
            help_text: "Insérer une table",
        },
        {
            name: "Liste simple",
            action: () => editor.chain().focus().toggleBulletList().run(),
            icon: List,
            help_text: "Insérer une liste",
        },
        {
            name: "Liste ordonnée",
            action: () => editor.chain().focus().toggleOrderedList().run(),
            icon: ListOrdered,
            help_text: "Insérer une liste ordonnée",
        },
    ];
</script>


<div
    class="pointer-events-auto w-56 rounded-lg bg-white text-[0.8125rem] leading-5 text-gray-700 shadow-xl shadow-black/5 ring-1 ring-slate-700/10"
>    
    <div class="border-t border-slate-400/20 px-3.5 py-3 overflow-y-auto h-72">
        {#each commands as action}
            <button
                class="flex cursor-pointer items-center rounded-md p-1.5 hover:bg-slate-100 w-full"
                on:click={action.action}
            >
                <svelte:component this={action.icon} class="mr-2.5 h-5 w-5 flex-none stroke-slate-400" />
                <div class="text-sm">{action.name}</div>
            </button>
        {/each}
    </div>
</div>
