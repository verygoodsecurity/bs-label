import { isBlank } from 'ember-utils';
import { assign } from 'ember-platform';
import numeral from 'numeral';
import moment from 'moment';

function mergeProperties(classNames, ...args) {
  return assign({
    classNames,
  }, ...args);
}

function g(componentName, properties) {
  return {
    componentName: `bs-label/${componentName}`,
    properties,
  };
}

export function text(value, properties) {
  return g('text', assign({
    text: value,
  }, properties));
}

export function tag(textValue, state, properties={}) {
  const classNames = isBlank(state) ?
    'label tag label-default tag-default' :
    `label tag label-${state} tag-${state}`;
  return text(textValue, mergeProperties(classNames, properties));
}

export function currency(amount, properties={}) {
  const t = numeral(amount).divide(100).format('$0,0.00');
  return text(t, mergeProperties('text-currency', properties));
}

export function number(amount, format, properties={}) {
  const t = numeral(amount).format(format)
  return text(t, mergeProperties('text-number', properties));
}

export function date(date, format='lll', properties={}) {
  const t = moment(date).format(format);
  return text(t, mergeProperties('text-date', properties));
}

export function linkTo(text, params, options={}) {
  return g('link-to', assign({
    text,
    params
  }, options));
}
