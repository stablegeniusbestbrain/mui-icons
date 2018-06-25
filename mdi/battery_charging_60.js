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
      _react2.default.createElement('path', { d: 'M15.7 4H14V2h-4v2H8.3C7.6 4 7 4.6 7 5.3V11h3.9L13 7v4h4V5.3c0-.7-.6-1.3-1.3-1.3z' }),
      _react2.default.createElement('path', { d: 'M13 12.5h2L11 20v-5.5H9l1.9-3.5H7v9.7c0 .7.6 1.3 1.3 1.3h7.4c.7 0 1.3-.6 1.3-1.3V11h-4v1.5z' })
    )
  );
};

exports.default = Icon;