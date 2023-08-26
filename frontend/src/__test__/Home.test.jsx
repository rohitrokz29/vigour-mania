import * as React from 'react';
import { beforeEach, describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from '../components/pages/Home/Home';
import { UserState } from '../components/context/userContext';
import { ThemeState } from '../components/context/themeContext';
import { BrowserRouter } from 'react-router-dom';

beforeEach(() => {
    render(
        <UserState>
            <ThemeState>
                <Home />
            </ThemeState>
        </UserState>
        , {
            wrapper: BrowserRouter
        }
    )
})
describe("Home ", () => {

    test("Home Rendered", () => {
        expect(screen.getByText("Join Us")).toBeDefined()
        expect(screen.getByText("Features")).toBeDefined()
        expect(screen.getByText("Contacts")).toBeDefined()
        expect(screen.getAllByRole("textbox")).toHaveLength(4)
        expect(screen.getAllByPlaceholderText("Password")).toHaveLength(1)
        expect(screen.getAllByRole("button")).toHaveLength(2)
    })  

    test("Sign Up and Signin test",()=>{
        //Join us button rendered
        expect(screen.getAllByRole("joinus-button")).toBeDefined().toHaveLength(1);
        /*
        TODO:
        on click join us 
        signin form
        *///lower signin form present
        expect(screen.getAllByRole("home-signin-form")).toBeDefined().toHaveLength(1);
    })

})