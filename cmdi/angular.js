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
      _react2.default.createElement('path', { d: 'M12 2.5l8.8 3.2-1.3 11.6-7.5 4.2-7.5-4.2L3.2 5.7 12 2.5zm0 2.1L6.5 17h2l1.1-2.8h4.7l1.1 2.8h2.1L12 4.6zm1.6 7.9h-3.2L12 8.6l1.6 3.9z' })
    )
  );
};

exports.default = Icon;