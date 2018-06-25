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
      _react2.default.createElement('path', { d: 'M4 2h2v2c0 1.4.7 2.6 1.9 3.8.8.8 2 1.6 3.2 2.4l-1.8 1.2c-1-.7-2-1.4-2.8-2.2C5.1 7.8 4 6.1 4 4V2zm14 0h2v2c0 2.1-1.1 3.8-2.5 5.2-1.4 1.4-3.2 2.5-5 3.6-1.7 1.2-3.4 2.3-4.6 3.4C6.7 17.4 6 18.6 6 20v2H4v-2c0-2.1 1.1-3.8 2.5-5.2 1.4-1.4 3.2-2.5 5-3.6 1.7-1.2 3.4-2.3 4.6-3.4C17.3 6.6 18 5.4 18 4V2zm-3.3 10.6c1 .7 2 1.4 2.8 2.2 1.4 1.4 2.5 3.1 2.5 5.2v2h-2v-2c0-1.4-.7-2.6-1.9-3.8-.8-.8-2-1.6-3.2-2.4l1.8-1.2zM7 3h10v1l-.1.5H7.1L7 4V3zm.7 3h8.6c-.2.3-.5.7-.9 1.1l-.5.4H9.1l-.5-.4c-.4-.4-.7-.8-.9-1.1zm1.4 10.5h5.8l.5.4c.4.4.7.8.9 1.1H7.7c.2-.3.5-.7.9-1.1l.5-.4zm-2 3h9.8l.1.5v1H7v-1l.1-.5z' })
    )
  );
};

exports.default = Icon;