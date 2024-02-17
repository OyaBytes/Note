<script>
    import InsertRuban from "./InsertRuban.svelte";
    import EditionRuban from "./EditionRuban.svelte";
    import AlignRuban from "./AlignRuban.svelte";
    import TitleRuban from "./TitleRuban.svelte";
    import { getContext } from "svelte";
    import { editor_key } from "../utils";

    let editor = getContext(editor_key);
</script>

<div class="flex w-full bg-[#EDF2FA] items-center pt-1 px-3 shadow-sm rounded-full">
    {#if $editor}
        <EditionRuban/>
        <AlignRuban/>
        <InsertRuban/>
        <TitleRuban/>
    {/if}
</div>