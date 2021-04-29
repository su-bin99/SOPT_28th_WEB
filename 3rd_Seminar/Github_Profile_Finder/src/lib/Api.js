import axios from "axios";

export const getUserData = async (name) => {
    console.log('호출')
    if(name ==undefined){
        console.log(name);
        return null;
    }
    else{
        try {
            const {data} = await axios.get("https://api.github.com/users/" + name);
            console.log("[SUCCESS] GET user data", data);
            return data;
        } catch (e) {
            console.log("[FAIL] GET user data", e);
            return null;
        }
    }
};


export default getUserData;