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
      _react2.default.createElement('path', { d: 'M12 15c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM7 7c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm5-5C8.4 2 5.2 3.5 3 6l9 16 9-16c-2.2-2.5-5.4-4-9-4z' })
    )
  );
};

exports.default = Icon;