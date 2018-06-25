'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgIcon = require('@material-ui/core/SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Icon = function Icon(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'g',
      null,
      _react2.default.createElement('path', { d: 'M17.9 11.1q0 .5-.4.9t-.8.3H7.3q-.5 0-.8-.3t-.3-.9.3-.8.8-.3h9.4q.5 0 .8.3t.4.8zm2.8 0q0-1.1-.3-2.2H7.3q-.5 0-.8-.4t-.4-.8q0-.5.4-.8t.8-.3h12.1q-1.1-1.9-3.1-3.1T12 2.4q-2.4 0-4.4 1.2T4.4 6.8t-1.1 4.3q0 1.2.3 2.3h13.1q.5 0 .8.4t.4.8q0 .4-.4.8t-.8.3H4.6q1.1 1.9 3.1 3.1t4.3 1.1q1.8 0 3.4-.7t2.8-1.9 1.8-2.8.7-3.4zm5-3.4q0 .5-.3.8t-.8.4h-1.8q.2 1.1.2 2.2 0 2.3-.8 4.3t-2.4 3.5-3.5 2.4-4.3.9q-3.3 0-6-1.8t-4-4.7H-.6q-.4 0-.8-.3t-.3-.8q0-.5.3-.8t.8-.4h1.8Q1 12.3 1 11.1q0-2.2.9-4.2t2.3-3.6T7.7 1 12 .1q3.3 0 6 1.8t4 4.7h2.6q.4 0 .8.3t.3.8z' })
    )
  );
};

exports.default = Icon;