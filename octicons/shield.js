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
      _react2.default.createElement('path', { d: 'M12 0L1.5 3v9c0 7 8 12 10.5 12s10.5-5 10.5-12V3L12 0zM9 16.5l1.7-4.2a.9.9 0 0 0-.4-.9C9.5 10.9 9 10 9 9c0-1.6 1.3-3 3-3 1.6 0 3 1.4 3 3 0 1-.5 1.9-1.3 2.4-.3.2-.5.6-.4.9l1.7 4.2H9z' })
    )
  );
};

exports.default = Icon;