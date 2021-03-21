import React from 'react';
import { useField, useFormikContext } from 'formik';
import { Box, Button, TextField } from '@material-ui/core';

export const DetailForm: React.FC = () => {
  const formik = useFormikContext();
  const [fioField, fioMeta] = useField('fio');
  const [bioField] = useField('bio');

  return (
    <Box padding={2} width="100%">
      <Box marginBottom={3}>
        <TextField
          {...fioField}
          fullWidth
          label="ФИО"
          multiline
          rows={2}
          error={fioMeta.touched && Boolean(fioMeta.error)}
          helperText={fioMeta.touched && fioMeta.error}
        />
      </Box>
      <Box marginBottom={3}>
        <TextField {...bioField} fullWidth multiline rows={4} label="О себе" />
      </Box>
      <Button variant="contained" type="submit" disabled={!(formik.isValid && formik.dirty)}>
        Submit
      </Button>
    </Box>
  );
};
