export class User {
  name: string
  surname: string
  phone: string
  address: string
  consentGiven: undefined | boolean
  age: number

  constructor(name: string, surname: string, phone: string, address: string, age: number) {
    this.name = name
    this.surname = surname
    this.phone = phone
    this.address = address
    this.age = age
  }
}
