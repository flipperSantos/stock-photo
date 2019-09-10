/* tslint:disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import * as Observable from "zen-observable";

export type CreatePhotoInput = {
  id?: string | null;
  imageUrl: string;
};

export type UpdatePhotoInput = {
  id: string;
  imageUrl?: string | null;
};

export type DeletePhotoInput = {
  id?: string | null;
};

export type ModelPhotoFilterInput = {
  id?: ModelIDFilterInput | null;
  imageUrl?: ModelStringFilterInput | null;
  and?: Array<ModelPhotoFilterInput | null> | null;
  or?: Array<ModelPhotoFilterInput | null> | null;
  not?: ModelPhotoFilterInput | null;
};

export type ModelIDFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelStringFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type CreatePhotoMutation = {
  __typename: "Photo";
  id: string;
  imageUrl: string;
};

export type UpdatePhotoMutation = {
  __typename: "Photo";
  id: string;
  imageUrl: string;
};

export type DeletePhotoMutation = {
  __typename: "Photo";
  id: string;
  imageUrl: string;
};

export type GetPhotoQuery = {
  __typename: "Photo";
  id: string;
  imageUrl: string;
};

export type ListPhotosQuery = {
  __typename: "ModelPhotoConnection";
  items: Array<{
    __typename: "Photo";
    id: string;
    imageUrl: string;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreatePhotoSubscription = {
  __typename: "Photo";
  id: string;
  imageUrl: string;
};

export type OnUpdatePhotoSubscription = {
  __typename: "Photo";
  id: string;
  imageUrl: string;
};

export type OnDeletePhotoSubscription = {
  __typename: "Photo";
  id: string;
  imageUrl: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreatePhoto(input: CreatePhotoInput): Promise<CreatePhotoMutation> {
    const statement = `mutation CreatePhoto($input: CreatePhotoInput!) {
        createPhoto(input: $input) {
          __typename
          id
          imageUrl
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreatePhotoMutation>response.data.createPhoto;
  }
  async UpdatePhoto(input: UpdatePhotoInput): Promise<UpdatePhotoMutation> {
    const statement = `mutation UpdatePhoto($input: UpdatePhotoInput!) {
        updatePhoto(input: $input) {
          __typename
          id
          imageUrl
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdatePhotoMutation>response.data.updatePhoto;
  }
  async DeletePhoto(input: DeletePhotoInput): Promise<DeletePhotoMutation> {
    const statement = `mutation DeletePhoto($input: DeletePhotoInput!) {
        deletePhoto(input: $input) {
          __typename
          id
          imageUrl
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeletePhotoMutation>response.data.deletePhoto;
  }
  async GetPhoto(id: string): Promise<GetPhotoQuery> {
    const statement = `query GetPhoto($id: ID!) {
        getPhoto(id: $id) {
          __typename
          id
          imageUrl
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetPhotoQuery>response.data.getPhoto;
  }
  async ListPhotos(
    filter?: ModelPhotoFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPhotosQuery> {
    const statement = `query ListPhotos($filter: ModelPhotoFilterInput, $limit: Int, $nextToken: String) {
        listPhotos(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            imageUrl
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListPhotosQuery>response.data.listPhotos;
  }
  OnCreatePhotoListener: Observable<OnCreatePhotoSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreatePhoto {
        onCreatePhoto {
          __typename
          id
          imageUrl
        }
      }`
    )
  ) as Observable<OnCreatePhotoSubscription>;

  OnUpdatePhotoListener: Observable<OnUpdatePhotoSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdatePhoto {
        onUpdatePhoto {
          __typename
          id
          imageUrl
        }
      }`
    )
  ) as Observable<OnUpdatePhotoSubscription>;

  OnDeletePhotoListener: Observable<OnDeletePhotoSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeletePhoto {
        onDeletePhoto {
          __typename
          id
          imageUrl
        }
      }`
    )
  ) as Observable<OnDeletePhotoSubscription>;
}
