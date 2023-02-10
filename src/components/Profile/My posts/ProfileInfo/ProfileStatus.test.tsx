import React from "react";
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus", () => {
    test("Status from props should be in the state ", () => {
        const component = create(<ProfileStatus status="Alalalol"/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("Alalalol");
    });
    test("After creating span be correct", () => {
        const component = create(<ProfileStatus status="Alalalol"/>);
        const root = component.root;
        let span = root.findByType("span")
        expect(span.length).toBe(1);
    });
    test("Status = text", () => {
        const component = create(<ProfileStatus status="Alalalol"/>);
        const root = component.root;
        let span = root.findByType("span")
        expect(span.innerText).toBe("Alalalol");
    });
});