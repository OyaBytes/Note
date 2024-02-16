<script>
    import { Image, Table, Link, List, ListOrdered, Quote, SeparatorHorizontal, Code2 } from "lucide-svelte";
    import Button from "../button/Button.svelte";
</script>

<div class="border-r px-2 border-gray-300/400">
    <div class="space-x-2 py-1 text-gray-600">
        <Button
            class="p-2 rounded"
            tooltip_text="Insérer un lien">
            <Link size="18"/>
        </Button>

        <Button
            class="p-2 rounded"
            tooltip_text="Insérer une image">
            <Image size="18"/>
        </Button>

        <Button
            class="p-2 rounded"
            tooltip_text="Insérer une table">
            <Table size="18"/>
        </Button>

        <Button
            class="p-2 rounded"
            tooltip_text="Insérer une liste">
            <List size="18"/>
        </Button>

        <Button
            class="p-2 rounded"
            tooltip_text="Insérer une liste ordonnée">
            <ListOrdered size="18"/>
        </Button>
        
        <Button
            class="p-2 rounded"
            tooltip_text="Insérer une citation">
            <Quote size="18"/>
        </Button>

        <Button
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