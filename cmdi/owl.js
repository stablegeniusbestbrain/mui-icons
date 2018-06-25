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
      _react2.default.createElement('path', { d: 'M12 16c.6.8 1.3 1.5 2.2 2L12 20.2 9.8 18c.9-.5 1.6-1.2 2.2-2zm5-4.8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-10 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm10-2.5c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4zm-10 0c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4zM2.2 1c1.8 3.7.5 6.5-.6 9.2-.4.8-.6 1.6-.6 2.5 0 3.3 2.7 6 6 6h.6l3 2.9L12 23l1.4-1.4 3-2.9h.6c3.3 0 6-2.7 6-6 0-.9-.2-1.7-.6-2.5-1.1-2.7-2.4-5.5-.6-9.2-2.7 2.1-6.4 3.7-9.8 3.7-3.4 0-7.1-1.6-9.8-3.7z' })
    )
  );
};

exports.default = Icon;