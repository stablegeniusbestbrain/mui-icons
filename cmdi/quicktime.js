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
      _react2.default.createElement('path', { d: 'M12 3c5 0 9 4 9 9 0 1.8-.5 3.4-1.4 4.8l1.4 1.4V20c0 .6-.4 1-1 1h-1.8l-1.4-1.4c-1.4.9-3 1.4-4.8 1.4-5 0-9-4-9-9s4-9 9-9zm0 4c-2.8 0-5 2.2-5 5s2.2 5 5 5c.6 0 1.3-.1 1.8-.3l-2.9-2.9c-.7-.8-.7-2.1 0-2.9.8-.7 2.1-.7 2.9 0l2.9 2.9c.2-.5.3-1.2.3-1.8 0-2.8-2.2-5-5-5z' })
    )
  );
};

exports.default = Icon;