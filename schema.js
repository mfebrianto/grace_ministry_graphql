const schema = `
type Query {
    getBibleSchoolInfo(id: String!): BibleSchool!
    getStudentInfo(id: String!): Student!
}

type BibleSchool {
    id: Int
    name: String!
    address: String!
}

type Student {
    id: Int
    name: String!
}`;

export { schema };