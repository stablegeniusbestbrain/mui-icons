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
      _react2.default.createElement('path', { d: 'M5 3h14c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2zm10.1 13.5c-.3-1.4-.6-2.6-1-3.7l1.1-.1c.7 0 1.4.1 2.2.3-.3 1.4-1.1 2.7-2.3 3.5zm-3.1 1c-1.2 0-2.3-.4-3.2-1.1.1-.3.6-.9 1.2-1.6.7-.6 1.6-1.3 2.9-1.7.4 1.2.8 2.5 1 4-.6.2-1.2.4-1.9.4zM6.5 12v-.1h.6c1.1 0 3.1-.1 5-.7l.3.7c-1.3.5-2.3 1.2-3.1 1.9-.7.6-1.2 1.3-1.5 1.7-.8-.9-1.3-2.2-1.3-3.5zm3.1-4.9c.4.5 1.1 1.4 1.9 3-1.6.5-3.3.6-4.3.6h-.5c.4-1.6 1.5-2.9 2.9-3.6zm2.4-.6c1.3 0 2.5.5 3.4 1.2-.7.9-1.7 1.5-2.7 2-.7-1.4-1.4-2.4-1.9-3 .4-.1.8-.2 1.2-.2zm4.3 2.1c.7.9 1.1 2 1.2 3.1-.8-.1-1.6-.2-2.3-.2-.5 0-1.1 0-1.6.1l-.3-.8c1.1-.5 2.1-1.2 3-2.2zM12 5c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7z' })
    )
  );
};

exports.default = Icon;