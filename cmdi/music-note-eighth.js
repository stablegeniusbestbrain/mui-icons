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
      _react2.default.createElement('path', { d: 'M12 3v9.3c-.5-.2-1-.3-1.5-.3-2 0-3.6 1.3-4.2 3H3v3h3.3c.6 1.7 2.2 3 4.2 3s3.6-1.3 4.2-3H19v-3h-4V6h4V3h-7z' })
    )
  );
};

exports.default = Icon;