'use strict';

import { graphqlLambda, graphiqlLambda } from 'apollo-server-lambda';
import lambdaPlayground from 'graphql-playground-middleware-lambda';
import { makeExecutableSchema } from 'graphql-tools';
import { schema } from './schema';
import { resolvers }  from './resolvers';

const myGraphQLSchema = makeExecutableSchema({
    typeDefs: schema,
    resolvers,
    logger: console,
});

exports.graphqlHandler = function graphqlHandler(event, context, callback) {
    function callbackWithHeaders(error, output) {
        // eslint-disable-next-line no-param-reassign
        output.headers['Access-Control-Allow-Origin'] = '*';
        callback(error, output);
    }

    const handler = graphqlLambda({ schema: myGraphQLSchema });
    return handler(event, context, callbackWithHeaders);
};

exports.graphiqlHandler = graphiqlLambda({
    endpointURL: process.env.REACT_APP_GRAPHQL_ENDPOINT
        ? process.env.REACT_APP_GRAPHQL_ENDPOINT
        : '/graphql',
});