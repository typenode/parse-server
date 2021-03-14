import { GraphQLInputObjectType, GraphQLNonNull, GraphQLObjectType } from 'graphql';
import { transformOutputTypeToGraphQL } from './outputType';
import { ParseGraphQLSchema } from '../ParseGraphQLSchema';
import { transformInputTypeToGraphQL } from './inputType';

export function transformObjectOutputTypeToGraphQL(
  parseClass,
  parseGraphQLSchema: ParseGraphQLSchema
) {
  const parseFields = Object.keys(parseClass.fields);
  const graphQLTypeName = parseClass.className;
  let type = parseGraphQLSchema.graphQLTypes.find(
    existingType => existingType.name === graphQLTypeName
  );
  if (type) {
    console.info(type.name);
    return type;
  }
  const fields = parseFields.reduce((fields, field) => {
    let type;
    if (parseClass.fields[field].type === 'Object' && parseClass.fields[field].schema) {
      type = transformObjectOutputTypeToGraphQL(
        parseClass.fields[field].schema,
        parseGraphQLSchema
      );
    } else {
      type = transformOutputTypeToGraphQL(
        parseClass.fields[field].type,
        parseClass.fields[field].targetClass,
        parseGraphQLSchema.parseClassTypes
      );
    }
    if (type) {
      return {
        ...fields,
        [field]: {
          description: `This is the object ${field}.`,
          type: parseClass.fields[field].required ? new GraphQLNonNull(type) : type,
        },
      };
    }
    return fields;
  }, {});
  type = new GraphQLObjectType({
    name: graphQLTypeName,
    description: `The ${graphQLTypeName} object output type.`,
    fields,
  });
  parseGraphQLSchema.addGraphQLType(type);
  return type;
}
export function transformObjectInputTypeToGraphQL(
  parseClass,
  parseGraphQLSchema: ParseGraphQLSchema
) {
  const parseFields = Object.keys(parseClass.fields);
  const graphQLTypeName = `${parseClass.className}Input`;
  let type = parseGraphQLSchema.graphQLTypes.find(
    existingType => existingType.name === graphQLTypeName
  );
  if (type) {
    return type;
  }
  const fields = parseFields.reduce((fields, field) => {
    let type;
    if (parseClass.fields[field].type === 'Object' && parseClass.fields[field].schema) {
      type = transformObjectInputTypeToGraphQL(parseClass.fields[field].schema, parseGraphQLSchema);
    } else {
      type = transformInputTypeToGraphQL(
        parseClass.fields[field].type,
        parseClass.fields[field].targetClass,
        parseGraphQLSchema.parseClassTypes
      );
    }
    if (type) {
      return {
        ...fields,
        [field]: {
          description: `This is the object ${field}.`,
          type: parseClass.fields[field].required ? new GraphQLNonNull(type) : type,
        },
      };
    }
    return fields;
  }, {});
  type = new GraphQLInputObjectType({
    name: graphQLTypeName,
    description: `The ${graphQLTypeName} object input type.`,
    fields,
  });
  parseGraphQLSchema.addGraphQLType(type);
  return type;
}
