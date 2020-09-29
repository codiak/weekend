/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getHome = /* GraphQL */ `
  query GetHome($id: ID!) {
    getHome(id: $id) {
      id
      name
      address
      city
      state
      zip
      purchaseDate
      purchasePrice
      tasks {
        items {
          id
          name
          description
          frequency
          houseID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listHomes = /* GraphQL */ `
  query ListHomes(
    $filter: ModelHomeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHomes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        address
        city
        state
        zip
        purchaseDate
        purchasePrice
        tasks {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTask = /* GraphQL */ `
  query GetTask($id: ID!) {
    getTask(id: $id) {
      id
      name
      description
      frequency
      houseID
      house {
        id
        name
        address
        city
        state
        zip
        purchaseDate
        purchasePrice
        tasks {
          nextToken
        }
        createdAt
        updatedAt
      }
      vendorHistory {
        items {
          id
          taskID
          vendorID
          satisfaction
          dateOfService
          duration
          comment
          createdAt
          updatedAt
        }
        nextToken
      }
      tools {
        items {
          id
          taskID
          name
          purchaseDate
          purchasePrice
          createdAt
          updatedAt
        }
        nextToken
      }
      consumableUsage {
        items {
          id
          consumableUsageID
          taskID
          consumableID
          name
          usageAmt
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listTasks = /* GraphQL */ `
  query ListTasks(
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        frequency
        houseID
        house {
          id
          name
          address
          city
          state
          zip
          purchaseDate
          purchasePrice
          createdAt
          updatedAt
        }
        vendorHistory {
          nextToken
        }
        tools {
          nextToken
        }
        consumableUsage {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getVendorHistory = /* GraphQL */ `
  query GetVendorHistory($id: ID!) {
    getVendorHistory(id: $id) {
      id
      taskID
      task {
        id
        name
        description
        frequency
        houseID
        house {
          id
          name
          address
          city
          state
          zip
          purchaseDate
          purchasePrice
          createdAt
          updatedAt
        }
        vendorHistory {
          nextToken
        }
        tools {
          nextToken
        }
        consumableUsage {
          nextToken
        }
        createdAt
        updatedAt
      }
      vendorID
      vendor {
        id
        name
        address
        city
        state
        zip
        phone
        email
        createdAt
        updatedAt
      }
      satisfaction
      dateOfService
      duration
      comment
      createdAt
      updatedAt
    }
  }
`;
export const listVendorHistorys = /* GraphQL */ `
  query ListVendorHistorys(
    $filter: ModelVendorHistoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVendorHistorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        taskID
        task {
          id
          name
          description
          frequency
          houseID
          createdAt
          updatedAt
        }
        vendorID
        vendor {
          id
          name
          address
          city
          state
          zip
          phone
          email
          createdAt
          updatedAt
        }
        satisfaction
        dateOfService
        duration
        comment
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getVendor = /* GraphQL */ `
  query GetVendor($id: ID!) {
    getVendor(id: $id) {
      id
      name
      address
      city
      state
      zip
      phone
      email
      createdAt
      updatedAt
    }
  }
`;
export const listVendors = /* GraphQL */ `
  query ListVendors(
    $filter: ModelVendorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVendors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        address
        city
        state
        zip
        phone
        email
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTool = /* GraphQL */ `
  query GetTool($id: ID!) {
    getTool(id: $id) {
      id
      taskID
      task {
        id
        name
        description
        frequency
        houseID
        house {
          id
          name
          address
          city
          state
          zip
          purchaseDate
          purchasePrice
          createdAt
          updatedAt
        }
        vendorHistory {
          nextToken
        }
        tools {
          nextToken
        }
        consumableUsage {
          nextToken
        }
        createdAt
        updatedAt
      }
      name
      purchaseDate
      purchasePrice
      createdAt
      updatedAt
    }
  }
`;
export const listTools = /* GraphQL */ `
  query ListTools(
    $filter: ModelToolFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTools(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        taskID
        task {
          id
          name
          description
          frequency
          houseID
          createdAt
          updatedAt
        }
        name
        purchaseDate
        purchasePrice
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getConsumable = /* GraphQL */ `
  query GetConsumable($id: ID!) {
    getConsumable(id: $id) {
      id
      name
      description
      amount
      pricePerUnit
      createdAt
      updatedAt
    }
  }
`;
export const listConsumables = /* GraphQL */ `
  query ListConsumables(
    $filter: ModelConsumableFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConsumables(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        amount
        pricePerUnit
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getConsumableUsage = /* GraphQL */ `
  query GetConsumableUsage($id: ID!) {
    getConsumableUsage(id: $id) {
      id
      consumableUsageID
      taskID
      task {
        id
        name
        description
        frequency
        houseID
        house {
          id
          name
          address
          city
          state
          zip
          purchaseDate
          purchasePrice
          createdAt
          updatedAt
        }
        vendorHistory {
          nextToken
        }
        tools {
          nextToken
        }
        consumableUsage {
          nextToken
        }
        createdAt
        updatedAt
      }
      consumableID
      consumable {
        id
        name
        description
        amount
        pricePerUnit
        createdAt
        updatedAt
      }
      name
      usageAmt
      createdAt
      updatedAt
    }
  }
`;
export const listConsumableUsages = /* GraphQL */ `
  query ListConsumableUsages(
    $filter: ModelConsumableUsageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConsumableUsages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        consumableUsageID
        taskID
        task {
          id
          name
          description
          frequency
          houseID
          createdAt
          updatedAt
        }
        consumableID
        consumable {
          id
          name
          description
          amount
          pricePerUnit
          createdAt
          updatedAt
        }
        name
        usageAmt
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
