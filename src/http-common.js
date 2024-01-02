import axios from "axios";

// export default axios.create({
//   baseURL: "http://localhost:8080/api",
//   headers: {
//     "Content-type": "application/json"
//   }
// });

const loadBalancerURL = "http://tutorial-lb-1671621252.us-east-1.elb.amazonaws.com/api"

export default axios.create({
    baseURL: loadBalancerURL,
    headers: {
        "Content-type": "application/json",
    },
})