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
      _react2.default.createElement('path', { d: 'M3 12h4c0-2.8 2.2-5 5-5s5 2.2 5 5h4c.6 0 1 .4 1 1s-.4 1-1 1H3c-.6 0-1-.4-1-1s.4-1 1-1zm2 4h14c.6 0 1 .4 1 1s-.4 1-1 1H5c-.6 0-1-.4-1-1s.4-1 1-1zm12 4c.6 0 1 .4 1 1s-.4 1-1 1H7c-.6 0-1-.4-1-1s.4-1 1-1h10zm-2-8c0-1.7-1.3-3-3-3s-3 1.3-3 3h6zM12 2l2.4 3.4c-.8-.3-1.6-.4-2.4-.4-.8 0-1.6.1-2.4.4L12 2zM3.3 7l4.2-.4c-.6.6-1.1 1.2-1.6 1.9-.4.7-.7 1.5-.8 2.3L3.3 7zm17.3 0l-1.7 3.8c-.2-.8-.4-1.6-.9-2.3s-.9-1.3-1.5-1.9l4.1.4z' })
    )
  );
};

exports.default = Icon;