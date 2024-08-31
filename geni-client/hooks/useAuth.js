import AsyncStorage from "@react-native-async-storage/async-storage";

export function useAuth() {

    const getUser = async () => {
        try {
            const userString = await AsyncStorage.getItem("geniUser");

            const user = JSON.parse(userString) ?? null;

            // {
            //     geniUser: {
            //         isAuthenticated: true | false,
            //         name: "",
            //         email: "",
            //         id: "",
            //         role: ""
            //     }
            // }
            return user
        } catch(err) {
            console.log(err);
            return null
        }
    }
    const isAuthenticated = async () => {
        try {
            const user = await getUser();

            return user?.isAuthenticated ?? false
        } catch(err) {
            console.log(err);
            return false;
        }
    }

    const addAuthenticatedUser = async ({name, email, role, id, ...others}) => {
        try {
            const userString = JSON.stringify({name, email, role, id, isAuthenticated: true, ...others});

            await AsyncStorage.setItem("geniUser", userString);
            return userString;
        } catch(err) {
            console.log(err);
            return null
        }
    }

    const removeUser = async ({email}) => {
        try {
            const user = await getUser();

            if (user?.email === email) {
                await AsyncStorage.removeItem("geniUser");
                return user;
            }

            return null;
        } catch(err) {
            console.log(err);
            return null;
        }
    }

    return {
        getUser,
        isAuthenticated,
        addAuthenticatedUser,
        removeUser
    }
}