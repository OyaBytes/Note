import type {Editor, EditorOptions} from '@tiptap/core';
import type { SvelteComponent } from 'svelte';

export interface TiptapNodeViewContext {
    onDragStart: (event: DragEvent) => void;
}


export interface MenuItem{
    title: string
    help_text: string
    icon: SvelteComponent
    action: (editor: Editor) => void
}

export interface FooterItem extends SvelteComponent{}

export interface NoteOptions extends EditorOptions{
    // Bubble Menu
    hasBubbleMenu?:boolean
    BubbleMenu:MenuItem[]

    // Floating Menu
    hasFloatingMenu?:boolean
    FloatingMenu: MenuItem[]

    // Suggestion Menu
    hasSuggestionMenu?:boolean
    suggestionMenu?: MenuItem[]

    // ExtraMenu
    hasExtraMenu?:boolean
    extraMenu:MenuItem[]

    // Footer
    hasFooter:boolean
    extraFooter:FooterItem[]
}
