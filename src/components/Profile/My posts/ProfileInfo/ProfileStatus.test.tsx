import React from "react";
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus", () => {
    test("Status from props should be in the state ", () => {
        const component = create(<ProfileStatus status="Alalalol" updateStatusThunk={() => {
        }}/>);
        const instance = component.getInstance();
        expect(instance?.state.status).toBe("Alalalol");
    });
    test("After creating span be correct", () => {
        const component = create(<ProfileStatus status="Alalalol" updateStatusThunk={() => {
        }}/>);
        const root = component.root;
        let span = root.findByType("span")
        expect(span).not.toBeNull();
    });
    test("Status = text", () => {
        const component = create(<ProfileStatus status="Alalalol" updateStatusThunk={() => {
        }}/>);
        const root = component.root;
        let span = root.findByType("span")
        expect(span.innerText).toBe("Alalalol");
    });
    test("Inputt null", () => {
        const component = create(<ProfileStatus status="Alalalol" updateStatusThunk={() => {
        }}/>);
        const root = component.root;

        expect(() => {
            let input = root.findByType("input")
        }).toThrow();
    });
})