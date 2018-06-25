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
      _react2.default.createElement('path', { d: 'M12 10c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 12c-2 0-3.8-.6-5.3-1.5l3.3-5c.6.3 1.3.5 2 .5s1.4-.2 2-.5l3.3 5C15.8 21.4 14 22 12 22zM2 12c0-4.1 2.5-7.7 6.1-9.2l2.2 5.6C9 9 8 10.4 8 12H2zm14 0c0-1.6-1-3-2.3-3.6l2.2-5.6C19.5 4.3 22 7.9 22 12h-6z' })
    )
  );
};

exports.default = Icon;