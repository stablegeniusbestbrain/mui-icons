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
      _react2.default.createElement('path', { d: 'M4 2h16c1.1 0 2 .9 2 2v13.3L17.3 22H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2zm13 15v3.3l3.3-3.3H17zm-7 2h4v-1h1v-5c1.2-.9 2-2.4 2-4 0-2.8-2.2-5-5-5S7 6.2 7 9c0 1.6.8 3.1 2 4v5h1v1zm4-2h-4v-1h4v1zm0-2h-4v-1h4v1zM12 5c2.2 0 4 1.8 4 4 0 1.5-.8 2.8-2 3.5v.5h-4v-.5c-1.2-.7-2-2-2-3.5 0-2.2 1.8-4 4-4z' })
    )
  );
};

exports.default = Icon;