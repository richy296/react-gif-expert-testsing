import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components";

describe('Test in <GifItem />', () => { 
    const title = 'Goku';
    const url = 'https://gif.icon.com/goku.jpg';
    test('should make match with the snapshot', () => {
        const  {container} = render(<GifItem title={title} url={url}/>);
        expect(container).toMatchSnapshot();
    })    

    test('should show the title "Goku"', () => {
        render(<GifItem title={title} url={url}/>)
        expect(screen.getByText(title)).toBeTruthy();
    });

    test('should show the image with the url and ult created', () => {
        render(<GifItem title={title} url={url}/>)
        //screen.debug();
        //expect(screen.getByRole('img').src).toBe(url);
        //expect(screen.getByRole('img').alt).toBe(title);

        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

})