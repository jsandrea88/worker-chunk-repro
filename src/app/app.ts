import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="main()">fflate in main</button>
    <button (click)="worker()">fflate in worker</button>
    <p>{{ result() }}</p>
  `,
})
export class App {
  protected readonly result = signal('');

  async main(): Promise<void> {
    const [{ zipA }, { zipB }, { c }] = await Promise.all([
      import('./zip-a'),
      import('./zip-b'),
      import('./lazy-c'),
    ]);
    this.result.set(`main ok: ${zipA().length} ${Object.keys(zipB()).length} ${c()}`);
  }

  worker(): void {
    const w = new Worker(new URL('./zip.worker', import.meta.url), { type: 'module' });
    w.onmessage = ({ data }) => this.result.set(`worker ok: ${data}`);
    w.onerror = (e) => this.result.set(`worker error: ${e.message}`);
    w.postMessage(null);
  }
}
