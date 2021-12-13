import React from "react";
import {render,fireEvent,waitFor} from "@testing-library/react";
import Home from './index'

describe("Home", () => {
    it("Deve conter um botão Converter", () => {
        const { getByRole} = render(<Home />);

        const buttonConverter =  fireEvent.change(getByRole("button", {
            name: /Converter/i,
          }));

       waitFor(() => { expect(buttonConverter).toBeInTheDocument();})
    })

    it("verificar valor do input valor", () => {
        const { getByPlaceholderText} = render(<Home/>);
        fireEvent.change(getByPlaceholderText("Valor"), {
          target: { value: "1" },
        });
       
         expect(getByPlaceholderText("Valor")).toHaveDisplayValue('1');
    });

});
