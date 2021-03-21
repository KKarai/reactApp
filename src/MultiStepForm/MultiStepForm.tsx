import React, { useState, useCallback } from 'react';
import { Form, Formik, FormikHelpers } from 'formik';
import { Box } from '@material-ui/core';
import { StepContent } from './StepContent';
import { validationSchemas } from './validateSchema';
import { FomValues } from './types';

const initialValues: FomValues = {
  email: '',
  password: '',
  confirmPassword: '',
  bio: '',
  fio: ''
};
const STEPS = 2;

export const MultiStepForm: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isSubmiting, setIsSubmiting] = useState(false);

  const handleSubmit = (values: FomValues, formik: FormikHelpers<FomValues>) => {
    if (activeStep === STEPS - 1) {
      console.log('submit', values);
      setIsSubmiting(true);
    } else {
      setActiveStep(s => s + 1);
      formik.setSubmitting(false);
    }
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <Box display="flex" alignItems="center" justifyContent="center" width={400} minHeight="100vh">
        {!isSubmiting && (
          <Formik
            onSubmit={handleSubmit}
            initialValues={initialValues}
            validationSchema={validationSchemas[activeStep]}
          >
            <Form style={{ width: '100%' }}>
              <StepContent step={activeStep} />
            </Form>
          </Formik>
        )}
        {isSubmiting && 'Loading'}
      </Box>
    </Box>
  );
};
