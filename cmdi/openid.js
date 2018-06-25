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
      _react2.default.createElement('path', { d: 'M14 2l-3 1.5v16.4c-4-.4-7-2.4-7-4.9 0-2.2 2.5-4.2 6-4.8v-2c-5.1.7-9 3.5-9 6.8 0 3.6 4.4 6.5 10 6.9h.1l2.9-1.4V2zm1 6.2v2c1.1.2 2.2.6 3.1 1l-1.6.8 6.5 1.5-.5-4.5-2 1C19 9.1 17.1 8.5 15 8.2z' })
    )
  );
};

exports.default = Icon;