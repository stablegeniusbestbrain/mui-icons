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
      _react2.default.createElement('path', { d: 'M4.2 11.3l7.1-7.1c2.3-2.3 6.1-2.3 8.5 0 2.3 2.4 2.3 6.2 0 8.5l-7.1 7.1c-2.3 2.3-6.1 2.3-8.5 0-2.3-2.4-2.3-6.2 0-8.5zm1.4 1.4c-1 1.1-1.4 2.5-1 3.9l6-6 4.2 4.2 3.6-3.5c1.5-1.6 1.5-4.1 0-5.7-1.6-1.5-4.1-1.5-5.7 0l-7.1 7.1z' })
    )
  );
};

exports.default = Icon;