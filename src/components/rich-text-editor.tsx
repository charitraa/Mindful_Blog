import React from 'react';
import { Button, Card, CardBody } from '@heroui/react';
import { Icon } from '@iconify/react';

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  minHeight?: string;
}

export const RichTextEditor: React.FC<RichTextEditorProps> = ({
  value,
  onChange,
  placeholder = 'Start writing your blog post...',
  minHeight = '400px',
}) => {
  const editorRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (editorRef.current) {
      editorRef.current.innerHTML = value;
    }
  }, []);

  const handleContentChange = () => {
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
    }
  };

  const execCommand = (command: string, value: string = '') => {
    document.execCommand(command, false, value);
    handleContentChange();
    if (editorRef.current) {
      editorRef.current.focus();
    }
  };

  const formatBlock = (block: string) => {
    execCommand('formatBlock', block);
  };

  const isFormatActive = (format: string) => {
    return document.queryCommandState(format);
  };

  return (
    <Card className="w-full" disableRipple>
      <CardBody className="p-0">
        <div className="border-b border-divider p-2 flex flex-wrap gap-1">
          <div className="flex items-center mr-2">
            <select
              className="bg-content1 text-foreground border border-divider rounded-medium px-2 py-1 text-sm"
              onChange={(e) => formatBlock(e.target.value)}
              defaultValue=""
            >
              <option value="" disabled>Format</option>
              <option value="<p>">Paragraph</option>
              <option value="<h1>">Heading 1</option>
              <option value="<h2>">Heading 2</option>
              <option value="<h3>">Heading 3</option>
              <option value="<blockquote>">Quote</option>
            </select>
          </div>

          <Button
            isIconOnly
            size="sm"
            variant={isFormatActive('bold') ? 'solid' : 'flat'}
            onPress={() => execCommand('bold')}
            aria-label="Bold"
          >
            <Icon icon="lucide:bold" width={16} height={16} />
          </Button>

          <Button
            isIconOnly
            size="sm"
            variant={isFormatActive('italic') ? 'solid' : 'flat'}
            onPress={() => execCommand('italic')}
            aria-label="Italic"
          >
            <Icon icon="lucide:italic" width={16} height={16} />
          </Button>

          <Button
            isIconOnly
            size="sm"
            variant={isFormatActive('underline') ? 'solid' : 'flat'}
            onPress={() => execCommand('underline')}
            aria-label="Underline"
          >
            <Icon icon="lucide:underline" width={16} height={16} />
          </Button>

          <div className="h-6 w-px bg-divider mx-1"></div>

          <Button
            isIconOnly
            size="sm"
            variant="flat"
            onPress={() => execCommand('insertOrderedList')}
            aria-label="Ordered List"
          >
            <Icon icon="lucide:list-ordered" width={16} height={16} />
          </Button>

          <Button
            isIconOnly
            size="sm"
            variant="flat"
            onPress={() => execCommand('insertUnorderedList')}
            aria-label="Unordered List"
          >
            <Icon icon="lucide:list" width={16} height={16} />
          </Button>

          <div className="h-6 w-px bg-divider mx-1"></div>

          <Button
            isIconOnly
            size="sm"
            variant="flat"
            onPress={() => execCommand('createLink', prompt('Enter link URL') || '')}
            aria-label="Link"
          >
            <Icon icon="lucide:link" width={16} height={16} />
          </Button>

          <Button
            isIconOnly
            size="sm"
            variant="flat"
            onPress={() => execCommand('insertImage', prompt('Enter image URL') || '')}
            aria-label="Image"
          >
            <Icon icon="lucide:image" width={16} height={16} />
          </Button>
        </div>

        <div
          ref={editorRef}
          contentEditable
          className="prose p-4 focus:outline-none"
          style={{ minHeight }}
          onInput={handleContentChange}
          onBlur={handleContentChange}
          placeholder={placeholder}
          dangerouslySetInnerHTML={{ __html: value }}
        />
      </CardBody>
    </Card>
  );
};