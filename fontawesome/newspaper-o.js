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
      _react2.default.createElement('path', { d: 'M12 6.9H6.9V12H12V6.9zm1.7 8.5v1.7H5.1v-1.7h8.6zm0-10.3v8.6H5.1V5.1h8.6zm8.6 10.3v1.7h-6.9v-1.7h6.9zm0-3.4v1.7h-6.9V12h6.9zm0-3.4v1.7h-6.9V8.6h6.9zm0-3.5v1.8h-6.9V5.1h6.9zM1.7 18V5.1H0V18q0 .3.3.6t.6.3.6-.3.2-.6zM24 18V3.4H3.4V18q0 .4-.1.9h19.8q.4 0 .6-.3t.3-.6zm1.7-16.3V18q0 1.1-.7 1.8t-1.9.8H.9q-1.1 0-1.9-.8t-.7-1.8V3.4h3.4V1.7h24z' })
    )
  );
};

exports.default = Icon;