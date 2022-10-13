// Use regex101.com

//Find all the words
const wordsRegEx = /([\wÀ-ú]+)/g

// Not numbers
const notNumbersRegEx = /\D/

// Validate IP
const ipRegEx = /((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)/g;

// CPF format, but it is not validation!!!!!
const cpfRegEx = /(?:\d{3}\.){2}\d{3}-\d{2}/g

// Phone number - Brazil
const phoneNumberRegEx = /^(\(\d{2}\)\s*)?(9\s*)?(\d{4})-(\d{4})$/g

// Validate strong passwords  --- WITHOUT SYMBOLS
const strongPasswordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/g

// Validate emails
const validateEmailsRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/