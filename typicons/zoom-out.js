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
      _react2.default.createElement('path', { d: 'M13 11H8c-.3 0-.5.2-.5.5s.2.5.5.5h5c.3 0 .5-.2.5-.5s-.2-.5-.5-.5zm6.4 5l-1-1-.5-.6-.8-.7c.3-.7.4-1.4.4-2.2 0-3.9-3.1-7-7-7s-7 3.1-7 7 3.1 7 7 7c.8 0 1.5-.1 2.2-.4l.7.8 1.5 1.5.1.1h.1c.6.5 1.3.8 2.1.8 1.7 0 3.1-1.4 3.1-3.1 0-.9-.3-1.7-.9-2.2zM5.5 11.5c0-2.8 2.2-5 5-5s5 2.2 5 5-2.2 5-5 5-5-2.2-5-5z' })
    )
  );
};

exports.default = Icon;