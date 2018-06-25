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
      _react2.default.createElement('path', { d: 'M12 5.5c.6 0 1.1.4 1.5 1.1l5.9 9.8c.9 1.4.2 2.6-1.4 2.6H6c-1.7 0-2.3-1.2-1.5-2.6l5.9-9.8c.5-.7 1-1.1 1.6-1.1m0-2c-1.3 0-2.5.8-3.3 2l-5.9 9.9c-.4.7-.6 1.5-.6 2.2 0 .6.1 1.1.4 1.6C3.2 20.4 4.5 21 6 21h12c1.5 0 2.8-.6 3.4-1.8.3-.5.4-1 .4-1.6 0-.7-.2-1.5-.6-2.2l-5.9-9.8c-.8-1.3-2-2.1-3.3-2.1zm1.5 13.3s-.7.3-1.1.1c-.3-.1-.4-.5-.2-1.1l.4-1.2c.4-1.3-.1-2.1-1.1-2.2-1.2 0-2 .9-2 .9s.7-.4 1.1-.2c.3.2.4.5.2 1.1l-.4 1.3c-.4 1.2.1 2 1.1 2.1 1.2 0 2-.8 2-.8z' }),
      _react2.default.createElement('circle', { cx: '12', cy: '10', r: '1.3' })
    )
  );
};

exports.default = Icon;