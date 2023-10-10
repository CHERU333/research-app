/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getFacility = /* GraphQL */ `query GetFacility($id: ID!) {
  getFacility(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetFacilityQueryVariables,
  APITypes.GetFacilityQuery
>;
export const listFacilities = /* GraphQL */ `query ListFacilities(
  $filter: ModelFacilityFilterInput
  $limit: Int
  $nextToken: String
) {
  listFacilities(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      numberOfPeople
      description
      recordingStatus
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListFacilitiesQueryVariables,
  APITypes.ListFacilitiesQuery
>;
