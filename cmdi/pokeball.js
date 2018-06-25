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
      _react2.default.createElement('path', { d: 'M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2zm0 2c-4.1 0-7.4 3.1-7.9 7h4c.5-1.7 2-3 3.9-3s3.4 1.3 3.9 3h4c-.5-3.9-3.8-7-7.9-7zm0 16c4.1 0 7.4-3.1 7.9-7h-4c-.5 1.7-2 3-3.9 3s-3.4-1.3-3.9-3h-4c.5 3.9 3.8 7 7.9 7zm0-10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z' })
    )
  );
};

exports.default = Icon;