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
      _react2.default.createElement('path', { d: 'M21 11c0 5.6-3.8 10.7-9 12-5.2-1.3-9-6.4-9-12V5l9-4 9 4v6m-9 10c3.8-1 7-5.5 7-9.8V6.3l-7-3.1V21z' })
    )
  );
};

exports.default = Icon;