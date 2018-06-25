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
      _react2.default.createElement('path', { d: 'M12 20.4q-.3 0-1.2-1t-1-1.2q0-.5.8-.8t1.4-.3 1.4.3.8.8q0 .2-1 1.2t-1.2 1zm3.6-3.6l-.5-.4q-.5-.4-1.4-.6t-1.7-.4-1.7.4-1.4.6-.5.4q-.3 0-1.3-1t-1-1.3q0-.2.2-.3 1-1 2.6-1.6T12 12t3.1.6 2.6 1.6q.2.1.2.3 0 .3-1 1.3t-1.3 1zm3.7-3.7q-.2 0-.3-.1-1.9-1.4-3.4-2.1t-3.6-.6q-1.1 0-2.3.3t-2 .7-1.5.8-1.1.7-.4.3q-.2 0-1.2-1t-1-1.2q0-.2.1-.3 1.8-1.8 4.3-2.8t5.1-.9 5.1.9 4.3 2.8q.1.1.1.3 0 .2-1 1.2t-1.2 1zm3.6-3.6q-.1 0-.3-.1-2.4-2.1-5-3.2T12 5.1 6.4 6.2t-5 3.2q-.2.1-.3.1-.2 0-1.2-1t-1.1-1.3q0-.1.2-.3 2.5-2.5 5.9-3.8T12 1.7t7.1 1.4T25 6.9q.2.2.2.3 0 .3-1.1 1.3t-1.2 1z' })
    )
  );
};

exports.default = Icon;