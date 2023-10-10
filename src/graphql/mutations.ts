/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createFacility = /* GraphQL */ `mutation CreateFacility(
  $input: CreateFacilityInput!
  $condition: ModelFacilityConditionInput
) {
  createFacility(input: $input, condition: $condition) {
    id
    name
    numberOfPeople
    description
    recordingStatus
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateFacilityMutationVariables,
  APITypes.CreateFacilityMutation
>;
export const updateFacility = /* GraphQL */ `mutation UpdateFacility(
  $input: UpdateFacilityInput!
  $condition: ModelFacilityConditionInput
) {
  updateFacility(input: $input, condition: $condition) {
    id
    name
    numberOfPeople
    description
    recordingStatus
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateFacilityMutationVariables,
  APITypes.UpdateFacilityMutation
>;
export const deleteFacility = /* GraphQL */ `mutation DeleteFacility(
  $input: DeleteFacilityInput!
  $condition: ModelFacilityConditionInput
) {
  deleteFacility(input: $input, condition: $condition) {
    id
    name
    numberOfPeople
    description
    recordingStatus
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteFacilityMutationVariables,
  APITypes.DeleteFacilityMutation
>;
