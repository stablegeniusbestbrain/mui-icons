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
      _react2.default.createElement('path', { d: 'M10.6 13.4c.4.4.4 1 0 1.4-.4.4-1 .4-1.4 0-2-1.9-2-5.1 0-7l3.5-3.6c2-1.9 5.1-1.9 7.1 0 1.9 2 1.9 5.1 0 7.1l-1.5 1.5c0-.8-.1-1.7-.4-2.4l.5-.5c1.1-1.2 1.1-3.1 0-4.3-1.2-1.1-3.1-1.1-4.3 0l-3.5 3.6c-1.2 1.1-1.2 3 0 4.2zm2.8-4.2c.4-.4 1-.4 1.4 0 2 1.9 2 5.1 0 7l-3.5 3.6c-2 1.9-5.1 1.9-7.1 0-1.9-2-1.9-5.1 0-7.1l1.5-1.5c0 .8.1 1.7.4 2.4l-.5.5c-1.1 1.2-1.1 3.1 0 4.3 1.2 1.1 3.1 1.1 4.3 0l3.5-3.6c1.2-1.1 1.2-3 0-4.2-.4-.4-.4-1 0-1.4z' })
    )
  );
};

exports.default = Icon;