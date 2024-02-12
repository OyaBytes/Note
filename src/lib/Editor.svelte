<script lang="ts">
    import { onMount } from "svelte";
    import {schema} from "prosemirror-schema-basic";
    import {undo, redo, history} from "prosemirror-history"
    import {baseKeymap} from "prosemirror-commands"
    import {keymap} from "prosemirror-keymap"
    import {EditorState} from "prosemirror-state";
    import {EditorView} from "prosemirror-view";

    let state = EditorState.create({
        schema,
        plugins:[
            history(),
            keymap({"Mod-z": undo, "Mod-y": redo}),
            keymap(baseKeymap),
        ]
    });

    let a = "my name"

    let editor = null;

    onMount(() => {
        let view = new EditorView(editor, {
            state,
        })
    });
</script>

<div bind:this={editor}>

</div>
