import { Plugin, PluginKey } from 'prosemirror-state'
import { Extension } from "@tiptap/core"


function nodeEqualsType({ types, node}){
    return (
        (Array.isArray(types) && types.includes(node.type)) ||
        node.types
    )
}

export interface TrailingNodeOptions{
    node: string
    notAfter: string[]
}

export default Extension.create<TrailingNodeOptions>({
    name: 'trailingNode',

    addOptions(){
        return {
            node: 'paragraph',
            notAfter: ['paragraph']
        }
    },

    addProseMirrorPlugins(){
        const plugin = new PluginKey(this.name);
        const disableNodes = Object.entries(this.editor.schema.nodes)
            .map(([, value]) => value)
            .filter((node) => this.options.notAfter.includes(node.name))

        return [
            new Plugin({
                key: plugin,
                appendTransaction:(_, __, state) => {
                    const { doc, tr, schema } = state
                    const shouldInsertNodeAtEnd = plugin.getState(state)
                    const endPosition = doc.content.size
                    const type = schema.nodes[this.options.node]

                    if (!shouldInsertNodeAtEnd) return

                    return tr.insert(endPosition, type.create())
                },
                state: {
                    init: (_, state) => {
                        const lastNode = state.tr.doc.lastChild

                        return !nodeEqualsType({
                            node: lastNode,
                            types:disableNodes
                        })
                    },
                    apply: (tr, value) => {
                        if (!tr.docChanged){
                            return value
                        }

                        const lastNode = tr.doc.lastChild

                        return !nodeEqualsType({
                            node: lastNode,
                            types: disableNodes
                        })
                    }
                }
            })
        ]
    }
})
