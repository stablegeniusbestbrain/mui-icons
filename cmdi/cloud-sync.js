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
      _react2.default.createElement('path', { d: 'M12 4c3.6 0 6.7 2.6 7.4 6 2.5.2 4.6 2.4 4.6 5 0 2.8-2.2 5-5 5H6c-3.3 0-6-2.7-6-6 0-3.1 2.3-5.6 5.3-6C6.6 5.6 9.1 4 12 4zM7.5 9.7c-1.4 1.8-1.3 4.4.3 6 .9.8 2 1.3 3.2 1.3v1.9l2.8-2.9-2.8-2.8V15c-.7 0-1.3-.3-1.8-.7-.8-.9-.9-2.2-.3-3.2L7.5 9.7zM9.2 9l1.4 1.4 1.4 1.4V10c.7 0 1.3.3 1.8.7.8.9.9 2.2.3 3.2l1.4 1.4c1.4-1.8 1.3-4.4-.3-6-.9-.8-2-1.3-3.2-1.3V6.1L9.2 9z' })
    )
  );
};

exports.default = Icon;