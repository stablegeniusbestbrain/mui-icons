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
      _react2.default.createElement(
        'g',
        { style: { transform: 'scale(0.045)' } },
        _react2.default.createElement('path', { d: 'M387.58 139.712L356.756 109 216.913 248.32l30.83 30.718 139.838-139.326zM481.173 109L247.744 340.47l-91.39-91.052-30.827 30.715L247.744 403 512 139.712 481.172 109zM0 280.133L123.32 403l30.83-30.713-122.216-122.87L0 280.134z' })
      )
    )
  );
};

exports.default = Icon;