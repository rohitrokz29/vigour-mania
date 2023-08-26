import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import { UserState } from "../components/context/userContext";
import { ThemeState } from "../components/context/themeContext";
import Accounts from "../components/pages/Accounts/Accounts";
import { BrowserRouter } from "react-router-dom";

beforeEach(()=>{
    render(
        <UserState>
            <ThemeState>
                <Accounts/>
            </ThemeState>
        </UserState>
    ,{
        wrapper:BrowserRouter
    }
    )
})

describe("Accounts SignIn & SignUp",()=>{
    
    test("render Signin page from Accounts component", () => { 
        expect(screen.getAllByRole("account-forms")).toBeDefined();
     })

})