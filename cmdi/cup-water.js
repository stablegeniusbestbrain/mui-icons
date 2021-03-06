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
      _react2.default.createElement('path', { d: 'M18.3 8H5.7l-.5-4h13.6M12 19c-1.7 0-3-1.3-3-3 0-2 3-5.4 3-5.4s3 3.4 3 5.4c0 1.7-1.3 3-3 3zM3 2l2 18.2c.1 1 1 1.8 2 1.8h10c1 0 1.9-.8 2-1.8L21 2H3z' })
    )
  );
};

exports.default = Icon;