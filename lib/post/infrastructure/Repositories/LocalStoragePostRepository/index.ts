// import { User } from '../../../domain/user'
// import { IUserRepository } from '../../../domain/repository/user-repository'

// export function localStorageUserRepository(): IUserRepository {
//   return {
//     getAll: () => {
//       const users = localStorage.getItem('users')
//       const parsedUsers = users ? (JSON.parse(users) as User[]) : []
//       return Promise.resolve(parsedUsers)
//     },

//     save: (user: User) => {
//       const users = localStorage.getItem('users')
//       const parsedUsers = users ? (JSON.parse(users) as User[]) : []

//       const userExists = parsedUsers.findIndex((u) => u.id === user.id)

//       // edit
//       if (userExists !== -1) {
//         parsedUsers[userExists] = user
//       }
//       // create
//       else {
//         parsedUsers.push(user)
//       }

//       localStorage.setItem('users', JSON.stringify(parsedUsers))
//       return Promise.resolve()
//     },

//     delete: (id: string) => {
//       const users = localStorage.getItem('users')
//       const parsedUsers = users ? (JSON.parse(users) as User[]) : []
//       const newUsers = parsedUsers.filter((user) => user.id !== id)

//       localStorage.setItem('users', JSON.stringify(newUsers))
//       return Promise.resolve()
//     },
//   }
// }
