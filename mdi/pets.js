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
      _react2.default.createElement('circle', { cx: '4.5', cy: '9.5', r: '2.5' }),
      _react2.default.createElement('circle', { cx: '9', cy: '5.5', r: '2.5' }),
      _react2.default.createElement('circle', { cx: '15', cy: '5.5', r: '2.5' }),
      _react2.default.createElement('circle', { cx: '19.5', cy: '9.5', r: '2.5' }),
      _react2.default.createElement('path', { d: 'M17.3 14.9c-.8-1.1-1.6-1.9-2.4-3-.5-.5-1.1-1-1.8-1.3-.1 0-.2 0-.3-.1H12c-.3 0-.5 0-.8.1h-.3c-.7.3-1.3.8-1.8 1.4-.8 1-1.6 1.9-2.4 2.9-1.4 1.3-3 2.7-2.7 4.8.3 1 1.1 2 2.4 2.3.7.1 3-.5 5.5-.5h.2c2.5 0 4.8.6 5.5.5 1.3-.3 2.1-1.3 2.4-2.3.3-2.1-1.3-3.5-2.7-4.8z' })
    )
  );
};

exports.default = Icon;