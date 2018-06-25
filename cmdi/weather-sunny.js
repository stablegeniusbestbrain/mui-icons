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
      _react2.default.createElement('path', { d: 'M12 7c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5zm0 2c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm0-7l2.4 3.4c-.8-.3-1.6-.4-2.4-.4-.8 0-1.6.1-2.4.4L12 2zM3.3 7l4.2-.4c-.6.6-1.1 1.2-1.6 1.9-.4.7-.7 1.5-.8 2.3L3.3 7zm.1 10l1.7-3.8c.2.8.4 1.6.9 2.3.4.7.9 1.4 1.5 1.9L3.4 17zM20.6 7l-1.7 3.8c-.2-.8-.4-1.6-.9-2.3s-.9-1.3-1.5-1.9l4.1.4zm0 10l-4.1.4c.6-.6 1.1-1.2 1.5-1.9.5-.7.7-1.5.9-2.3l1.7 3.8zM12 22l-2.4-3.4c.7.2 1.5.4 2.4.4.8 0 1.6-.2 2.4-.4L12 22z' })
    )
  );
};

exports.default = Icon;