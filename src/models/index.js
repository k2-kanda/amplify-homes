// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Home } = initSchema(schema);

export {
  User,
  Home
};