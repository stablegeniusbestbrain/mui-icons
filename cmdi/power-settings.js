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
      _react2.default.createElement('path', { d: 'M15 24h2v-2h-2m1.6-17.6l-1.5 1.5c1.7 1 2.9 2.9 2.9 5.1 0 3.3-2.7 6-6 6s-6-2.7-6-6c0-2.2 1.2-4.1 2.9-5.1L7.4 4.4C5.4 5.9 4 8.3 4 11c0 4.4 3.6 8 8 8s8-3.6 8-8c0-2.7-1.4-5.1-3.4-6.6zM13 2h-2v10h2m-2 12h2v-2h-2m-4 2h2v-2H7v2z' })
    )
  );
};

exports.default = Icon;