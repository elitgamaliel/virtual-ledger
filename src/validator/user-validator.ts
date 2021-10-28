import { body, query, param } from "express-validator";

class UserValidator {
  checkCreateUser() {
    return [
      body("username")
        .notEmpty()
        .withMessage("The username value should not be empty."),
      body("first_name")
        .notEmpty()
        .withMessage("The first name value should not be empty."),
      body("last_name")
        .notEmpty()
        .withMessage("The last name value should not be empty."),
      body("email")
        .notEmpty()
        .withMessage("The email value should not be empty.")
        .isEmail()
        .withMessage("The email value is not a email"),
      body("password")
        .notEmpty()
        .withMessage("The password value should not be empty."),
    ];
  }
  checkReadUser() {
    return [
      query("limit")
        .optional()
        .toInt()
        .isInt({ min: 1, max: 10 })
        .withMessage("The limit value should be number and between 1-10."),
      query("offset").optional().toInt(),
    ];
  }
  checkIdParam() {
    return [
      param("id")
        .notEmpty()
        .withMessage("The value should not be empty.")
        .isNumeric()
        .withMessage("The id value is not a number."),
    ];
  }
}

export default new UserValidator();
