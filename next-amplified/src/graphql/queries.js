/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getHelperOfProject = /* GraphQL */ `
  query GetHelperOfProject($id: ID!) {
    getHelperOfProject(id: $id) {
      id
      name
      lastname
      email
      phonenumber
      links
      businessField
      activityDescription
      reference
      timeAvailability
      projectArea
      createdAt
      updatedAt
    }
  }
`;
export const listHelperOfProjects = /* GraphQL */ `
  query ListHelperOfProjects(
    $filter: ModelHelperOfProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHelperOfProjects(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        lastname
        email
        phonenumber
        links
        businessField
        activityDescription
        reference
        timeAvailability
        projectArea
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getNewProject = /* GraphQL */ `
  query GetNewProject($id: ID!) {
    getNewProject(id: $id) {
      id
      name
      eactivityDescription
      projectPurpose
      fullname
      organization
      phonenumber
      email
      oldWeb
      links
      businessField
      experiences
      reward
      createdAt
      updatedAt
    }
  }
`;
export const listNewProjects = /* GraphQL */ `
  query ListNewProjects(
    $filter: ModelNewProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNewProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        eactivityDescription
        projectPurpose
        fullname
        organization
        phonenumber
        email
        oldWeb
        links
        businessField
        experiences
        reward
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
