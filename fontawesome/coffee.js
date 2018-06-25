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
      _react2.default.createElement('path', { d: 'M21.4 8.6q0-1.1-.7-1.8T18.9 6H18v5.1h.9q1 0 1.8-.7t.7-1.8zM-.9 18.9h24q0 1.4-1 2.4t-2.4 1H2.6q-1.4 0-2.5-1t-1-2.4zM24 8.6q0 2.1-1.5 3.6t-3.6 1.5H18v.4q0 1.3-.9 2.2t-2.1.8H5.6q-1.3 0-2.1-.8t-.9-2.2V4.3q0-.4.2-.6t.6-.3h15.5q2.1 0 3.6 1.5T24 8.6z' })
    )
  );
};

exports.default = Icon;