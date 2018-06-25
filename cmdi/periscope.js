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
      _react2.default.createElement('path', { d: 'M12 7c0 1.1-.9 2-2 2s-2-.9-2-2c-.6.8-1 1.9-1 3 0 2.8 2.2 5 5 5s5-2.2 5-5-2.2-5-5-5c-.4 0-.8.1-1.2.2.7.3 1.2 1 1.2 1.8zm0-5c4.4 0 8 3.6 8 8 0 1-.2 2-.6 3-1.5 4.4-5.8 9-7.4 9-1.6 0-5.9-4.6-7.4-9-.4-1-.6-2-.6-3 0-4.4 3.6-8 8-8z' })
    )
  );
};

exports.default = Icon;