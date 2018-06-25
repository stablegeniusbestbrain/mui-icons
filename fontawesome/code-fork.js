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
      _react2.default.createElement('path', { d: 'M9 19.7q0-.5-.4-.9t-.9-.4-.9.4-.4.9.4.9.9.4.9-.4.4-.9zM9 4.3q0-.6-.4-.9T7.7 3t-.9.4-.4.9.4.9.9.4.9-.4.4-.9zM17.6 6q0-.5-.4-.9t-.9-.4-.9.4-.4.9.4.9.9.4.9-.4.4-.9zm1.3 0q0 .7-.4 1.3t-.9.9q-.1 3.9-3.1 5.6-.9.5-2.7 1.1-1.7.5-2.2.9T9 17.1v.4q.6.3.9.9t.4 1.3q0 1.1-.8 1.8t-1.8.8-1.8-.8-.8-1.8q0-.7.4-1.3t.9-.9v-11q-.6-.3-.9-.9t-.4-1.3q0-1.1.8-1.8t1.8-.8 1.8.8.8 1.8q0 .7-.4 1.3t-.9.9v6.7q.7-.4 2.1-.8.7-.2 1.1-.4t1-.4.8-.5.5-.7.4-1 .1-1.2q-.6-.3-.9-.9T13.7 6q0-1.1.8-1.8t1.8-.8 1.8.8.8 1.8z' })
    )
  );
};

exports.default = Icon;