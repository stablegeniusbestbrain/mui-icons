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
      _react2.default.createElement('path', { d: 'M12 3v5.7l3 3V6h4V3h-7zM5.3 4.5L4 5.8l6.3 6.2c-2.4.2-4.3 2.1-4.3 4.5C6 19 8 21 10.5 21c2.4 0 4.3-1.9 4.5-4.3l4.7 4.8 1.3-1.3-6-6-3-3-6.7-6.7z' })
    )
  );
};

exports.default = Icon;