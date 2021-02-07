const isFetching: boolean = true

let int: number = 42
const float: number = 4.2

const message: string = 'Hello Typescript'

const numberArray: number[] = [1, 1, 2, 4, 5 , 9]
const numberArray2: Array<number> = [1, 1, 2, 4, 5 , 9]

const words: string[] = ['Hello', 'Typescript']

// Tuple
const contact: [string, number] = ['Vladilen', 42568]

// Any 
let variable: any = 42
variable = 'New String'

function sayMyName(name: string): void {
  console.log(name)
}

sayMyName('Anna')

// Never
function throwError(message: string): never {
  throw new Error(message)
}

// Type
type Login = string
const login: Login = 'admin'

type ID = string | number
const id: ID = 'admin'
const id2: ID = 1234 