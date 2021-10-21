import axios from 'axios';
const BASE_URL = 'https://6169bada09e030001712c567.mockapi.io/api/v1/';

export async function fetchContacts() {
  return await axios.get(`${BASE_URL}/contacts`).then(res => res.data);
}

export async function postContacts({ name, number }) {
  return await axios({
    method: 'post',
    url: `${BASE_URL}/contacts`,
    data: {
      name,
      number,
    },
  });
}

export async function deleteContacts(id) {
  return await axios({
    method: 'delete',
    url: `${BASE_URL}/contacts/${id}`,
  });
}
