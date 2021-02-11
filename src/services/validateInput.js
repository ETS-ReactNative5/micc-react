export const validateInput = (fieldName, fieldValue) => {
  // Validate name
  if (fieldName === "name") {
    if (fieldValue === "" || !fieldValue) {
      return `${fieldName} is required`;
    }
    if (/[^a-zA-Z -]/.test(fieldValue)) {
      return "Invalid characters";
    }
    return null;
  }

  // Validate email
  if (fieldName === "email") {
    if (
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        fieldValue
      )
    ) {
      return null;
    }
    if (fieldValue.trim() === "" || !fieldValue) {
      return `${fieldName} is required`;
    }
    return `Please enter a valid ${fieldName}`;
  }
};
