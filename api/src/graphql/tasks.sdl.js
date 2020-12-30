export const schema = gql`
  type Task {
    id: Int!
    name: String!
    description: String!
    date: DateTime!
  }

  type Query {
    tasks: [Task!]!
    task(id: Int!): Task
  }

  input CreateTaskInput {
    name: String!
    description: String!
    date: DateTime!
  }

  input UpdateTaskInput {
    name: String
    description: String
    date: DateTime
  }

  type Mutation {
    createTask(input: CreateTaskInput!): Task!
    updateTask(id: Int!, input: UpdateTaskInput!): Task!
    deleteTask(id: Int!): Task!
  }
`
