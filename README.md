# Chunk optimizer drops a chunk shared with a web worker

Minimal reproduction for an `@angular/build` issue.

```sh
pnpm install
pnpm exec ng build
sh check-missing-chunks.sh          # reports a chunk imported but not emitted

NG_BUILD_OPTIMIZE_CHUNKS=false pnpm exec ng build
sh check-missing-chunks.sh          # nothing missing
```

The relevant files are `src/app/app.ts`, `src/app/zip.worker.ts`, `src/app/zip-a.ts` and `src/app/zip-b.ts`.
