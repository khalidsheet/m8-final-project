import { gql } from "@apollo/client";

export const GET_PREVIEW_POSTS = gql`
  query content_view_f8532fd343fe41ed989f9eac9f4d3fbe(
    $first: Int
    $skip: Int
    $stage: Stage!
    $where: ProjectWhereInput
    $orderBy: ProjectOrderByInput
  ) {
    page: projectsConnection(
      first: $first
      skip: $skip
      stage: $stage
      where: $where
      orderBy: $orderBy
    ) {
      edges {
        node {
          slug
          title
          updatedAt
          imagePath
          createdBy {
            entryId: id
            name
            picture
            kind
            isActive
          }
        }
      }
    }
  }
`;

export const FIND_SINGLE_PROJECT_DETAILS = gql`
  query FindSingleProjectDetails(
    $where: ProjectWhereUniqueInput!
    $stage: Stage!
  ) {
    project(where: $where, stage: $stage) {
      id
      imagePath
      publishedAt
      title
      createdAt
      description
      publishedBy {
        id
        name
        picture
      }
    }
  }
`;
