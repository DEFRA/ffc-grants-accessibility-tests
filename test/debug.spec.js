import { expect } from '@wdio/globals'

describe('Debug', () => {
  it('should validate assumptions', async () => {
    const response = await fetch('https://sareportingpoc.blob.core.windows.net/wcag/wave.min.js')
    expect(response.status).toEqual(200)
  });
});
