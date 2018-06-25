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
      _react2.default.createElement('path', { d: 'M12 21c-.8 0-1.6-.3-2.1-.9S9 18.8 9 18c0-.7.3-1 .8-2H4.9c-1.6 0-3-1.3-3-3s1.4-3 3-3h4.9C9.3 9 9 8.7 9 8c0-.8.3-1.6.9-2.1 1.1-1.2 3.1-1.2 4.2 0l7.1 7.1-7.1 7.1c-.5.6-1.3.9-2.1.9zm-7.1-9c-.5 0-1 .4-1 1s.5 1 1 1h9.7l-3.3 3.3c-.2.2-.3.4-.3.7 0 .3.1.5.3.7.4.4 1 .4 1.4 0l5.7-5.7-5.7-5.7c-.4-.4-1-.4-1.4 0-.2.2-.3.4-.3.7 0 .3.1.5.3.7l3.3 3.3H4.9z' })
    )
  );
};

exports.default = Icon;