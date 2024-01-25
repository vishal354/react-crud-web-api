import axios from "axios";

// export default axios.create({
//   baseURL: "http://localhost:8080/api",
//   headers: {
//     "Content-type": "application/json"
//   }
// });

// const backendURL = process.env.REACT_APP_BACKEND_URL || "apple"

export default axios.create({
    baseURL: '/api',
    headers: {
        "Content-type": "application/json",
    },
})