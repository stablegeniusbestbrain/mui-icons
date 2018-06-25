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
      _react2.default.createElement('path', { d: 'M20 4h-3.2L15 2H9L7.2 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 3c1.6 0 3.1.8 4 2h-4c-1.7 0-3 1.3-3 3 0 .3.1.7.2 1H7.1c-.1-.3-.1-.7-.1-1 0-2.8 2.2-5 5-5zm0 10c-1.6 0-3.1-.8-4-2h4c1.7 0 3-1.3 3-3 0-.3-.1-.7-.2-1h2.1c.1.3.1.7.1 1 0 2.8-2.2 5-5 5z' })
    )
  );
};

exports.default = Icon;