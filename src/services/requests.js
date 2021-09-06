import axios from "axios"
import { BASE_URL } from "../constants/urls"


export const getTags = (setTags) => {
  axios
  .get(`${BASE_URL}/tags`)
  .then((res) => {
    setTags(res.data)
  })
  .catch((err) => {
    alert("Desculpe, ocorreu um erro ao fazer as requisições das tags")
    console.log(err.data)
  })
}

export const getIds = (setListId) => {
  axios
  .get(`${BASE_URL}/cats`)
  .then((res) => {
    setListId(res.data)
  })
  .catch((err) => {
    alert("Desculpe, ocorreu um erro ao fazer as requisições dos ids")
    console.log(err.data)
  })
}