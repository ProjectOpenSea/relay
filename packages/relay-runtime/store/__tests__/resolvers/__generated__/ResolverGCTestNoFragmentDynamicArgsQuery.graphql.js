/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @oncall relay
 *
 * @generated SignedSource<<a569afede10e2153160c585fce5ca6e8>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ClientRequest, ClientQuery } from 'relay-runtime';
import {hello as queryHelloResolverType} from "../HelloWorldResolver.js";
// Type assertion validating that `queryHelloResolverType` resolver is correctly implemented.
// A type error here indicates that the type signature of the resolver module is incorrect.
(queryHelloResolverType: (
  args: {|
    world: string,
  |},
) => mixed);
export type ResolverGCTestNoFragmentDynamicArgsQuery$variables = {|
  world: string,
|};
export type ResolverGCTestNoFragmentDynamicArgsQuery$data = {|
  +hello: ?$Call<<R>((...empty[]) => R) => R, typeof queryHelloResolverType>,
|};
export type ResolverGCTestNoFragmentDynamicArgsQuery = {|
  response: ResolverGCTestNoFragmentDynamicArgsQuery$data,
  variables: ResolverGCTestNoFragmentDynamicArgsQuery$variables,
|};
*/

var node/*: ClientRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "world"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "world",
    "variableName": "world"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ResolverGCTestNoFragmentDynamicArgsQuery",
    "selections": [
      {
        "kind": "ClientExtension",
        "selections": [
          {
            "alias": null,
            "args": (v1/*: any*/),
            "fragment": null,
            "kind": "RelayResolver",
            "name": "hello",
            "resolverModule": require('./../HelloWorldResolver').hello,
            "path": "hello"
          }
        ]
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ResolverGCTestNoFragmentDynamicArgsQuery",
    "selections": [
      {
        "kind": "ClientExtension",
        "selections": [
          {
            "name": "hello",
            "args": (v1/*: any*/),
            "fragment": null,
            "kind": "RelayResolver",
            "storageKey": null,
            "isOutputType": false
          }
        ]
      }
    ]
  },
  "params": {
    "cacheID": "91dffec092f8ba160cc8f873278193be",
    "id": null,
    "metadata": {},
    "name": "ResolverGCTestNoFragmentDynamicArgsQuery",
    "operationKind": "query",
    "text": null
  }
};
})();

if (__DEV__) {
  (node/*: any*/).hash = "c37df8787a01c657da905bd28983769b";
}

module.exports = ((node/*: any*/)/*: ClientQuery<
  ResolverGCTestNoFragmentDynamicArgsQuery$variables,
  ResolverGCTestNoFragmentDynamicArgsQuery$data,
>*/);
