export default {
  error: {
    bad_request: 'Bad request / Validation error',
    server: 'Error in setup interaction',
    internal_server: 'Internal server error',
    resource_not_found: 'Resource not found!',
    resource_already_exist: 'Duplicate record is not allowed',
    inputs: 'There are problems with your input',
    un_authorized: 'Not authorized',
    cannot_perform_operation: 'Cannot perform operation',
    not_auth_token: 'No authorization token provided',
    not_found: 'Data not found',
    no_update_input: 'Nothing to update',
    forbidden: 'User is not authorized to perform operation',
  },
  auth: {
    email_required: 'Email is required',
    dataVerified: 'data already verified',
    verify: 'Verify your email',
    invalidCode: 'Invalid verification code',
    expiredCode: 'Verification code has expired',
    dataInvalid: 'Incorrect date of birth or gender',
    userExist: 'User with credential already exist!',
    invalidUser: 'Invalid credentials',
    resetPassword: 'Reset Your Account',
    bvnDoesNotExist: 'Bvn does not exist',
    invalid_token: 'Invalid token',
    email_verified: 'Invalid token',
    token_expired: 'Token expired',
    verify_request_sent: 'Verify request send to email',
  },
  plan: {
    not_found: 'Plan not found',
  },
  subscription: {
    not_found: 'Plan not found',
  },

  transaction: {
    not_found: 'Transaction not found',
    exist: 'Transaction already exists',
    forbidden: 'Cannot perform operation',
  },
  payment: {
    confirmed: 'Payment already confirmed',
  },
};
