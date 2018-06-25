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
      _react2.default.createElement('path', { d: 'M7.5 2c-1.8 1.1-3 3.2-3 5.5s1.2 4.3 3 5.5C4.5 13 2 10.5 2 7.5S4.5 2 7.5 2zm11.6 1.5l1.4 1.4L4.9 20.5l-1.4-1.4L19.1 3.5zm-6.2 2.4L11.4 5 10 6l.4-1.7L9 3.2l1.7-.1.6-1.6.7 1.6h1.7l-1.3 1.2.5 1.6zM9.6 9.5l-1.2-.7-1.1.8.3-1.3-1-.9h1.3l.5-1.3.5 1.2 1.3.1-1 .8.4 1.3zm9.4 4c0 3-2.5 5.5-5.5 5.5-1.2 0-2.3-.4-3.3-1.1l7.7-7.7c.7 1 1.1 2.1 1.1 3.3zm-4.4 6.6l2.8-1.2-.3 3.4-2.5-2.2zm4.3-2.7l1.2-2.8 2.2 2.5-3.4.3zm1.2-5l-1.2-2.8 3.4.3-2.2 2.5zM9.6 18.9l2.8 1.2-2.5 2.2-.3-3.4z' })
    )
  );
};

exports.default = Icon;