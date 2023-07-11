import { beforeEach, describe, expect, test } from "vitest";
import { render, screen, } from "@testing-library/react";
import { UserState } from "../components/context/userContext";
import { ThemeState } from "../components/context/themeContext";
import App from "../App";
describe("App", () => {
    beforeEach(() => {
        render(
            <UserState>
                <ThemeState>
                    <App />
                </ThemeState>
            </UserState>
        )
    })
    test("APP rendering", () => {
        expect(screen.getByRole("fallback")).toBeDefined()
    })
})