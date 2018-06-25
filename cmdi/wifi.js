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
      _react2.default.createElement('path', { d: 'M12 21l3.6-4.8c-1-.8-2.3-1.2-3.6-1.2s-2.6.4-3.6 1.2L12 21zm0-18C7.9 3 4.2 4.3 1.2 6.6L3 9c2.5-1.9 5.6-3 9-3s6.5 1.1 9 3l1.8-2.4C19.8 4.3 16.1 3 12 3zm0 6c-2.7 0-5.2.9-7.2 2.4l1.8 2.4C8.1 12.7 10 12 12 12c2 0 3.9.7 5.4 1.8l1.8-2.4C17.2 9.9 14.7 9 12 9z' })
    )
  );
};

exports.default = Icon;