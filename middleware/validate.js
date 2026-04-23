
export const validate = (validator) => (req, res, next) => {
  const { error } = validator(req.body);

  if (error) {
    const errors = error.details.map((err) => err.message);
    return res.status(400).json({ errors });
  }

  next();
};