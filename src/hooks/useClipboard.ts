import { useState, useCallback } from 'react';

export function useClipboard(timeout = 2000): { copied: boolean; copy: (text: string) => void } {
  const [copied, setCopied] = useState(false);

  const copy = useCallback((text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), timeout);
    });
  }, [timeout]);

  return { copied, copy };
}
