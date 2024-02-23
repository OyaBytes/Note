import { twMerge } from 'tailwind-merge';
import { Readable } from 'svelte/store';
import { useMediaQuery } from 'svelte-breakpoints';

  


export function cn(default_cls: string, new_cls:string){
    return twMerge(default_cls, new_cls);
}

export const isMobile: Readable<boolean> = useMediaQuery('(max-width: 768px)');

export let editor_key = "note_tiptap_key";
