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
      _react2.default.createElement('path', { d: 'M12 5.5c.6 0 1.1.4 1.5 1.1l6 9.8c.8 1.4.1 2.6-1.5 2.6H6c-1.7 0-2.3-1.2-1.5-2.6l6-9.8c.4-.7.9-1.1 1.5-1.1m0-2c-1.3 0-2.5.8-3.3 2l-5.9 9.9c-.8 1.3-.8 2.7-.2 3.8S4.5 21 6 21h12c1.5 0 2.8-.6 3.4-1.8s.6-2.5-.2-3.8l-5.9-9.9c-.8-1.2-2-2-3.3-2z' }),
      _react2.default.createElement('circle', { cx: '12', cy: '16', r: '1.3' }),
      _react2.default.createElement('path', { d: 'M13.5 10c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5c0 .2 0 .4.1.6.6 1.3 1.4 3.4 1.4 3.4l1.4-3.4c.1-.2.1-.4.1-.6z' })
    )
  );
};

exports.default = Icon;