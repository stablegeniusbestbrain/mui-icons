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
      _react2.default.createElement('path', { d: 'M12 14c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm11.5-5.1l-1.6 6.9-6.9-1.6 3.8-2.4C17.4 9.5 14.9 8 12 8c-3.9 0-7.2 2.9-7.9 6.6l-2-.3C3 9.6 7.1 6 12 6c3.6 0 6.7 1.9 8.5 4.7l3-1.8z' })
    )
  );
};

exports.default = Icon;