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
      _react2.default.createElement('path', { d: 'M23.6 7c-.4-.3-4.9-4-11.6-4-1.5 0-2.9.2-4.2.5l10.4 10.3L23.6 7zM17 15.2L3.3 1.4 2 2.7l2 2.1C1.9 5.8.6 6.8.4 7L12 21.5l3.9-4.9 3.3 3.4 1.3-1.3-3.5-3.5z' })
    )
  );
};

exports.default = Icon;