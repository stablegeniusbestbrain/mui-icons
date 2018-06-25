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
      _react2.default.createElement('path', { d: 'M12 21c-1.7 0-3-1.3-3-3v-4.8c-1.1 1.1-3 1-4.1-.1-1.2-1.1-1.2-3.1 0-4.2L12 1.8l7.1 7.1c1.2 1.1 1.2 3.1 0 4.2-1.1 1.1-3 1.2-4.1.1V18c0 1.7-1.3 3-3 3zM11 8.4V18c0 .6.4 1 1 1s1-.4 1-1V8.4l3.3 3.3c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4L12 4.6l-5.7 5.7c-.4.4-.4 1 0 1.4.4.4 1 .4 1.4 0L11 8.4z' })
    )
  );
};

exports.default = Icon;