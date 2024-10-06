import { vi, Mock,describe, it, expect} from "vitest";
import { render, screen, waitFor, fireEvent} from "@testing-library/react";
import '@testing-library/jest-dom'; // npm i -D @types/testing-library__jest-dom
import App from "../App";
import { BrowserRouter, Link } from "react-router-dom";
import { AuthContext, User, AuthContextType } from "features/hooks/AuthProvider";
import React from 'react'
import { Main } from "next/document";
import { AppRouter } from "router/router";
import userEvent from '@testing-library/user-event';
import { act } from "react";
import { cleanup } from "@testing-library/react";
import { L } from "vitest/dist/chunks/reporters.WnPwkmgA.js";
import { MockType } from "./App.test";
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

    


let Users3: MockType = {
    loading: false,
    authentication: true,
    user: { firstName: "Krosi", lastName: "Krey" },
    setLoading: vi.fn(),
    setAuth:  vi.fn((e: boolean) => { Users3.authentication = e; }),
    setUser: vi.fn(),
};

beforeEach(()=> {
    Users3.authentication = true;
})


    describe('Authenticated user', ()=> {

        it("User should be able to logout", async ()=> {
               
                const user = userEvent.setup()
                const {rerender } = render(<AppRouter {...Users3}/>)
                screen.debug();
             
                  
                const MainNav = await screen.findByRole('navigation');
                expect(MainNav).toBeInTheDocument();
                expect(Users3.authentication).toBe(true); 
            
                const Logout = screen.getByRole('button', { name: 'Logout' })
                expect(Logout).toBeInTheDocument()
         
                await user.click(Logout)
                expect(Users3.authentication).toBe(false); 
                rerender(<AppRouter {...Users3}/>)
                
    
                expect(Users3.authentication).not.toBe(true); 
                const loginBtn = await screen.findByRole('link', { name: 'Login'})
                expect(loginBtn).toBeInTheDocument();
                // explicitly define this because on the next test the auth is set to false 
                // so we need to clear each state or reset the state for every test case
               // Users3.authentication = true;
            
                   
        })
    
        it('If a user has logged in it should render the main nav', async ()=> {
            // check if there is  a user logged in if it navigate to login ro
            //it should show homepage
                // or it should not show the loginpage
            render(<AppRouter {...Users3}/>)
            expect(Users3.authentication).toBe(true); 
            const MainNav = await screen.findByRole('navigation');
            
            screen.debug();
            const listItems = screen.getAllByRole('listitem');
            expect(MainNav).toHaveClass('main-nav');
            expect(listItems.length).toBe(4)
          
            const loginLink = screen.queryByRole('link', { name: 'Login' });
    
            expect(loginLink).not.toBeInTheDocument();
      
        
    
        })
       
    })

/*     describe('Authenticated user', ()=> {

        it("User should be able to logout", async ()=> {
               
                const user = userEvent.setup()
                const {rerender } = render(<AppRouter {...Users3}/>)
                screen.debug();
             
                  
                const MainNav = await screen.findByRole('navigation');
                expect(MainNav).toBeInTheDocument();
                expect(Users3.authentication).toBe(true); 
            
                const Logout = screen.getByRole('button', { name: 'Logout' })
                expect(Logout).toBeInTheDocument()
         
                await user.click(Logout)
                expect(Users3.authentication).toBe(false); 
                rerender(<AppRouter {...Users3}/>)
                
                screen.debug();
                expect(Users3.authentication).not.toBe(true); 
                const loginBtn = await screen.findByRole('link', { name: 'Login'})
                expect(loginBtn).toBeInTheDocument();
            
                   
        })
    
   
})
 */