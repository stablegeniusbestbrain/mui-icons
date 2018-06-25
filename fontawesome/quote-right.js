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
      _react2.default.createElement('path', { d: 'M11.1 4.3v9.4q0 1.4-.5 2.7t-1.5 2.2T6.9 20t-2.6.6h-.9q-.3 0-.6-.3t-.2-.6V18q0-.3.2-.6t.6-.3h.9q1.4 0 2.4-1t1-2.4v-.4q0-.6-.4-.9t-.9-.4h-3q-1 0-1.8-.8T.9 9.4V4.3q0-1.1.7-1.8t1.8-.8h5.2q1 0 1.8.8t.7 1.8zm12 0v9.4q0 1.4-.5 2.7t-1.5 2.2-2.2 1.4-2.6.6h-.9q-.3 0-.6-.3t-.2-.6V18q0-.3.2-.6t.6-.3h.9q1.4 0 2.4-1t1-2.4v-.4q0-.6-.4-.9t-.9-.4h-3q-1 0-1.8-.8t-.7-1.8V4.3q0-1.1.7-1.8t1.8-.8h5.2q1 0 1.8.8t.7 1.8z' })
    )
  );
};

exports.default = Icon;