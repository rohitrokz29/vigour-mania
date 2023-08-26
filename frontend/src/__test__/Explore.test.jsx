import { beforeEach, describe, expect ,test} from "vitest";
import { render, screen } from '@testing-library/react';
import { UserState } from "../components/context/userContext";
import { ThemeState } from "../components/context/themeContext";
import Explore from "../components/pages/Explore/Explore";
import { BrowserRouter } from "react-router-dom";

beforeEach(()=>{
    render(
        <UserState>
            <ThemeState>
                <Explore/>
            </ThemeState>
        </UserState>,
        {
            wrapper:BrowserRouter
        }
    )
})

describe("Explore",()=>{
    test("Explore Page Rendered",()=>{
        expect(screen.getByRole("spotlight")).toBeDefined();
        expect(screen.getAllByTestId("spots")).toHaveLength(3);

        expect(screen.getByRole("get-evolved")).toBeDefined();
        expect(screen.getAllByTestId("evolve")).toHaveLength(7);
    })
    
})