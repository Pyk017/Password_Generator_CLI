const alpha_upper = Array.from(Array(26))
  .map((e, i) => i + 65)
  .map((x) => String.fromCharCode(x));

const alpha_lower = Array.from(Array(26))
  .map((e, i) => i + 97)
  .map((x) => String.fromCharCode(x));

const digits = Array.from(Array(10))
  .map((e, i) => i)
  .join("");
const alphabets = [...alpha_lower, ...alpha_upper].join("");
const symbols = Array.from("!@#$%^&*_+-=").join("");

const createPassword = (
  length = "8",
  hasNumbers = "true",
  hasSymbols = "true"
) => {
  let chars = alphabets;
  hasNumbers ? (chars += digits) : "";
  hasSymbols ? (chars += symbols) : "";
  return generatePassword(length, chars);
};

const generatePassword = (length, chars) => {
  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
};

module.exports = createPassword;
