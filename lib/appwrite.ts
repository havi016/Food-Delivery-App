import {Account, Avatars, Client, Databases, ID} from "react-native-appwrite";
import {CreateUserParams, SignInParams} from "@/type";

export const appwriteConfig = {
    endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
    platform: "com.havi.foodordering",
    projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
    databaseId: '68a1f210000c1589f445',
    userCollectionId: '68a1f2380026da7fc7b7',
}

export const client = new  Client();

client
    .setEndpoint(appwriteConfig.endpoint!)
    .setProject(appwriteConfig.projectId!)
    .setPlatform (appwriteConfig.platform)

export const account = new Account(client);
export const databases = new Databases(client);
const avatars = new Avatars(client);

export const createUser = async ({ email, password, name} : CreateUserParams) => {
    try{
        const newAccount = await account.create(ID.unique(), email, password, name )
        if (!newAccount) throw Error;

        await signIn( {email, password});

        const avatarUrl = avatars.getInitialsURL(name);

        const newUser = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            ID.unique(),
            {accountId: newAccount.$id, email, name ,avatar:  avatarUrl}
        );

        return newUser;

    } catch(e) {
        throw new Error(e as string);
    }


}

export const signIn = async ({email, password}: SignInParams) => {
    try {
        const newSession = await account.createEmailPasswordSession(email, password);
    } catch(e) {
        throw new Error(e as string);
    }

}

