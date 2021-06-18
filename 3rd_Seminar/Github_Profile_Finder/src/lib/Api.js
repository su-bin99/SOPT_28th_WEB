import axios from "axios";

export const getUserData = async (name) => {
  console.log("호출 : " + name);
  if (name == undefined || name == "") {
    console.log(name);
    return null;
  } else {
    try {
      const { data } = await axios.get("https://api.github.com/users/" + name);
      console.log("[SUCCESS] GET user data", data);
      return data;
    } catch (e) {
      console.log("[FAIL] GET user data", e);
      return "fail";
    }
  }
};

export const getRepoData = async (name) => {
  console.log("레포 호출 : " + name);
  if (name == undefined || name == "") {
    console.log(name);
    return null;
  } else {
    try {
      const { data } = await axios.get(
        "https://api.github.com/users/" + name + "/repos"
      );
      console.log("[SUCCESS] GET user repo", data);
      return data;
    } catch (e) {
      console.log("[FAIL] GET user repo", e);
      return "fail";
    }
  }
};

// export default getUserData;
