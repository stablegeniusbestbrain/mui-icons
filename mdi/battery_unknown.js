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
      _react2.default.createElement('path', { d: 'M15.7 4H14V2h-4v2H8.3C7.6 4 7 4.6 7 5.3v15.4c0 .7.6 1.3 1.3 1.3h7.4c.7 0 1.3-.6 1.3-1.3V5.3c0-.7-.6-1.3-1.3-1.3zm-2.8 13.9H11v-1.8h1.9v1.8zm1.4-5.2l-.7.7c-.5.5-.8 1.1-.8 1.6h-1.6c0-.8.5-1.5.9-2l1-.9c.2-.3.4-.7.4-1.1 0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5H9c0-1.7 1.3-3 3-3s3 1.3 3 3c0 .7-.3 1.3-.7 1.7z' })
    )
  );
};

exports.default = Icon;