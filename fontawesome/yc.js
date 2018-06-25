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
      _react2.default.createElement('path', { d: 'M12.5 13.4l3.6-6.6h-1.5l-2.1 4.1q-.3.7-.6 1.3l-.5-1.3-2.1-4.1H7.7l3.5 6.6v4.3h1.3v-4.3zm9.8-11.7v20.6H1.7V1.7h20.6z' })
    )
  );
};

exports.default = Icon;