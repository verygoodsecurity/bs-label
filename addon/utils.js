import { isBlank } from 'ember-utils';
import { assign } from 'ember-platform';
import numeral from 'numeral';
import moment from 'moment';

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

export function tag(textValue, state) {
  const classNames = isBlank(state) ?
    'label tag label-default tag-default' :
    `label tag label-${state} tag-${state}`;
  return text(textValue, { classNames });
}

export function currency(amount) {
  return text(numeral(amount).divide(100).format('$0,0.00'), {
    classNames: 'text-currency',
  });
}

export function number(amount, format) {
  return text(numeral(amount).format(format), {
    classNames: 'text-number',
  });
}

export function date(date, format='lll') {
  return text(moment(date).format(format), {
    classNames: 'text-date',
  });
}
