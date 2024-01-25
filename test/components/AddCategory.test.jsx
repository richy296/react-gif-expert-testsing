import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components";

describe('Test in <AddCategory />', () => { 
    const newCategory = 'Dbz';

    test('should change the value of the box', () => {
        render(<AddCategory onNewCategory={() => {}}/>);
        const input = screen.getByRole('textbox');

        fireEvent.input(input, { target: { value: newCategory} });

        expect(input.value).toBe(newCategory)
        //screen.debug();
    });  

    test('should call onNewCategory if the input have a value', () => { 

        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory}/>);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: newCategory} });
        fireEvent.submit(form);

        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(newCategory);
    })

    test('should not call onNewCategory if the input have a value', () => {
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory}/>);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: ''} });
        fireEvent.submit(form);

        expect(onNewCategory).not.toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(0);

    })
})