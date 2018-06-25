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
      _react2.default.createElement('path', { d: 'M8.6 8.6l-1.4-.2c-.7 3.3-.7 5.8.4 7.1 1 1.1 4.3 1.1 4.3 1.1s3.4 0 4.4-1.1c1.1-1.3 1.1-3.8.4-7.1l-1.4.2s1.2 5.3-.6 6.1c-.9.4-2.8.4-2.8.4s-1.8 0-2.7-.4c-1.9-.8-.6-6.1-.6-6.1zM12 3c5 0 9 4 9 9s-4 9-9 9-9-4-9-9 4-9 9-9z' })
    )
  );
};

exports.default = Icon;