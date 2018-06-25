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
      _react2.default.createElement('path', { d: 'M12 3C9.8 3 8 4.8 8 7v6H6v2h3v6h2v-6h2v6h2v-6h3v-2h-2V7c0-2.2-1.8-4-4-4zm0 2c1.1 0 2 .9 2 2v5h-4V7c0-1.1.9-2 2-2z' })
    )
  );
};

exports.default = Icon;