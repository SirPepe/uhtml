'use strict';
const {MapSet, WeakMapSet} = require('@webreflection/mapset');

const {render: $render, html, svg} = require('./index.js');

// Sender (SW, Worker, postMessage)
const ids = new WeakMapSet;
let id = 0;

const tag = type => (template, ...values) => ({
  id: ids.get(template) ||
      ids.set(template, id++),
  type,
  values,
  template
});

html.json = tag('html');
svg.json = tag('svg');

// Receiver (onmessage, from SW, Workers, etc)
const templates = new MapSet;

const unroll = ({type, template, values, id}) => (
  (type === 'svg' ? svg : html).apply(
    null,
    [
      templates.get(id) ||
      templates.set(id, template)
    ].concat(values.map(asJSON))
  )
);

const asJSON = value => isJSON(value) ? unroll(value) : value;

const isJSON = thing => (
  typeof thing === 'object' &&
  thing !== null &&
  'id' in thing &&
  'type' in thing &&
  'values' in thing &&
  'template' in thing
);

const render = (where, what) => $render(
  where,
  isJSON(what) ? unroll(what) : what
);

exports.render = render;
exports.html = html;
exports.svg = svg;
