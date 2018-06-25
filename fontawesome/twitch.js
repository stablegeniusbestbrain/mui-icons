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
      _react2.default.createElement('path', { d: 'M12 5.8v5.8h-1.9V5.8H12zm5.3 0v5.8h-1.9V5.8h1.9zm0 10.2l3.4-3.4V1.9h-16V16h4.4v2.9L12 16h5.3zm5.4-16v13.6l-5.9 5.8h-4.3l-2.9 2.9H6.7v-2.9H1.3V3.9L2.8 0h19.9z' })
    )
  );
};

exports.default = Icon;