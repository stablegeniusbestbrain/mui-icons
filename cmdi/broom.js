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
      _react2.default.createElement('path', { d: 'M19.4 2.7l1.4 1.4-5.7 5.8c1 1.5 1.2 3.3.3 4.5L9.1 8.1c1.2-.9 3-.7 4.5.3l5.8-5.7zM5.9 17.6c-2-2-3.2-4.4-3.6-6.7l4.9-2.1 7.5 7.5-2.1 4.9c-2.3-.4-4.7-1.6-6.7-3.6z' })
    )
  );
};

exports.default = Icon;