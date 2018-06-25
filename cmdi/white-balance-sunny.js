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
      _react2.default.createElement('path', { d: 'M3.5 18.5L5 19.9l1.8-1.7-1.5-1.5m5.7 5.7c.3.1 2 0 2 0v-2.9h-2m1-14c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm8 7h3v-2h-3m-2.8 7.7L19 20l1.5-1.5-1.8-1.8m1.7-12.2L19 3l-1.8 1.8 1.5 1.5M13 .5h-2v3h2m-9 7H1v2h3m2.8-7.7L5 3 3.5 4.5l1.8 1.8 1.5-1.5z' })
    )
  );
};

exports.default = Icon;