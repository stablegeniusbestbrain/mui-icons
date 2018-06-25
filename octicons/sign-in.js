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
      _react2.default.createElement('path', { d: 'M12 10.1V18h6v-6h1.5v6c0 .8-.7 1.5-1.5 1.5h-6V24l-8.2-4.1c-.5-.2-.8-.8-.8-1.3V1.5C3 .7 3.7 0 4.5 0H18c.8 0 1.5.7 1.5 1.5V6H18V1.5H6l6 3v3.4l4.5-3.4v3h6v3h-6v3L12 10.1z' })
    )
  );
};

exports.default = Icon;