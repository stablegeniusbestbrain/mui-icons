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
      _react2.default.createElement('path', { d: 'M19 8l-4 4h3c0 3.3-2.7 6-6 6-1 0-2-.3-2.8-.7l-1.5 1.5C9 19.5 10.4 20 12 20c4.4 0 8-3.6 8-8h3M6 12c0-3.3 2.7-6 6-6 1 0 2 .3 2.8.7l1.5-1.5C15 4.5 13.6 4 12 4c-4.4 0-8 3.6-8 8H1l4 4 4-4' })
    )
  );
};

exports.default = Icon;