/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateHome = /* GraphQL */ `
  subscription OnCreateHome {
    onCreateHome {
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
export const onUpdateHome = /* GraphQL */ `
  subscription OnUpdateHome {
    onUpdateHome {
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
export const onDeleteHome = /* GraphQL */ `
  subscription OnDeleteHome {
    onDeleteHome {
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
export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask {
    onCreateTask {
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
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask {
    onUpdateTask {
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
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask {
    onDeleteTask {
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
export const onCreateVendorHistory = /* GraphQL */ `
  subscription OnCreateVendorHistory {
    onCreateVendorHistory {
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
export const onUpdateVendorHistory = /* GraphQL */ `
  subscription OnUpdateVendorHistory {
    onUpdateVendorHistory {
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
export const onDeleteVendorHistory = /* GraphQL */ `
  subscription OnDeleteVendorHistory {
    onDeleteVendorHistory {
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
export const onCreateVendor = /* GraphQL */ `
  subscription OnCreateVendor {
    onCreateVendor {
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
export const onUpdateVendor = /* GraphQL */ `
  subscription OnUpdateVendor {
    onUpdateVendor {
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
export const onDeleteVendor = /* GraphQL */ `
  subscription OnDeleteVendor {
    onDeleteVendor {
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
export const onCreateTool = /* GraphQL */ `
  subscription OnCreateTool {
    onCreateTool {
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
export const onUpdateTool = /* GraphQL */ `
  subscription OnUpdateTool {
    onUpdateTool {
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
export const onDeleteTool = /* GraphQL */ `
  subscription OnDeleteTool {
    onDeleteTool {
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
export const onCreateConsumable = /* GraphQL */ `
  subscription OnCreateConsumable {
    onCreateConsumable {
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
export const onUpdateConsumable = /* GraphQL */ `
  subscription OnUpdateConsumable {
    onUpdateConsumable {
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
export const onDeleteConsumable = /* GraphQL */ `
  subscription OnDeleteConsumable {
    onDeleteConsumable {
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
export const onCreateConsumableUsage = /* GraphQL */ `
  subscription OnCreateConsumableUsage {
    onCreateConsumableUsage {
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
export const onUpdateConsumableUsage = /* GraphQL */ `
  subscription OnUpdateConsumableUsage {
    onUpdateConsumableUsage {
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
export const onDeleteConsumableUsage = /* GraphQL */ `
  subscription OnDeleteConsumableUsage {
    onDeleteConsumableUsage {
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
