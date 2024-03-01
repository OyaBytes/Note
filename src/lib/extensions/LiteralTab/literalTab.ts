import { Extension} from "@tiptap/core";

export const LiteralTab = Extension.create({
    name: "literalTab",

    addKeyboardShortcuts() {
        return {
            Tab: () => this.editor.commands.insertContent('\t'),
        };
    },
});

export default LiteralTab;
