/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

import React from 'react';
import Playground from '../components/Playground/src';

const playgroundInitialState = {
  width: 500,
  height: 500,
  alignItems: 1,
  padding: {
    top: '20',
    right: '20',
    bottom: '20',
    left: '20',
  },
  children: [
    {
      width: 100,
      height: 100,
      minWidth: null,
      maxWidth: null,
      minHeight: null,
      maxHeight: null,
    },
    {
      width: 100,
      height: 100,
      margin: {
        right: '20',
        left: '20',
      },
      flexGrow: '1',
      minWidth: null,
      maxWidth: null,
      minHeight: null,
      maxHeight: null,
    },
    {
      width: 100,
      height: 100,
      minWidth: null,
      maxWidth: null,
      minHeight: null,
      maxHeight: null,
    },
  ],
  minWidth: null,
  maxWidth: null,
  minHeight: null,
  maxHeight: null,
};

export default () => (
  <Playground
    selectedNodePath={[]}
    showGuides={true}
    height={601}
    layoutDefinition={playgroundInitialState}
  />
);
