import { type SchemaTypeDefinition } from "sanity";
import blockContent from "./schemaTypes/blockContent";
import post from "./schemaTypes/content";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, blockContent],
};
