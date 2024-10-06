import { vi, Mock,describe, it, expect} from "vitest";
import { render, screen, waitFor, waitForElementToBeRemoved} from "@testing-library/react";
import '@testing-library/jest-dom'; // npm i -D @types/testing-library__jest-dom
import App from "../App";
import Login from "@pages/Login";
import { BrowserRouter, Link, createMemoryRouter } from "react-router-dom";
import {  User, AuthContextType } from "features/hooks/AuthProvider";
import React from 'react'
import { AppRouter, MemoryApp, MemoryApp2 } from "router/router";
import userEvent from '@testing-library/user-event';



/* 
vi.mock("@components/layout/NavBar", ()=> {
    return {
        default: () => (
            <nav>
                <ul>
                <li className="links"><Link to="/test"></Link> Test</li>
            </ul>
            </nav>
        )
    }
}) */


export interface MockType extends AuthContextType  {
    loading: boolean,
    authentication: boolean,
    user: User | null,
    setLoading: Mock
    setAuth: Mock,
    setUser: Mock,
    };

    const Users : AuthContextType ={
        loading: true,
        authentication: true,
        user: {firstName: "Krosi", lastName:"Krey"},
        setLoading: vi.fn(),
        setAuth: vi.fn(),
        setUser: vi.fn(),
    };

      const Users2: AuthContextType = {
        loading: true,
        authentication: false,
        user: { firstName: "Krosi", lastName: "Krey" },
        setLoading: vi.fn(),
        setAuth: vi.fn() as React.Dispatch<React.SetStateAction<boolean>>,
        setUser: vi.fn() as React. Dispatch<React.SetStateAction<User | null>>,
    };

const publicUsers: MockType= {
    loading: false, // problem i set this state to be true so it stuck to true loading state
    authentication: false,
    user: {firstName: "", lastName: ""},
    setLoading:  vi.fn((e: boolean)=> {publicUsers.loading = e; }),
    setAuth: vi.fn(),
    setUser: (vi.fn()),
  };
  
  





  describe('Main App renders the routes', () => {
        it('It should render the public navbar for public users', () => {
            // render(<BrowserRouter><AuthContext.Provider value={publicUsers}><App/></AuthContext.Provider></BrowserRouter>) 
            render(<AppRouter {...publicUsers}/>)

            const NavBar = screen.getByRole('navigation');
            const Links = screen.getAllByRole('listitem')
            expect(NavBar).toBeInTheDocument();
            expect(Links.length).toEqual(5)

                                
            })
            
            //'should not show profile page'
        it('Public users should not see profile page', async ()=> {

    
           // render(<AppRouter {...publicUsers}/>)
           const {rerender} = render(<MemoryApp2 context={publicUsers} />)
           
         
           
            
            const expectedLinks = ['Stories', 'Genre', 'Home', 'Sign Up', 'Login'];
            const listItems = screen.getAllByRole('listitem'); // Get all list items
          
                expectedLinks.forEach((linkText) => {
                // Check if listItems is an array otherwise convert the data to array
                const linkItem = Array.from(listItems).find((item) => {
                return item.textContent ?  item.textContent.trim() === linkText : '';
                });

                    if (linkItem) {
                    expect(linkItem).toBeInTheDocument();
                    expect(linkItem).toMatchSnapshot();
                    } else {
                        console.warn(`Link not found for: ${linkText}`); // Log a warning if not found
                    }
                })
                const heading = screen.getByRole('heading', { level:1, name: /short stories/i }); // or getByText if it's not a role-based heading
                expect(heading).toBeInTheDocument();
                
             /*    const heading = screen.queryByRole('heading', { level: 1 });
                expect(heading).not.toBeInTheDocument() */
                screen.debug();
               
         })

         
        

       
        it('Should redirect user to login form ', async ()=> {
            // check if there is  a user logged in if it navigate to login ro
            //it should show homepage
            // or it should not show the loginpage
                 const user = userEvent.setup()
             /*     const routes = [
                     { path: '/', element: <App/>},
                     {path: '/login', element: <Login/>}
                    
                ]
                 const router = createMemoryRouter(routes) */

                render(<MemoryApp2 context={publicUsers} />) // both works fine problem is when I set authentication to true or false
                //render(<AppRouter {...publicUsers}/>)
               // expect(publicUsers.authentication).toBe(true); 
                const NavBar = screen.getByRole('navigation');
                expect(NavBar).toHaveClass('nav-bar');
                const loginLink = screen.getByRole('link', {name: 'Login'})
                expect(loginLink).toBeInTheDocument()
                 screen.debug();
                await user.click(loginLink);
                expect(screen.getByRole('button', {name: /Login/i})).toBeInTheDocument()
                

        }) 
    

}) 
 
// This wont work unless I comment out these test above^




/*    
  
        
const NavBar = screen.getByRole('navigation');
        const Links = screen.getAllByRole('listitem')
        Links.forEach((link)=> {
            const liText = link.textContent;
            if(liText && liText.trim().length > 0) {
        
                const checkLi = screen.getByText(liText);
                expect(checkLi).toBeInTheDocument();
                expect(checkLi).toMatchSnapshot();
            }
            else {
                expect(link).toBeEmptyDOMElement();
            }
    
        }) */