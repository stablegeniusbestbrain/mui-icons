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
      _react2.default.createElement('path', { d: 'M3.5 18.5L5 19.9l1.8-1.8-1.5-1.4-1.8 1.8zm7.5 3.9h2v-2.9h-2v2.9zM4 10.5H1v2h3v-2zm11-4.2V1.5H9v4.8c-1.8 1-3 3-3 5.2 0 3.3 2.7 6 6 6s6-2.7 6-6c0-2.2-1.2-4.2-3-5.2zm5 4.2v2h3v-2h-3zm-2.8 7.7L19 20l1.4-1.4-1.8-1.8-1.4 1.4z' })
    )
  );
};

exports.default = Icon;