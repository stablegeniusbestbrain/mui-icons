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
      _react2.default.createElement('path', { d: 'M13 3l1 .1c2.8-1.3 5.2-1.5 6.5-.2 1 1 1.1 2.8.4 4.8C21.6 9 22 10.5 22 12l-.1 1H9.1c.3 2.3 2 4 3.9 4 1.3 0 2.5-.8 3.2-2h5.3c-1.2 3.5-4.6 6-8.5 6-1.3 0-2.5-.3-3.6-.7-2.9 1.4-5.5 1.6-6.8.3C1 19 1.7 15.6 4 12c.9-1.5 2.1-2.9 3.6-4.3l.8-.8c-1.2.7-2.7 1.7-4.2 3.3C5 6.1 8.7 3 13 3zm0 4c-1.8 0-3.3 1.5-3.8 3.5h7.6c-.5-2-2-3.5-3.8-3.5zm7.1-2.9c-.7-.7-1.9-.8-3.4-.3 1.5.7 2.8 1.8 3.7 3.1.3-1.3.2-2.2-.3-2.8zM3.9 20c.8.8 2.5.7 4.5-.2-1.8-1.1-3.2-2.9-3.9-4.9-1.2 2.2-1.5 4.2-.6 5.1z' })
    )
  );
};

exports.default = Icon;