const fs = require('fs/promises');
const path = require('path');

// const pathContacts = path.resolve('../models/contacts.json');
const pathContacts = path.join(__dirname, 'contacts.json');

const listContacts = async () => {
  try {
    const contactsList = await fs.readFile(pathContacts, 'utf-8');
    return JSON.parse(contactsList);
  } catch (error) {
    console.error(error);
  }
};

const getContactById = async contactId => {
  try {
    const contactsList = await listContacts();
    return contactsList.find(contact => contact.id === contactId);
  } catch (error) {
    console.error(error.message);
  }
};

const addContact = async body => {
  try {
    const contactsList = await listContacts();
    contactsList.push(body);
    const contactsBySort = [...contactsList].sort(
      (a, b) => Number(a.id) - Number(b.id)
    );
    fs.writeFile(pathContacts, JSON.stringify(contactsBySort), 'utf8');
  } catch (error) {
    console.error(error);
  }
};

const removeContact = async contactId => {};

const updateContact = async (contactId, body) => {};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
