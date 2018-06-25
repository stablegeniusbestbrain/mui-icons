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
      _react2.default.createElement('path', { d: 'M5.1 21.3l-1.4-1.4 9.7-9.7-.2-.2c-.8-.8-.8-2 0-2.8l4.3-4.4.9.9L15.2 7l.9.9 3.3-3.2.9.9-3.2 3.3.9.9 3.3-3.2.9.9-4.4 4.3c-.8.8-2 .8-2.8 0l-.2-.2-9.7 9.7z' })
    )
  );
};

exports.default = Icon;