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
      _react2.default.createElement('path', { d: 'M11.3 6.3q0 .8-.3 1.5t-.8 1.3-1.4.5q-1 0-1.8-.8T5.7 7t-.4-2q0-.8.3-1.5t.8-1.3 1.4-.5q1.1 0 1.9.8t1.2 1.8.4 2zm-4.6 6.5q0 1.1-.5 1.9t-1.6.7q-1.1 0-1.9-.7t-1.4-1.8-.4-2q0-1.1.5-1.9T3 8.2q1 0 1.9.8t1.4 1.7.4 2.1zm5.3-.4q1.6 0 3.4 1.3t3.1 3.2 1.2 3.4q0 .6-.2 1t-.7.6-.8.3-1 .1q-1 0-2.6-.6t-2.4-.6q-.9 0-2.6.6t-2.7.6q-2.4 0-2.4-2 0-1.1.7-2.5t1.9-2.6 2.5-2 2.6-.8zm3.2-2.8q-.8 0-1.4-.5T13 7.8t-.3-1.5q0-1 .4-2t1.2-1.8 1.9-.8q.8 0 1.4.5t.8 1.3.3 1.5q0 1-.4 2T17 8.8t-1.8.8zM21 8.2q1 0 1.6.8t.5 1.9q0 1-.4 2t-1.4 1.8-1.9.7q-1 0-1.6-.7t-.5-1.9q0-1 .4-2.1T19.1 9t1.9-.8z' })
    )
  );
};

exports.default = Icon;