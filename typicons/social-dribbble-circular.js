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
      _react2.default.createElement('path', { d: 'M12 21c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9zm0-16c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zm0 1.5C9 6.5 6.5 9 6.5 12S9 17.5 12 17.5s5.5-2.5 5.5-5.5S15 6.5 12 6.5zm4.5 5.4c-1.1-.2-2.1-.2-3.1 0-.1-.3-.3-.6-.4-.9.8-.5 1.6-1.2 2.3-2.1.7.8 1.2 1.8 1.2 3zm-2-3.6c-.6.7-1.2 1.3-2 1.8-.5-.9-1-1.7-1.7-2.4.4-.1.8-.2 1.2-.2.9 0 1.8.3 2.5.8zm-4.6-.2c.6.7 1.2 1.6 1.7 2.4-1.2.6-2.6.7-4 .5.3-1.3 1.1-2.3 2.2-2.9zM7.5 12c.5.1.9.1 1.4.1 1.1 0 2.2-.2 3.2-.7.1.3.2.6.3.8-1.4.6-2.7 1.5-3.7 2.8-.7-.8-1.2-1.8-1.2-3zm1.9 3.7c.9-1.2 2.1-2.1 3.4-2.5.3 1 .5 2 .6 3.1-.5.1-.9.2-1.4.2-.9 0-1.8-.3-2.6-.8zm4.9.1c-.1-1-.3-1.9-.6-2.9.9-.2 1.8-.2 2.7 0-.2 1.2-1 2.3-2.1 2.9z' })
    )
  );
};

exports.default = Icon;