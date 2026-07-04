import Link from 'next/link';

export function renderBlogContent(content: string) {
  const lines = content.trim().split('\n');
  const html: string[] = [];

  for (const line of lines) {
    if (line.startsWith('## ')) {
      html.push(`<h2 class="text-2xl font-bold text-text-main mt-10 mb-4">${line.slice(3)}</h2>`);
    } else if (line.startsWith('### ')) {
      html.push(`<h3 class="text-xl font-semibold text-text-main mt-8 mb-3">${line.slice(4)}</h3>`);
    } else if (line.startsWith('|')) {
      // skip table rows in simple renderer — handled as paragraph
      html.push(`<p class="text-text-muted text-sm mb-2">${line}</p>`);
    } else if (line.startsWith('- ')) {
      html.push(`<li class="text-text-muted ml-4 mb-2 list-disc">${formatInline(line.slice(2))}</li>`);
    } else if (line.match(/^\d+\.\s/)) {
      html.push(`<li class="text-text-muted ml-4 mb-2 list-decimal">${formatInline(line.replace(/^\d+\.\s/, ''))}</li>`);
    } else if (line.trim() === '') {
      continue;
    } else {
      html.push(`<p class="text-text-muted leading-[1.7] mb-4">${formatInline(line)}</p>`);
    }
  }

  return html.join('');
}

function formatInline(text: string) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-text-main">$1</strong>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-primary font-semibold hover:text-accent underline">$1</a>');
}
