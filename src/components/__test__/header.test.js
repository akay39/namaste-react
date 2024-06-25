import { fireEvent, render} from "@testing-library/react";
import { screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";


// test("should render haeder component with a login button", ()=>{

//     render(
//         <BrowserRouter>
//         <Provider store={appStore}>
//             <Header/>
//         </Provider>
//         </BrowserRouter>
//     );

// const loginButton = screen.getByRole ("button", {name: "Login"});
// const loginButton = screen.getByText(/Login/);
// expect(loginButton).toBeIntheDocument();

// })

test("should check login button change to logout in haeder component with a login button", ()=>{


const loginButton = screen.getByRole("button",{name: "Login"});
fireEvent.click(loginButton);

const logOutButton = screen.getByRole("button", {name: "Logout"});

expect(logOutButton).toBeIntheDocument();


})