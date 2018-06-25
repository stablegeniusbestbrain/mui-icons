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
      _react2.default.createElement('path', { d: 'M12 4.2v15.6c0 1-1.2 1.5-1.9.8L4.5 15h-3C.7 15 0 14.3 0 13.5v-3C0 9.7.7 9 1.5 9h3l5.6-5.6c.7-.7 1.9-.2 1.9.8zM23.3 9l-1.6-1.5-2.9 2.9-3-2.9L14.2 9l3 3-3 3 1.6 1.5 3-2.9 2.9 2.9 1.6-1.5-3-3 3-3z' })
    )
  );
};

exports.default = Icon;