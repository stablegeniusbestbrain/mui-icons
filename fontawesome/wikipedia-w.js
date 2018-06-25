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
      _react2.default.createElement('path', { d: 'M16.6 22l-4-9.4q-.3.7-2.1 4.1T7.8 22h-.3q-.3 0-.4-.1-1.1-2.5-3.4-7.8t-3.5-8q-.3-.7-.9-1.4T-2 3.3t-1.4-.6v-.3V2h7.8v.7q-.5 0-1.1.2t-.9.6-.1.9q.3.8 2.9 6.6t3.1 7.3q.5-.8 1.9-3.6t1.8-3.3q-.3-.5-1.7-3.8T8.5 3.7q-.5-.9-2.7-1v-.6h6.8v.6q-.8 0-1.2.3t-.2 1q.5.9 1.2 2.5T13.5 9q1.5-2.9 2.4-4.8.3-.8-.2-1.1T14 2.7v-.6H18.7q1 0 1.2-.1v.7q-.8 0-1.6.4t-1.2 1.1l-2.8 6q.2.4 1.7 3.8t1.6 3.7l5.9-13.6q-.2-.5-.6-.9t-.9-.4-.7-.1V2l6.1.1v.6q-1.8.1-2.7 2-7 16.2-7.5 17.3h-.6z' })
    )
  );
};

exports.default = Icon;