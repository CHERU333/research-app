/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateFacilityInput = {
  id?: string | null,
  name: string,
  numberOfPeople: number,
  description?: string | null,
  recordingStatus?: RecordingStatus | null,
};

export enum RecordingStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}


export type ModelFacilityConditionInput = {
  name?: ModelStringInput | null,
  numberOfPeople?: ModelIntInput | null,
  description?: ModelStringInput | null,
  recordingStatus?: ModelRecordingStatusInput | null,
  and?: Array< ModelFacilityConditionInput | null > | null,
  or?: Array< ModelFacilityConditionInput | null > | null,
  not?: ModelFacilityConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelRecordingStatusInput = {
  eq?: RecordingStatus | null,
  ne?: RecordingStatus | null,
};

export type Facility = {
  __typename: "Facility",
  id: string,
  name: string,
  numberOfPeople: number,
  description?: string | null,
  recordingStatus?: RecordingStatus | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateFacilityInput = {
  id: string,
  name?: string | null,
  numberOfPeople?: number | null,
  description?: string | null,
  recordingStatus?: RecordingStatus | null,
};

export type DeleteFacilityInput = {
  id: string,
};

export type ModelFacilityFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  numberOfPeople?: ModelIntInput | null,
  description?: ModelStringInput | null,
  recordingStatus?: ModelRecordingStatusInput | null,
  and?: Array< ModelFacilityFilterInput | null > | null,
  or?: Array< ModelFacilityFilterInput | null > | null,
  not?: ModelFacilityFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelFacilityConnection = {
  __typename: "ModelFacilityConnection",
  items:  Array<Facility | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionFacilityFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  numberOfPeople?: ModelSubscriptionIntInput | null,
  description?: ModelSubscriptionStringInput | null,
  recordingStatus?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionFacilityFilterInput | null > | null,
  or?: Array< ModelSubscriptionFacilityFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreateFacilityMutationVariables = {
  input: CreateFacilityInput,
  condition?: ModelFacilityConditionInput | null,
};

export type CreateFacilityMutation = {
  createFacility?:  {
    __typename: "Facility",
    id: string,
    name: string,
    numberOfPeople: number,
    description?: string | null,
    recordingStatus?: RecordingStatus | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFacilityMutationVariables = {
  input: UpdateFacilityInput,
  condition?: ModelFacilityConditionInput | null,
};

export type UpdateFacilityMutation = {
  updateFacility?:  {
    __typename: "Facility",
    id: string,
    name: string,
    numberOfPeople: number,
    description?: string | null,
    recordingStatus?: RecordingStatus | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFacilityMutationVariables = {
  input: DeleteFacilityInput,
  condition?: ModelFacilityConditionInput | null,
};

export type DeleteFacilityMutation = {
  deleteFacility?:  {
    __typename: "Facility",
    id: string,
    name: string,
    numberOfPeople: number,
    description?: string | null,
    recordingStatus?: RecordingStatus | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetFacilityQueryVariables = {
  id: string,
};

export type GetFacilityQuery = {
  getFacility?:  {
    __typename: "Facility",
    id: string,
    name: string,
    numberOfPeople: number,
    description?: string | null,
    recordingStatus?: RecordingStatus | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFacilitiesQueryVariables = {
  filter?: ModelFacilityFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFacilitiesQuery = {
  listFacilities?:  {
    __typename: "ModelFacilityConnection",
    items:  Array< {
      __typename: "Facility",
      id: string,
      name: string,
      numberOfPeople: number,
      description?: string | null,
      recordingStatus?: RecordingStatus | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateFacilitySubscriptionVariables = {
  filter?: ModelSubscriptionFacilityFilterInput | null,
};

export type OnCreateFacilitySubscription = {
  onCreateFacility?:  {
    __typename: "Facility",
    id: string,
    name: string,
    numberOfPeople: number,
    description?: string | null,
    recordingStatus?: RecordingStatus | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFacilitySubscriptionVariables = {
  filter?: ModelSubscriptionFacilityFilterInput | null,
};

export type OnUpdateFacilitySubscription = {
  onUpdateFacility?:  {
    __typename: "Facility",
    id: string,
    name: string,
    numberOfPeople: number,
    description?: string | null,
    recordingStatus?: RecordingStatus | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFacilitySubscriptionVariables = {
  filter?: ModelSubscriptionFacilityFilterInput | null,
};

export type OnDeleteFacilitySubscription = {
  onDeleteFacility?:  {
    __typename: "Facility",
    id: string,
    name: string,
    numberOfPeople: number,
    description?: string | null,
    recordingStatus?: RecordingStatus | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
