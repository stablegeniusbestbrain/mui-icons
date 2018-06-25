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
      _react2.default.createElement('path', { d: 'M12.6 2c5.6 0 10 4.5 10 10s-4.4 10-10 10c-3.5 0-6.6-1.8-8.3-4.6l1.5-1.2c1.4 2.3 4 3.8 6.8 3.8 4.5 0 8-3.6 8-8s-3.5-8-8-8c-4 0-7.4 3.1-7.9 7h2.8l-3.8 3.7L0 11h2.7c.5-5.1 4.7-9 9.9-9zm3 8.2c.5 0 .9.5.9 1v4.6c0 .5-.4.9-.9.9h-5.5c-.6 0-1-.4-1-.9v-4.6c0-.5.4-1 .9-1v-1c0-1.5 1.3-2.7 2.8-2.7 1.5 0 2.8 1.2 2.8 2.7v1zm-2.8-2.3c-.7 0-1.4.6-1.4 1.3v1h2.8v-1c0-.7-.6-1.3-1.4-1.3z' })
    )
  );
};

exports.default = Icon;