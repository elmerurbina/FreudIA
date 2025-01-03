const generateResponse = (message, data = null, error = false) => {
    return {
        success: !error,
        message,
        data,
    };
};

module.exports = { generateResponse };
