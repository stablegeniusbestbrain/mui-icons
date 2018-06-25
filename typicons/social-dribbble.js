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
      _react2.default.createElement('path', { d: 'M12 3c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm7 8.3c-1.8-.3-3.6-.2-5.2.2l-.6-1.2c1.4-.9 2.7-2 3.7-3.3 1.1 1.1 1.9 2.6 2.1 4.3zm-2.9-4.9c-.9 1.2-2.1 2.2-3.4 3-.8-1.5-1.7-2.8-2.8-4.1.7-.2 1.4-.3 2.1-.3 1.5 0 3 .5 4.1 1.4zm-7.2-.7C10.1 7 11 8.4 11.8 9.8c-2 1-4.4 1.3-6.7.9.4-2.2 1.9-4 3.8-5zM5 12v-.3c.7.1 1.4.2 2 .2 1.9 0 3.6-.4 5.3-1.2.2.4.3.8.5 1.1-2.4.9-4.6 2.5-6.1 4.8C5.6 15.3 5 13.7 5 12zm2.4 5.3c1.4-2.2 3.5-3.7 5.8-4.5.6 1.8 1.1 3.8 1.2 5.7-.7.3-1.5.5-2.4.5-1.8 0-3.4-.7-4.6-1.7zm8 .8c-.2-1.9-.6-3.8-1.3-5.6 1.6-.4 3.2-.5 4.9-.2-.1 2.5-1.5 4.7-3.6 5.8z' })
    )
  );
};

exports.default = Icon;