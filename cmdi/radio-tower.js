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
      _react2.default.createElement('path', { d: 'M12 10c1.1 0 2 .9 2 2 0 .5-.2.9-.5 1.3l3.2 8.7h-2.1L12 14.9 9.4 22H7.3l3.2-8.7c-.3-.4-.5-.8-.5-1.3 0-1.1.9-2 2-2zm0-2c-2.2 0-4 1.8-4 4 0 .5.1 1 .3 1.5l-.9 2.4C6.5 14.8 6 13.5 6 12c0-3.3 2.7-6 6-6s6 2.7 6 6c0 1.5-.5 2.8-1.4 3.9l-.9-2.4c.2-.5.3-1 .3-1.5 0-2.2-1.8-4-4-4zm0-4c-4.4 0-8 3.6-8 8 0 2.4 1 4.5 2.6 5.9l-.7 2C3.5 18.1 2 15.2 2 12 2 6.5 6.5 2 12 2s10 4.5 10 10c0 3.2-1.5 6.1-3.9 7.9l-.7-2C19 16.5 20 14.4 20 12c0-4.4-3.6-8-8-8z' })
    )
  );
};

exports.default = Icon;