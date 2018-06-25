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
      _react2.default.createElement('path', { d: 'M12.9 15.1l-2.6-2.5.1-.1c1.7-1.9 2.9-4.1 3.7-6.5H17V4h-7V2H8v2H1v2h11.2c-.7 1.9-1.8 3.8-3.2 5.3-.9-1-1.7-2.1-2.3-3.3h-2c.7 1.6 1.7 3.2 3 4.6l-5.1 5L4 19l5-5 3.1 3.1.8-2zm5.6-5.1h-2L12 22h2l1.1-3h4.8l1.1 3h2l-4.5-12zm-2.6 7l1.6-4.3 1.6 4.3h-3.2z' })
    )
  );
};

exports.default = Icon;