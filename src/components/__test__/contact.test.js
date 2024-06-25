import { render, screen  } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us page component", ()=>{

    
test("should load heading inside contact us component", () => {
    render(<Contact />);
  
    const heading1 = screen.getByRole("heading");
  
    //assertion
    expect(heading1).toBeInTheDocument();
  });
  //can use it as well as test . one and the same thing.
  it("should load button inside contact component", () => {
      //rendering
    render(<Contact />);
    //querying
  
    const button = screen.getByText("Submit");
  
    //assertion
    expect(button).toBeInTheDocument();
  });
  
  test("should load input name contact component", () => {
      render(<Contact />);
    
      const inputName = screen.getByPlaceholderText("name");
    
      //assertion
      expect(inputName).toBeInTheDocument();
    });
  
    test("should load all haedingsin  contact us component", () => {
      render(<Contact />);
   const inputBox = screen.getAllByRole("textbox");
   expect(inputBox.length).toBe(2);
    });

})



