import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('Test in useFetchGifs', () => {
    const category = 'Dbz';
    test('should to return the inital state', () => {
        const {result} = renderHook(() => useFetchGifs(category));
        const {images, isLoading} = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    })

    test('should to return a image array and isLoading in false', async() => {
        const {result} = renderHook(() => useFetchGifs(category));

        /* Acá espero que la cantidad de imagenes sea mayor a 0 */
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        );

        const {images, isLoading} = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    })
})