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
      _react2.default.createElement('path', { d: 'M.5 3.8l1.3-1.3 19.7 19.7-1.3 1.3-1.5-1.5H17v-1.7L3.7 7H2V5.3L.5 3.8zM4 2h3v2H5.8l-2-2H4zm18 2v3h-2V4h-3V2h3c1.1 0 2 .9 2 2zm-2 13h2v3.2l-2-2V17zM2 20v-3h2v3h3v2H4c-1.1 0-2-.9-2-2zm8-18h4v2h-4V2zm0 18h4v2h-4v-2zm10-10h2v4h-2v-4zM2 10h2v4H2v-4z' })
    )
  );
};

exports.default = Icon;