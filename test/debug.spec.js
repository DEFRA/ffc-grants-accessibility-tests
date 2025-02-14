import { expect } from '@wdio/globals'
import { setGlobalDispatcher, ProxyAgent } from "undici";

describe('Debug', () => {
  it('should validate assumptions', async () => {
    if (process.env.HTTP_PROXY) {
      process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
      setGlobalDispatcher(new ProxyAgent({ uri: process.env.HTTP_PROXY }));
    }
    const response = await fetch('https://sareportingpoc.blob.core.windows.net/wcag/wave.min.js')
    expect(response.status).toEqual(200)
  });
});
