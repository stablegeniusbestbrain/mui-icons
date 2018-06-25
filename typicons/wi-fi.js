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
      _react2.default.createElement('path', { d: 'M13.4 19.4c.8-.8.8-2 0-2.8-.8-.8-2-.8-2.8 0-.8.8-.8 2 0 2.8.8.8 2 .8 2.8 0zm7.1-7.9c-.5 0-1-.2-1.4-.6C15.2 7 8.8 7 4.9 10.9c-.8.8-2 .8-2.8 0-.8-.8-.8-2 0-2.8 5.5-5.5 14.3-5.5 19.8 0 .8.8.8 2 0 2.8-.4.4-.9.6-1.4.6zM7.8 15.8c-.6 0-1.1-.2-1.5-.6-.7-.8-.7-2.1 0-2.9 3.2-3.1 8.2-3.1 11.4 0 .7.8.7 2.1 0 2.9-.8.8-2.1.8-2.9 0-1.5-1.6-4.1-1.6-5.6 0-.4.4-.9.6-1.4.6z' })
    )
  );
};

exports.default = Icon;