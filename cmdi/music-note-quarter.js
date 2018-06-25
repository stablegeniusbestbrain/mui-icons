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
      _react2.default.createElement('path', { d: 'M12 3h3v12h4v3h-4.3c-.6 1.7-2.2 3-4.2 3s-3.6-1.3-4.2-3H3v-3h3.3c.6-1.7 2.2-3 4.2-3 .5 0 1 .1 1.5.3V3z' })
    )
  );
};

exports.default = Icon;