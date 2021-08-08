import Realm from "realm";

// Declare Schema
class EmployeeSchema extends Realm.Object {}
EmployeeSchema.schema = {
    name: 'employee_details',
    properties: {
        name: 'string',
        phone: 'int',
        username: 'string',
        profile_image: 'string',
        website: 'string'
    
    }
};

// Create realm
let realm = new Realm({schema: [EmployeeSchema], schemaVersion: 1});

// Export the realm
export default realm;