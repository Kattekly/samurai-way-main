import React from "react";
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus", () => {
    // test("Status from props should be in the state ", () => {
    //     const component = create(<ProfileStatus status="Alalalol" updateStatusThunk={() => {
    //     }}/>);
    //     const instance = component.getInstance();
    //     expect(instance?.state.status).toBe("Alalalol");
    // });
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
        expect(span.children[0]).toBe("Alalalol");
    });
    test("Inputt null", () => {
        const component = create(<ProfileStatus status="Alalalol" updateStatusThunk={() => {
        }}/>);
        const root = component.root;

        expect(() => {
            let input = root.findByType("input")
        }).toThrow();
    });
    test("input should be displayed in editMode instead of span", () => {
        const component = create(<ProfileStatus status="Alalalol" updateStatusThunk={() => {
        }}/>);
        const root = component.root;
        let span = root.findByType("span")
        span.props.onDoubleClick()
        let input = root.findByType("input")
        expect(input.props.value).toBe("Alalalol");
    });
/*
    test("Callback should be called", () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status="Alalalol" updateStatusThunk={mockCallback}/>);
        const instance  = component.getInstance();
        instance?.deactivateEditMode()
        expect(mockCallback.mock.calls.length).toBe(1);
    });
*/
})