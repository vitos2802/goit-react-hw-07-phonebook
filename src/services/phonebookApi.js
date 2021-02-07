import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

const fetchContacts = () => {
  return axios.get('/contacts').then(response => response.data);
};

const addContact = (name, phone) => {
  return axios.post('/contacts', name, phone).then(({ data }) => data);
};

const deleteContact = contactId => {
  return axios.delete(`/contacts/${contactId}`);
};

const phonebookApi = { fetchContacts, addContact, deleteContact };

export default phonebookApi;
