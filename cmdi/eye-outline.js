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
      _react2.default.createElement('path', { d: 'M12 9c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3zm0-4.5c5 0 9.3 3.1 11 7.5-1.7 4.4-6 7.5-11 7.5S2.7 16.4 1 12c1.7-4.4 6-7.5 11-7.5zM3.2 12c1.6 3.4 5 5.5 8.8 5.5 3.8 0 7.2-2.1 8.8-5.5-1.6-3.4-5-5.5-8.8-5.5-3.8 0-7.2 2.1-8.8 5.5z' })
    )
  );
};

exports.default = Icon;