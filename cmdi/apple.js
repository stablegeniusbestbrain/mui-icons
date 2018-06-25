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
      _react2.default.createElement('path', { d: 'M18.7 19.5c-.8 1.2-1.7 2.4-3 2.5-1.4 0-1.8-.8-3.3-.8-1.6 0-2 .8-3.3.8-1.3.1-2.3-1.3-3.1-2.5-1.8-2.5-3.1-7-1.3-10.1.9-1.5 2.4-2.5 4.1-2.5 1.3 0 2.5.9 3.3.9.8 0 2.3-1.1 3.8-1 .7.1 2.5.3 3.7 2-.1.1-2.2 1.3-2.2 3.8 0 3.1 2.7 4.1 2.7 4.1s-.4 1.4-1.4 2.8zM13 3.5c.7-.8 1.9-1.5 2.9-1.5.2 1.2-.3 2.3-1 3.2-.7.8-1.8 1.5-2.9 1.4-.2-1.1.4-2.3 1-3.1z' })
    )
  );
};

exports.default = Icon;