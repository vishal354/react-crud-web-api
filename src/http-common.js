import axios from "axios";

// export default axios.create({
//   baseURL: "http://localhost:8080/api",
//   headers: {
//     "Content-type": "application/json"
//   }
// });

export default axios.create({
    baseURL: "http://54.80.12.24:8080/api",
    headers: {
        "Content-type": "application/json",
    },
})