import { User } from './User'

export class Processor {
  givenConsent(user: User) {
    user.consentGiven = true
  }

  checkConsent(user: User): boolean {
    return user.consentGiven === true
  }

  checkAge(user: User) {
    if (user.age >= 18) {
      return (user.consentGiven = true)
    } else user.age < 18
    return (user.consentGiven = false)
  }

  revokeConsent(user: User) {
    user.consentGiven = false
  }
}
