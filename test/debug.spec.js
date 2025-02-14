import { browser, expect } from '@wdio/globals'
import { setGlobalDispatcher, ProxyAgent } from "undici";

describe('Debug', () => {
  it('should validate assumptions', async () => {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    const dispatcher = new ProxyAgent({uri: "http://localhost:3128" });
    setGlobalDispatcher(dispatcher);

    const response = await fetch('https://sareportingpoc.blob.core.windows.net/wcag/wave.min.js')
    expect(response.status).toEqual(200)
  });
});
