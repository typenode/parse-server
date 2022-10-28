import {
  GraphQLBoolean,
  GraphQLInputObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
} from 'graphql';
import { transformOutputTypeToGraphQL } from './outputType';
import { ParseGraphQLSchema } from '../ParseGraphQLSchema';
import { transformInputTypeToGraphQL } from './inputType';
import { transformConstraintTypeToGraphQL } from './constraintType';

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
    return type;
  }
  const fields = parseFields.reduce((fields, field) => {
    let type;
    if (parseClass.fields[field].schema) {
      type = transformObjectOutputTypeToGraphQL(
        parseClass.fields[field].schema,
        parseGraphQLSchema
      );
      if (parseClass.fields[field].type === 'Array') {
        type = new GraphQLList(type);
      }
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
    if (parseClass.fields[field].schema) {
      type = transformObjectInputTypeToGraphQL(parseClass.fields[field].schema, parseGraphQLSchema);
      if (parseClass.fields[field].type === 'Array') {
        type = new GraphQLList(type);
      }
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

export function transformObjectConstraintTypeToGraphQL(
  parseClass,
  parseGraphQLSchema: ParseGraphQLSchema
) {
  const parseFields = Object.keys(parseClass.fields);
  const graphQLTypeName = `${parseClass.className}WhereInput`;
  let type = parseGraphQLSchema.graphQLTypes.find(
    existingType => existingType.name === graphQLTypeName
  );
  if (type) {
    return type;
  }
  const fields = parseFields.reduce((fields, field) => {
    let type;
    if (parseClass.fields[field].schema) {
      type = transformObjectConstraintTypeToGraphQL(
        parseClass.fields[field].schema,
        parseGraphQLSchema
      );
      if (parseClass.fields[field].type === 'Array') {
        const classGraphQLRelationConstraintsTypeName = `${parseClass.fields[field].schema.className}RelationWhereInput`;
        const constraintsType = parseGraphQLSchema.graphQLTypes.find(
          existingType => existingType.name === classGraphQLRelationConstraintsTypeName
        );
        if (constraintsType) {
          type = constraintsType;
        } else {
          const nestedType = type;
          type = new GraphQLInputObjectType({
            name: classGraphQLRelationConstraintsTypeName,
            description: `The ${classGraphQLRelationConstraintsTypeName} input type is used in operations that involve filtering objects of ${parseClass.className} class.`,
            fields: () => ({
              have: {
                description:
                  'Run a relational/pointer query where at least one child object can match.',
                type: nestedType,
              },
              haveNot: {
                description:
                  'Run an inverted relational/pointer query where at least one child object can match.',
                type: nestedType,
              },
              exists: {
                description: 'Check if the relation/pointer contains objects.',
                type: GraphQLBoolean,
              },
            }),
          });
          parseGraphQLSchema.addGraphQLType(type);
        }
      }
    } else {
      type = transformConstraintTypeToGraphQL(
        parseClass.fields[field].type,
        parseClass.fields[field].targetClass,
        parseGraphQLSchema.parseClassTypes,
        field
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
    description: `The ${graphQLTypeName} input type is used in operations that involve filtering objects of ${parseClass.className} class.`,
    fields: () => ({
      ...fields,
      OR: {
        description: 'This is the OR operator to compound constraints.',
        type: new GraphQLList(new GraphQLNonNull(type)),
      },
      AND: {
        description: 'This is the AND operator to compound constraints.',
        type: new GraphQLList(new GraphQLNonNull(type)),
      },
      NOR: {
        description: 'This is the NOR operator to compound constraints.',
        type: new GraphQLList(new GraphQLNonNull(type)),
      },
    }),
  });
  parseGraphQLSchema.addGraphQLType(type);
  return type;
}
