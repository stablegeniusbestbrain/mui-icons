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
      _react2.default.createElement('path', { d: 'M12.2 22.7q0-.2-.2-.2-.8 0-1.4-.6t-.5-1.3q0-.2-.2-.2t-.3.2q0 .9.7 1.6t1.7.7q.2 0 .2-.2zm-8.9-3.8h17.4q-3.6-4.1-3.6-11.2 0-.7-.3-1.4t-.9-1.4-1.6-1-2.3-.5-2.3.5-1.6 1-.9 1.4-.3 1.4q0 7.1-3.6 11.2zm19.8 0q0 .7-.5 1.2t-1.2.5h-6q0 1.4-1 2.4T12 24t-2.4-1-1-2.4h-6q-.7 0-1.2-.5t-.5-1.2l1.2-1.2q.6-.6 1.1-1.6t1-2.1.7-2.8.2-3.5q0-2 1.6-3.8t4.1-2.1q-.1-.2-.1-.5 0-.6.4-.9T12 0t.9.4.4.9q0 .3-.1.5 2.5.4 4.1 2.1t1.6 3.8q0 1.9.2 3.5t.7 2.8 1 2.1 1.1 1.6 1.2 1.2z' })
    )
  );
};

exports.default = Icon;