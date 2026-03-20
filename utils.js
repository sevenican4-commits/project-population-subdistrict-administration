// utils.js

// Utility functions for various operations

/**
 * Format a date to YYYY-MM-DD format
 * @param {Date} date
 * @returns {String} formatted date
 */
function formatDate(date) {
    const YYYY = date.getFullYear();
    const MM = String(date.getMonth() + 1).padStart(2, '0');
    const DD = String(date.getDate()).padStart(2, '0');
    return `${YYYY}-${MM}-${DD}`;
}

/**
 * Validate an email address
 * @param {String} email
 * @returns {Boolean} true if valid, false otherwise
 */
function validateEmail(email) {
    const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return re.test(email);
}

/**
 * Calculate the difference in days between two dates
 * @param {Date} date1
 * @param {Date} date2
 * @returns {Number} difference in days
 */
function dateDifference(date1, date2) {
    const timeDiff = Math.abs(date2 - date1);
    return Math.ceil(timeDiff / (1000 * 3600 * 24));
}

/**
 * Import CSV data
 * @param {String} csvString
 * @returns {Array} parsed CSV data
 */
function importCSV(csvString) {
    const rows = csvString.trim().split('\n');
    return rows.map(row => row.split(','));
}

/**
 * Export data to CSV format
 * @param {Array} data
 * @returns {String} CSV formatted string
 */
function exportCSV(data) {
    return data.map(row => row.join(',')).join('\n');
}

/**
 * Send a notification (stub)
 * @param {String} message
 */
function sendNotification(message) {
    console.log('Notification:', message);
}

/**
 * Helper function to generate random ID
 * @returns {String} random ID
 */
function generateRandomId() {
    return 'id-' + Math.random().toString(36).substr(2, 16);
}

module.exports = {
    formatDate,
    validateEmail,
    dateDifference,
    importCSV,
    exportCSV,
    sendNotification,
    generateRandomId,
};