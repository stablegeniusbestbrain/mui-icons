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
      _react2.default.createElement('path', { d: 'M16 21H8c-1.7 0-3-1.3-3-3s1.3-3 3-3h8c1.7 0 3 1.3 3 3s-1.3 3-3 3zm-8-4c-.5 0-1 .4-1 1s.5 1 1 1h8c.6 0 1-.4 1-1s-.4-1-1-1H8zm4-10.1l5 5.1H7l.1-.1 4.9-5M12 4l-6.4 6.6c-.4.4-.6.9-.6 1.4 0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2 0-.5-.2-1-.6-1.4L12 4z' })
    )
  );
};

exports.default = Icon;