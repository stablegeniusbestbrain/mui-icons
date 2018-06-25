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
      _react2.default.createElement('path', { d: 'M12 3L2 12h3v8h14v-8h3L12 3zm0 4.7c2.1 0 3.8 1.7 3.8 3.8 0 3-3.8 6.5-3.8 6.5s-3.8-3.5-3.8-6.5c0-2.1 1.7-3.8 3.8-3.8zm0 2.3c-.8 0-1.5.7-1.5 1.5S11.2 13 12 13s1.5-.7 1.5-1.5S12.8 10 12 10z' })
    )
  );
};

exports.default = Icon;