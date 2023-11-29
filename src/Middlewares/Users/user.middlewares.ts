import { param, body } from 'express-validator';

export const userIdValidationRules = () => {
    return [
        param('userId')
            .trim()
            .notEmpty()
            .withMessage('User ID is required')
            .isString()
            .withMessage('User ID must be a string')
    ];
};

export const userEmailValidationRules = () => {
    return [
        body('email')
            .trim()
            .notEmpty()
            .withMessage('Email ID is required')
            .isString()
            .withMessage('Email must be a string')
    ];
};

export const userProfileUpdateValidationRules = () => {
    return [
        body('firstName')
            .optional()
            .trim()
            .notEmpty()
            .withMessage('First name is required'),
        body('lastName')
            .optional()
            .trim()
            .notEmpty()
            .withMessage('Last name is required'),
        body('bio')
            .optional()
            .trim()
            .isString()
            .withMessage('Bio must be a string'),
        body('address')
            .optional()
            .trim()
            .isString()
            .withMessage('Address must be a string'),
        body('userType')
            .optional()
            .trim()
            .isString()
            .withMessage('User type must be a string'),
        body('gender').trim().isString().withMessage('Gender must be a string'),
        body('NIN').trim().isString().withMessage('NIN must be a string'),
        body('phoneNumber')
            .optional()
            .trim()
            .isString()
            .withMessage('phoneNumber must be a string'),
        body('profilePicture')
            .optional()
            .isURL()
            .withMessage('Invalid URL for profile picture')
    ];
};
