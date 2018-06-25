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
      _react2.default.createElement('path', { d: 'M13.1 18.9q0-.5-.3-.8t-.8-.3-.8.3-.3.8.3.7.8.3.8-.3.3-.7zm2.8-2.2V7.3q0-.2-.2-.3t-.3-.1H8.6q-.2 0-.3.1t-.2.3v9.4q0 .2.2.3t.3.1h6.8q.2 0 .3-.1t.2-.3zM13.3 5.4q0-.3-.2-.3h-2.2q-.2 0-.2.3t.2.2h2.2q.2 0 .2-.2zm3.8-.3v13.8q0 .7-.5 1.2t-1.2.5H8.6q-.7 0-1.2-.5t-.5-1.2V5.1q0-.7.5-1.2t1.2-.5h6.8q.7 0 1.2.5t.5 1.2z' })
    )
  );
};

exports.default = Icon;