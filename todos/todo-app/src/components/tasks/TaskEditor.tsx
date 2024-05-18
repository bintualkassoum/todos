// src/components/Editor.tsx

import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';

const Editor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: 'Start typing your task...',
      }),
    ],
    content: '',
  });

  return (
    <div className="editor">
      <EditorContent editor={editor} />
    </div>
  );
};

export default Editor;
