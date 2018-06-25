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
      _react2.default.createElement('path', { d: 'M2 5.7c6.9-4.6 9.1 1.3 9.3 4.6.2 3.2-3 7.3-7 4.6v5.4L2 18.8V5.7zm2.2 1.7v5.4c3.6 2.2 4.9.4 4.9-2.7 0-4.4-2.5-4.5-4.9-2.7zm10.9-3.2s-.2 3.4 0 6.9c.3 3.4 4.6.7 4.6.7V4.9l2.3.3v9.2c0 6.2-6.2 5.9-6.2 5.9l-.7-2.3c5.4 0 4.7-3.6 4.7-3.6-6.5 2.6-7-1.8-7-1.8V5.7l2.3-1.5z' })
    )
  );
};

exports.default = Icon;