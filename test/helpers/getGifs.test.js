import { getGifs } from "../../src/helpers/getGifs"

describe('Test in getGifs()', () => { 
    test('should return gifs arrays', async() => { 
        const gifs = await getGifs('dbz');
        expect(typeof gifs).toBe('object');
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        });
        expect(gifs[0].url.includes('http')).toBeTruthy();

    })
})