import { twMerge } from 'tailwind-merge'


export function cn(default_cls: string, new_cls:string){
    return twMerge(default_cls, new_cls);
}
