import React from "react";
import {create} from "istanbul-reports";
import ProfileStatus from "./ProfileStatus";


describe("Profile Status Component", () => {
    test("status from props shoul be in the state", () => {
        const component = create(<ProfileStatus status="SUBSCRIBE TO BASIC"/>);
        const instance = component.getInstance();
        expect(instance.state.text).toBe("SUBSCRIBE TO BASIC");
    });
});