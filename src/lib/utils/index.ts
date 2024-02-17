import { twMerge } from 'tailwind-merge';
import { writable, readonly } from 'svelte/store';


export function cn(default_cls: string, new_cls:string){
    return twMerge(default_cls, new_cls);
}


export let editor_key = "note_tiptap_key";
