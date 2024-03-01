import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import TextStyle from '@tiptap/extension-text-style';
import FontFamily from '@tiptap/extension-font-family';
import { Color } from '@tiptap/extension-color';
import CharacterCount from '@tiptap/extension-character-count';
import Subscript from '@tiptap/extension-subscript';
import Superscript from '@tiptap/extension-superscript';
import Typography from '@tiptap/extension-typography';
import Table from '@tiptap/extension-table';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import TableRow from '@tiptap/extension-table-row';
import Link from '@tiptap/extension-link';
import type { NoteOptions } from './types';


export const NoteBasicSetup:Partial<NoteOptions> = {
    extensions: [
        StarterKit,
        Underline,
        TextAlign,
        TextStyle,
        FontFamily,
        Color,
        CharacterCount,
        Subscript,
        Superscript,
        Typography,
        Table,
        TableCell,
        TableHeader,
        TableRow,
        Link
    ],
    hasFooter: true,
    hasExtraMenu:false,
    extraFooter: [],
    extraMenu:[],
    hasFloatingMenu: true
}
