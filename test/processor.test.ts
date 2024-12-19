import { User } from '../src/User'
import { Processor } from '../src/Processor'

let user: User
let processor: Processor
let user2: User

beforeEach(() => {
  user = new User('Alex', 'Ott', '554455', 'Eesti', 19)
  user2 = new User('Karl', 'Mets', '654321', 'Eest', 17)
  processor = new Processor()
})

test('check user undefined', () => {
  //const user = new User('Alex','Smit', '123456','test')
  expect(user.consentGiven).toBeUndefined()
})

test('check processor approve', () => {
  //const user = new User()
  processor.givenConsent(user)
  expect(user.consentGiven).toBe(true)
})

test('check processor verify', () => {
  processor.givenConsent(user)
  expect(processor.checkConsent(user)).toBeTruthy()
})

test('negative check', () => {
  expect(processor.checkConsent(user)).toBeFalsy()
})

test('negative approve for underage person', () => {
  expect(processor.checkAge(user2)).toBe(false)
})

test('positive approve for adult person', () => {
  expect(processor.checkAge(user)).toBe(true)
})

test('revoke consent', () => {
  processor.revokeConsent(user)
  expect(user.consentGiven).toBeFalsy()
})
