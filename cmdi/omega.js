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
      _react2.default.createElement('path', { d: 'M19.1 19h-5.7v-2.1c2.1-1.7 3.2-3.7 3.2-6.1 0-1.5-.4-2.6-1.3-3.5C14.5 6.4 13.4 6 12 6c-1.3 0-2.4.4-3.3 1.3-.9.9-1.3 2.1-1.3 3.6 0 2.4 1.1 4.4 3.2 6V19H4.9v-2.1h3.5c-2.4-1.6-3.5-3.7-3.5-6.3 0-2.1.6-3.7 1.9-4.9 1.3-1.2 3-1.8 5.2-1.8 2.1 0 3.9.5 5.2 1.7 1.3 1.2 1.9 2.9 1.9 5 0 2.6-1.2 4.7-3.5 6.3h3.5V19z' })
    )
  );
};

exports.default = Icon;