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
      _react2.default.createElement('path', { d: 'M12 8s10 0 10 3c0 0 .1 3.4-.2 3.3C21 11 12 11 12 11s-9 0-9.7 3.3C1.9 14.4 2 11 2 11c0-3 10-3 10-3zm0 4c8 0 8.8 2.3 8.8 2.3-1 3-1.8 3.7-5.8 3.7-3 0-2-1.5-3-1.5S12 18 9 18c-4 0-4.7-.7-5.7-3.7 0 0 .7-2.3 8.7-2.3z' })
    )
  );
};

exports.default = Icon;