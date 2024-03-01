import Placeholder from '@tiptap/extension-placeholder'

export let NotePlaceHolder = Placeholder.configure({
    placeholder: ({node}) => {
        if (node.type.name === 'heading') {
            return "C'est le titre ?"
        }
      
        return "Ajoutez ici votre texte..."
    }
});
