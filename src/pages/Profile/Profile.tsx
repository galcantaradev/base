import { Form, Formik, FormikHelpers } from 'formik';
import React from 'react';
import { Redirect } from 'react-router';
import styled from 'styled-components';

import {
  Button,
  FlexContainer,
  FormikInputField,
  SectionTitle
} from '../../components';
import {
  UserProfileInput,
  useMeQuery,
  useProfileMutation
} from '../../generated/graphql';
import { useNotification } from '../../hooks';
import { profileValidationSchema } from './profileValidationSchema';

type ProfileForm = UserProfileInput & {
  email?: string;
};

const ProfileContainer = styled(FlexContainer)`
  align-items: center;
  justify-content: center;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Profile = () => {
  const [, update] = useProfileMutation();
  const [{ data, fetching }] = useMeQuery();
  const showNotification = useNotification();

  if (!data?.me && !fetching) {
    return <Redirect to="/login" />;
  }

  const onSubmit = async (
    options: ProfileForm,
    actions: FormikHelpers<ProfileForm>
  ) => {
    await update({ options });

    actions.resetForm();

    showNotification({
      type: 'success',
      message: 'profile updated'
    });
  };

  return (
    <ProfileContainer>
      <Formik<ProfileForm>
        enableReinitialize
        initialValues={{
          email: data?.me?.email || '',
          name: data?.me?.name || '',
          password: ''
        }}
        onSubmit={onSubmit}
        validationSchema={() => profileValidationSchema}
      >
        {formProps => {
          return (
            <Form>
              <SectionTitle>profile</SectionTitle>
              <FormikInputField
                name="email"
                label="email"
                width={400}
                placeholder="example@email.com"
                disabled
              />
              <FormikInputField
                name="name"
                label="name"
                width={400}
                placeholder="name"
              />
              <Flex>
                <FormikInputField
                  name="password"
                  label="password"
                  type="password"
                  width={400}
                  placeholder="*******"
                />
              </Flex>
              <Button
                width={400}
                type="submit"
                variant="success"
                disabled={!formProps.dirty}
                loading={formProps.isSubmitting}
              >
                confirm
              </Button>
            </Form>
          );
        }}
      </Formik>
    </ProfileContainer>
  );
};
