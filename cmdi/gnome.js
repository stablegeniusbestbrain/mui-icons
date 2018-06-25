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
      _react2.default.createElement('path', { d: 'M18.4 2c-4.1 0-4.9 5.9-2.6 5.9 2.4 0 6.8-5.9 2.6-5.9zm-6.4.7h-.2c-2.4.3-1.5 4.4-.3 4.5 1.2.1 2.5-4.5.5-4.5zM7.9 4.3c-.1 0-.2.1-.4.1-1.9.8-.3 4 .8 3.8 1-.2 1.1-3.9-.4-3.9zm-3 2.5c-.1 0-.3.1-.5.2-1.5 1.1.5 3.6 1.4 3.2.8-.3.3-3.3-.9-3.4zm8.4 2c-3.2 0-7.3 1.6-8 4.8-.8 3.5 3.3 8.4 7.5 8.4 2 0 4.4-1.9 4.9-4.2.3-1.8-4.1-1.1-3.9.1.2 1.4-1 2.1-2.3 1.2-3.8-2.9 6.4-4.4 5.8-8.4-.3-1.3-2-1.9-4-1.9z' })
    )
  );
};

exports.default = Icon;