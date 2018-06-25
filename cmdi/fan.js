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
      _react2.default.createElement('path', { d: 'M12 11c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1zm.5-9c4.5 0 4.6 3.6 2.3 4.8-1 .4-1.5 1.5-1.7 2.4.5.2.9.5 1.2.9 3.7-2 7.7-1.2 7.7 2.4 0 4.5-3.5 4.6-4.7 2.2-.5-1-1.6-1.4-2.5-1.6-.2.5-.5.9-.9 1.2 2 3.7 1.2 7.7-2.4 7.7-4.5 0-4.6-3.6-2.2-4.8 1-.5 1.4-1.5 1.6-2.4-.5-.2-.9-.5-1.2-.9C6 15.9 2 15.1 2 11.5 2 7 5.6 6.9 6.7 9.3c.5.9 1.6 1.4 2.5 1.6.2-.5.5-.9.9-1.3C8.2 6 8.9 2 12.5 2z' })
    )
  );
};

exports.default = Icon;