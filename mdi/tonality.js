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
      _react2.default.createElement('path', { d: 'M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1 17.9c-3.9-.5-7-3.8-7-7.9s3-7.4 7-7.9v15.8zm2-15.8c1 .1 2 .4 2.9.9H13v-.9zM13 7h5.2c.3.3.5.7.7 1H13V7zm0 3h6.7c.1.3.2.7.2 1H13v-1zm0 9.9V19h2.9c-.9.5-1.9.8-2.9.9zm5.2-2.9H13v-1h5.9c-.2.4-.4.7-.7 1zm1.5-3H13v-1h6.9c0 .3-.1.7-.2 1z' })
    )
  );
};

exports.default = Icon;