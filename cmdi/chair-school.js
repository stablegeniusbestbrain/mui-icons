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
      _react2.default.createElement('path', { d: 'M22 5v2h-5l-3.5 5H16v2h-1.5l3.7 8H16l-1-2H6.4l-1.1 2H3.1l4.1-8H7c-.5 0-.8-.3-1-.7L2.9 3.8l.9-.3c.5-.2 1.1.1 1.3.7L7.7 12h4.4l3.5-5H12V5h10zM9.5 14l-2.1 4h6.7l-1.8-4H9.5z' })
    )
  );
};

exports.default = Icon;