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
      _react2.default.createElement('path', { d: 'M12 10.4C12 8 10 6 7.6 6s-4.3 2-4.3 4.4c0 1.1.1 2.8 1.7 4.4l7 5.2s5.4-3.7 7-5.2 1.8-3.3 1.8-4.4c0-2.4-2-4.4-4.4-4.4S12 8 12 10.4' })
    )
  );
};

exports.default = Icon;