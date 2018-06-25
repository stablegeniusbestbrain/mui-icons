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
      _react2.default.createElement('path', { d: 'M21 6.5l-4 4V7c0-.5-.4-1-1-1H9.8L21 17.2V6.5zM3.3 2L2 3.3 4.7 6H4c-.5 0-1 .5-1 1v10c0 .6.5 1 1 1h12c.2 0 .4-.1.5-.2l3.2 3.2 1.3-1.3L3.3 2z' })
    )
  );
};

exports.default = Icon;