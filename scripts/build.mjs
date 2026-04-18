import { cp, mkdir } from 'node:fs/promises';

await mkdir('dist', { recursive: true });
await cp('src', 'dist', {
  recursive: true,
  filter: (path) => !path.endsWith('.ts') || path.endsWith('.d.ts'),
});
