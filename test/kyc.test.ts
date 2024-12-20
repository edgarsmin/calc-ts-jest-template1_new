import {UserEstonia} from "../src/User-estonia";
import {KycVerification} from "../src/kyc-verification";
import {UserLatvia} from "../src/User-latvia";

describe('Test kyc for Estonia', () => {
    let user: UserEstonia
    let kyc: KycVerification

    beforeEach(() => {
        user = new UserEstonia('Tom','Jason',17,123456,'+372556677','Estonia')
        kyc = new KycVerification()
    })

    test('Verify that the mobileIDAuthorization field is undefined by default', () => {
        expect(user.mobileIDAuthorization).toBeUndefined()
    })

    test('Verify that the activateMobileIDForEstonia method activates Mobile ID if the users age is greater than 16', () => {
        kyc.activateMobileIDForEstonia(user)
        expect(user.mobileIDAuthorization).toBe(true)
    })

    test('Verify that attempting to activate Mobile ID for a user younger that 16 throws an error', () => {
        user.age = 14
        expect(() => {
            kyc.activateMobileIDForEstonia(user)
        }).toThrow('User is too young')
    })
})
describe('Test kyc for Latvia', () => {
    let user: UserLatvia
    let kyc: KycVerification

    beforeEach(() => {
        user = new UserLatvia('Tom','Jason',20,123456,'+372556677','Estonia')
        kyc = new KycVerification()
    })

    test('Verify that the eParakstsForLatvia field is undefined by default', () => {
        expect(user.activateEParakstsForLatvia).toBeUndefined()
    })

    test('Verify that the activateEParakstsForLatvia method activates Mobile ID if the users age is greater than 18', () => {
        kyc.activateEParakstsForLatvia(user)
        expect(user.activateEParakstsForLatvia).toBe(true)
    })

    test('Verify that attempting to activate EParaksts for a user younger that 18 throws an error', () => {
        user.age = 14
        expect(() => {
            kyc.activateEParakstsForLatvia(user)
        }).toThrow('User is too young')
    })
})