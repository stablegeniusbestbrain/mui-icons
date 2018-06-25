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
      _react2.default.createElement('path', { d: 'M14.7 7.7L10.4 12l4.3 4.3L9 22H8v-7.6L3.4 19 2 17.6 7.6 12 2 6.4 3.4 5 8 9.6V2h1l5.7 5.7zM10 5.8v3.8l1.9-1.9L10 5.8zm1.9 10.5L10 14.4v3.8l1.9-1.9zM22 8h-2v3h-2V8h-2l3-4 3 4zm0 8l-3 4-3-4h2v-3h2v3h2z' })
    )
  );
};

exports.default = Icon;