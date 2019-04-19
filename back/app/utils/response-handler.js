/* we will be centralizing all the responses at one place */

module.exports = {
  /* for all the positive response */
  yahResponse: async (res, data, create = false) => {
    if (create) {
      res.status(201).json(data);
    } else {
      res.status(200).json(data);
    }
  },
  /* when something goes wrong */
  nahResponse: async (res, error) => {
    res.status(500).json({ status: false, error: error });
  },
  /* when we want send manual error messages */
  errorMessage: async (res, message) => {
    res.status(200).json({ status: false, message });
  }
};
