import axios from "axios";

const sendEmail = input => {
  return dispatch => {
    return axios.post(`${process.env.REACT_APP_URL}users/forget/`, input);
  };
};
export default sendEmail;
