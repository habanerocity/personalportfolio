import React from 'react';

/**
 * Parse simple markdown syntax in text and return JSX
 * Supports: __text__ for bold, *text* for italic
 */
export function MarkdownContent({ text, className = '' }) {
  if (!text) return null;

  // Split by markdown patterns while keeping the delimiters
  const parts = text.split(/(\[(?:[^\]]+)\]\((?:https?:\/\/[^)]+)\)|__[^_]+__|[*][^*]+[*])/);

  return (
    <p className={className} style={{ whiteSpace: 'pre-line' }}>
      {parts.map((part, i) => {
        if (!part) return null;
        
        // Handle links: [text](url)
        const linkMatch = part.match(/^\[([^\]]+)\]\((https?:\/\/[^)]+)\)$/);
        if (linkMatch) {
          return <a key={i} href={linkMatch[2]} target="_blank" rel="noopener noreferrer">{linkMatch[1]}</a>;
        }

        // Handle bold: __text__
        if (part.startsWith('__') && part.endsWith('__')) {
          return <strong key={i} className="fs-2 fw-semibold mb-0 d-block">{part.slice(2, -2)}</strong>;
        }
        
        // Handle italic: *text*
        if (part.startsWith('*') && part.endsWith('*')) {
          return <em key={i}>{part.slice(1, -1)}</em>;
        }
        
        // Return plain text
        return part;
      })}
    </p>
  );
}

export default MarkdownContent;
