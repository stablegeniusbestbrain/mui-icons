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
      _react2.default.createElement('path', { d: 'M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 2c4.1 0 7.5 3.1 8 7h-3c-.5-1.1-2.6-2-5-2s-4.5.9-5 2H4c.5-3.9 3.9-7 8-7zm-8 9h3c.2 1.3 1.2 3.6 4 4v3c-3.6-.4-6.6-3.4-7-7zm9 7v-3c2.8-.4 3.7-2.7 4-4h3c-.4 3.6-3.4 6.6-7 7z' })
    )
  );
};

exports.default = Icon;