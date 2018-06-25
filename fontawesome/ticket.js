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
      _react2.default.createElement('path', { d: 'M13.7 6.1l4.2 4.2-7.6 7.6-4.2-4.2zm-2.8 13.1l8.3-8.3q.2-.3.2-.6t-.2-.6l-4.9-4.9q-.2-.2-.6-.2t-.6.2l-8.3 8.3q-.2.3-.2.6t.2.6l4.9 4.9q.2.2.6.2t.6-.2zm11.9-8.6L10.6 22.8q-.4.5-1.2.5t-1.2-.5l-1.7-1.7q.8-.7.8-1.8t-.8-1.8-1.8-.8-1.8.8l-1.7-1.7q-.5-.5-.5-1.2t.5-1.2L13.4 1.2q.5-.5 1.2-.5t1.2.5l1.7 1.7q-.8.7-.8 1.8t.8 1.8 1.8.8 1.8-.8l1.7 1.7q.5.5.5 1.2t-.5 1.2z' })
    )
  );
};

exports.default = Icon;