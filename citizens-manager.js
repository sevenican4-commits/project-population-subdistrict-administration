// citizens-manager.js

const citizens = [];

// Function to add a citizen
function addCitizen(citizen) {
    citizens.push(citizen);
}

// Function to retrieve a citizen by ID
function getCitizen(id) {
    return citizens.find(citizen => citizen.id === id);
}

// Function to update a citizen by ID
function updateCitizen(id, updatedData) {
    const index = citizens.findIndex(citizen => citizen.id === id);
    if (index !== -1) {
        citizens[index] = { ...citizens[index], ...updatedData };
    }
}

// Function to delete a citizen by ID
function deleteCitizen(id) {
    const index = citizens.findIndex(citizen => citizen.id === id);
    if (index !== -1) {
        citizens.splice(index, 1);
    }
}

module.exports = { addCitizen, getCitizen, updateCitizen, deleteCitizen };