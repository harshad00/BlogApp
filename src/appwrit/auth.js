// import conf from "../conf/conf.js";
// import { Client, Account, ID } from "appwrite";

// export class AuthService {
//   client = new Client();
//   account;

//   constructor() {
//     this.client
//         .setEndpoint(conf.appwriteUrl)
//         .setProject(conf.appwriteProjectId);
//     this.account = new Account(this.client);  
   
// }

//   async createAccount({ email, password, name }) {
//     // eslint-disable-next-line no-useless-catch
//     try {
//       const userAccount = await this.account.create(
//         ID.unique(),
//         email,
//         password,
//         name
//       );
//       if (userAccount) {
//         // call another mwthod
//         return this.login({ email, password });
//       } else {
//         // throw new Error("Failed to create user account");
//         return userAccount;
//       }
//     } catch (error) {
//       throw error;
//     }
//   }

//   async login({ email, password }) {
//     // eslint-disable-next-line no-useless-catch
//     try {
//       return await this.account.createEmailPasswordSession(email, password);
//     } catch (error) {
//       throw error;
//     }
//   }

//   // ! give chatGPT code 

//   // async getCurrentUser() {
//   //   try {
//   //     // Check if there is an active session
//   //     const session = await this.account.getSession('current');
//   //     if (!session) {
//   //       console.warn("No active session found");
//   //       return null;
//   //     }
//   //     // Fetch the user details
       
      
//   //        return await this.account.get();
      
//   //   } catch (error) {
//   //     console.log("Appwrite service :: getCurrentUser :: error", error);
//   //     if (error.code === 401) {
//   //       console.warn("User is not authenticated");
//   //     } else if (error.message === 'Aborted') {
//   //       console.warn("Request was aborted");
//   //     } else {
//   //       console.error("An unexpected error occurred:", error);
//   //     }
//   //   }
//   //   return null;
//   // }
  

//   // ! old code 
//   async getCurrentUser() {
//     // eslint-disable-next-line no-useless-catch
//     try {
//       return await this.account.get();
//     } catch (error) {
//       console.log("Appwrite serive :: getCurrentUser :: error", error);
//       return null;
//     }

    
//   }

//   async logout(){

//    // eslint-disable-next-line no-useless-catch
//    try {
//     await this.account.deleteSessions();
//    } catch (error) {
//     throw error;
//    }
        
//   }
// }

// const authService = new AuthService();

// export default authService;


import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";


export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
            
    }

    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call another method
                return this.login({email, password});
            } else {
               return  userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null;
    }

    async logout() {

        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }
}

const authService = new AuthService();

export default authService


