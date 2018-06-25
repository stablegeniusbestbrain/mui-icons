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
      _react2.default.createElement('path', { d: 'M12 3C7.5 3 3.3 4.8.3 7.7c-.2.1-.3.4-.3.7 0 .3.1.5.3.7l2.5 2.5c.2.1.4.3.7.3.2 0 .5-.2.7-.3.8-.8 1.7-1.4 2.6-1.9.4-.1.6-.5.6-.9V5.7c1.4-.4 3-.7 4.6-.7 1.6 0 3.1.3 4.6.7v3.1c0 .4.2.8.6.9.9.5 1.8 1.1 2.6 1.9.2.1.5.2.7.2.3 0 .6-.1.7-.2l2.5-2.5c.2-.2.3-.4.3-.7 0-.3-.1-.5-.3-.7C20.7 4.8 16.5 3 12 3zM9 7v3s-6 5-6 8v4h18v-4c0-3-6-8-6-8V7h-2v2h-2V7H9zm3 5c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4zm0 1.5c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5-1.1-2.5-2.5-2.5z' })
    )
  );
};

exports.default = Icon;