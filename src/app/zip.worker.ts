addEventListener('message', async () => {
  const [{ zipA }, { zipB }] = await Promise.all([import('./zip-a'), import('./zip-b')]);
  postMessage(`${zipA().length} ${Object.keys(zipB()).length}`);
});
