/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createHome = /* GraphQL */ `
  mutation CreateHome(
    $input: CreateHomeInput!
    $condition: ModelHomeConditionInput
  ) {
    createHome(input: $input, condition: $condition) {
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
export const updateHome = /* GraphQL */ `
  mutation UpdateHome(
    $input: UpdateHomeInput!
    $condition: ModelHomeConditionInput
  ) {
    updateHome(input: $input, condition: $condition) {
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
export const deleteHome = /* GraphQL */ `
  mutation DeleteHome(
    $input: DeleteHomeInput!
    $condition: ModelHomeConditionInput
  ) {
    deleteHome(input: $input, condition: $condition) {
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
export const createTask = /* GraphQL */ `
  mutation CreateTask(
    $input: CreateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    createTask(input: $input, condition: $condition) {
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
export const updateTask = /* GraphQL */ `
  mutation UpdateTask(
    $input: UpdateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    updateTask(input: $input, condition: $condition) {
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
export const deleteTask = /* GraphQL */ `
  mutation DeleteTask(
    $input: DeleteTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    deleteTask(input: $input, condition: $condition) {
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
export const createVendorHistory = /* GraphQL */ `
  mutation CreateVendorHistory(
    $input: CreateVendorHistoryInput!
    $condition: ModelVendorHistoryConditionInput
  ) {
    createVendorHistory(input: $input, condition: $condition) {
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
export const updateVendorHistory = /* GraphQL */ `
  mutation UpdateVendorHistory(
    $input: UpdateVendorHistoryInput!
    $condition: ModelVendorHistoryConditionInput
  ) {
    updateVendorHistory(input: $input, condition: $condition) {
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
export const deleteVendorHistory = /* GraphQL */ `
  mutation DeleteVendorHistory(
    $input: DeleteVendorHistoryInput!
    $condition: ModelVendorHistoryConditionInput
  ) {
    deleteVendorHistory(input: $input, condition: $condition) {
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
export const createVendor = /* GraphQL */ `
  mutation CreateVendor(
    $input: CreateVendorInput!
    $condition: ModelVendorConditionInput
  ) {
    createVendor(input: $input, condition: $condition) {
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
export const updateVendor = /* GraphQL */ `
  mutation UpdateVendor(
    $input: UpdateVendorInput!
    $condition: ModelVendorConditionInput
  ) {
    updateVendor(input: $input, condition: $condition) {
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
export const deleteVendor = /* GraphQL */ `
  mutation DeleteVendor(
    $input: DeleteVendorInput!
    $condition: ModelVendorConditionInput
  ) {
    deleteVendor(input: $input, condition: $condition) {
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
export const createTool = /* GraphQL */ `
  mutation CreateTool(
    $input: CreateToolInput!
    $condition: ModelToolConditionInput
  ) {
    createTool(input: $input, condition: $condition) {
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
export const updateTool = /* GraphQL */ `
  mutation UpdateTool(
    $input: UpdateToolInput!
    $condition: ModelToolConditionInput
  ) {
    updateTool(input: $input, condition: $condition) {
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
export const deleteTool = /* GraphQL */ `
  mutation DeleteTool(
    $input: DeleteToolInput!
    $condition: ModelToolConditionInput
  ) {
    deleteTool(input: $input, condition: $condition) {
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
export const createConsumable = /* GraphQL */ `
  mutation CreateConsumable(
    $input: CreateConsumableInput!
    $condition: ModelConsumableConditionInput
  ) {
    createConsumable(input: $input, condition: $condition) {
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
export const updateConsumable = /* GraphQL */ `
  mutation UpdateConsumable(
    $input: UpdateConsumableInput!
    $condition: ModelConsumableConditionInput
  ) {
    updateConsumable(input: $input, condition: $condition) {
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
export const deleteConsumable = /* GraphQL */ `
  mutation DeleteConsumable(
    $input: DeleteConsumableInput!
    $condition: ModelConsumableConditionInput
  ) {
    deleteConsumable(input: $input, condition: $condition) {
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
export const createConsumableUsage = /* GraphQL */ `
  mutation CreateConsumableUsage(
    $input: CreateConsumableUsageInput!
    $condition: ModelConsumableUsageConditionInput
  ) {
    createConsumableUsage(input: $input, condition: $condition) {
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
export const updateConsumableUsage = /* GraphQL */ `
  mutation UpdateConsumableUsage(
    $input: UpdateConsumableUsageInput!
    $condition: ModelConsumableUsageConditionInput
  ) {
    updateConsumableUsage(input: $input, condition: $condition) {
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
export const deleteConsumableUsage = /* GraphQL */ `
  mutation DeleteConsumableUsage(
    $input: DeleteConsumableUsageInput!
    $condition: ModelConsumableUsageConditionInput
  ) {
    deleteConsumableUsage(input: $input, condition: $condition) {
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
