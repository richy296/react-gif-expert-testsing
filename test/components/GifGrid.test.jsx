import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";


jest.mock('../../src/hooks/useFetchGifs');

describe('Test in <GifGrid />', () => { 
    const category = 'Dbz';
    const message  = 'Cargando...';
    test('should show the loading inital', () => { 
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={category}/>);
        //screen.debug();
        expect(screen.getByText(message)).toBeTruthy();
        expect(screen.getByRole('heading', {level: 3}).innerHTML).toContain(category);
        expect(screen.getByText(message)).toBeTruthy();
        expect(screen.getByRole('heading', {level: 2}).innerHTML).toContain(message);
    });

    test('should show item when images is loaded with the useFetchGifs', () => { 
        const gifs = [{
            id: 'abc',
            title: 'goku',
            url: 'http://localhost/goku.jpg'
        },{
            id: 'string title',
            title: 'vegeta',
            url: 'http://localhost/vegeta.jpg'
        }];
        
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(<GifGrid category={category}/>);
        /* screen.debug(); */
        expect(screen.getAllByRole('img').length).toBe(2)
    });
})