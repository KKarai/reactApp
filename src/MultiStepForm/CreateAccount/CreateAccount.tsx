import React from 'react';
import { useField, useFormikContext } from 'formik';
import { Box, Button, TextField } from '@material-ui/core';

export const CreateAccountForm: React.FC = () => {
  const formik = useFormikContext();
  const [emailField, emailMeta] = useField('email');
  const [passwordField, passwordMeta] = useField('password');
  const [confirmPasswordField, confirmPasswordMeta] = useField('confirmPassword');

  return (
    <Box padding={2} width="100%">
      <Box marginBottom={3}>
        <TextField
          {...emailField}
          fullWidth
          label="email"
          error={emailMeta.touched && Boolean(emailMeta.error)}
          helperText={emailMeta.touched && emailMeta.error}
        />
      </Box>
      <Box marginBottom={3}>
        <TextField
          {...passwordField}
          fullWidth
          label="password"
          error={passwordMeta.touched && Boolean(passwordMeta.error)}
          type="password"
          helperText={passwordMeta.touched && passwordMeta.error}
        />
      </Box>
      <Box marginBottom={3}>
        <TextField
          {...confirmPasswordField}
          fullWidth
          label="confirmPassword"
          type="password"
          error={confirmPasswordMeta.touched && Boolean(confirmPasswordMeta.error)}
          helperText={confirmPasswordMeta.touched && confirmPasswordMeta.error}
        />
      </Box>
      <Button variant="contained" type="submit" disabled={!(formik.isValid && formik.dirty)}>
        Next
      </Button>
    </Box>
  );
};
