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
      _react2.default.createElement('path', { d: 'M7.7 12q-2.1 0-3.6-1.5T2.6 6.9t1.5-3.7 3.6-1.5 3.7 1.5 1.5 3.7-1.5 3.6T7.7 12zm14.4 4.3l3.4 3.3q.1.1.1.3 0 .2-.1.3L23.7 22q-.2.2-.3.2-.2 0-.4-.2l-3.3-3.3-3.3 3.3q-.1.2-.3.2-.2 0-.3-.2L14 20.2q-.2-.1-.2-.3 0-.2.2-.3l3.3-3.3L14 13q-.2-.2-.2-.4 0-.1.2-.3l1.8-1.8q.1-.1.3-.1.2 0 .3.1l3.3 3.4 3.3-3.4q.2-.1.4-.1.1 0 .3.1l1.8 1.8q.1.2.1.3 0 .2-.1.4zm-6.6 0L13 18.7q-.5.5-.5 1.2t.5 1.2l1.2 1.1q-.3.1-.6.1H1.9q-1.7 0-2.6-.9t-1-2.6v-1.4q0-.7.2-1.4t.4-1.5.6-1.3.8-1.1 1.1-.7 1.5-.3q.3 0 .5.3Q5.5 13 7.7 13t4.3-1.6q.3-.3.5-.3.4 0 .8.1-.4.4-.6.7t-.2.7q0 .8.5 1.3z' })
    )
  );
};

exports.default = Icon;